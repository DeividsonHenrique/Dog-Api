/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useRef, useState } from "react";

const CardContext = createContext();

export function CardProvider({ children }) {
  const [dogData, setDogData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedBreedsId, setSelectedBreedsId] = useState(null);
  const [loading, setLoading] = useState(true);
  const cardRefs = useRef({});

  useEffect(() => {
    fetch("https://api.thedogapi.com/v1/breeds")
      .then((response) => response.json())
      .then((breedsData) => {
        const selectedBreeds = breedsData.slice(0, 50);
        const breedImagesPromises = selectedBreeds.map((breed) =>
          fetch(
            `https://api.thedogapi.com/v1/images/search?breed_id=${breed.id}`
          )
            .then((response) => response.json())
            .then((imagesData) => ({
              ...breed,
              imageUrl: imagesData[0]?.url || "default_image_url.jpg", // Imagem padrão
            }))
        );
        Promise.all(breedImagesPromises).then((data) => {
          setDogData(data);
          setFilteredData(data);
        })
      })
      .then((breedsWithImages) => {
        setDogData(breedsWithImages);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao buscar dados dos cachorros:", error);
        setLoading(false);
      });
  }, []);

  const showDetails = (id) => {
    setSelectedBreedsId(id);
  };

  const showAllCards = () => {
    const lastSelectedId = selectedBreedsId;
    setSelectedBreedsId(null);
    setTimeout(() => {
      if (lastSelectedId && cardRefs.current[lastSelectedId]) {
        cardRefs.current[lastSelectedId].scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }, 0);
  };


  const onSearch = (query) => {
    if(query === "") {
      setFilteredData(dogData);
    } else {
      const filteredSearch = dogData.filter((dog) =>
        dog.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredData(filteredSearch);
    }
  };

  if (loading) {
    return <h1>Carregando...</h1>;
  }

  return (
    <CardContext.Provider
      value={{ dogData: filteredData, selectedBreedsId, cardRefs, showDetails, showAllCards, onSearch }}
    >
      {children}
    </CardContext.Provider>
  );
}

export const useCards = () => {
  return useContext(CardContext);
};
