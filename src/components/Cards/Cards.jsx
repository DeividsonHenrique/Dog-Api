import {
  Card,
  DivImg,
  DivInfo,
  VerMais,
  DivDetalhes,
  InfoDetalhes,
  ImgDetalhes,
  CloseBtn,
} from "./style";
import { useCards } from "../../CreateContext.jsx";
import { Fade } from "react-awesome-reveal";

function Cards() {
  const {
    dogData,
    selectedBreedsId,
    cardRefs,
    showDetails,
    CloseAndReturnCleaned,
    nextDog,
    previousDog,
  } = useCards();

  return (
    <>
      
      
      {selectedBreedsId === null
        ? dogData.map((dog, index) => (
          <Fade key={index} cascade direction="up" triggerOnce duration={300} delay={100}>
            <Card key={index} ref={(el) => (cardRefs.current[dog.id] = el)}>
              <DivImg imageUrl={dog.imageUrl}></DivImg>
              <DivInfo>
                <h6>{dog.name}</h6>
                <span>{dog.temperament || "Sem descrição"}</span>
              </DivInfo>
              <VerMais
                type="button"
                value="Ver mais"
                onClick={() => showDetails(dog.id)}
              />
            </Card>
            </Fade>
          ))
          : dogData
          .filter((dog) => dog.id === selectedBreedsId)
          .map((dog, index) => (
            <DivDetalhes key={index}>
                  <CloseBtn onClick={CloseAndReturnCleaned}></CloseBtn>
                  <ImgDetalhes imageUrl={dog.imageUrl} />
                <InfoDetalhes>
                <Fade cascade direction="up" triggerOnce duration={250} delay={100}>
                  <h6>Raça: {dog.name}</h6>
                  <span>
                    <strong>Temperamento:</strong>{" "}
                    {dog.temperament || "Sem descrição"}
                  </span>
                  <p>
                    <strong>Tamanho:</strong>{" "}
                    {dog.height?.metric || "Desconhecido"} cm
                  </p>
                  <p>
                    <strong>Peso:</strong>{" "}
                    {dog.weight?.metric || "Desconhecido"} kg
                  </p>
                  <p>
                    <strong>Expectativa de vida:</strong>{" "}
                    {dog.life_span || "Desconhecido"}
                  </p>
                  <p>
                    <strong>Origem:</strong> {dog.origin || "Desconhecido"}
                  </p>
              </Fade>
                  <div>
                    <Fade direction="left" triggerOnce>
                    <button onClick={previousDog}>Anterior</button>
                    </Fade>
                    <Fade direction="right" triggerOnce>
                    <button onClick={nextDog}>Proximo</button>
                    </Fade>
                  </div>
                </InfoDetalhes>
              </DivDetalhes>
            ))}
            
    </>
  );
}

export default Cards;
