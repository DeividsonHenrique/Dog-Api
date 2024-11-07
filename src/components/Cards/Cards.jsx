
import { Card, DivImg, DivInfo, VerMais, DivDetalhes, InfoDetalhes, ImgDetalhes } from "./style";
import { useCards } from "../../CreateContext.jsx";

function Cards() {
  const { dogData, selectedBreedsId, cardRefs, showDetails, showAllCards, nextDog, previousDog } = useCards();


  
  return (
    <>
    {selectedBreedsId === null ? (
      dogData.map((dog, index) => (
      <Card key={index} ref={(el) => cardRefs.current[dog.id] = el}>
        <DivImg imageUrl={dog.imageUrl}>
        </DivImg>
        <DivInfo>
          <h6>{dog.name}</h6>
          <span>{dog.temperament || "Sem descrição"}</span>
        </DivInfo>
        <VerMais type="button" value="Ver mais" onClick={() => showDetails(dog.id)} />
      </Card>
    ))
    ) : (
      dogData
          .filter(dog => dog.id === selectedBreedsId)
          .map((dog, index) => (
            <DivDetalhes key={index}>
              <ImgDetalhes imageUrl={dog.imageUrl}/>
              <InfoDetalhes>
                <h6>Raça: {dog.name}</h6>
                <span><strong>Temperamento:</strong> {dog.temperament || "Sem descrição"}</span>
                <p><strong>Tamanho:</strong> {dog.height?.metric || "Desconhecido"} cm</p>
                <p><strong>Peso:</strong> {dog.weight?.metric || "Desconhecido"} kg</p>
                <p><strong>Expectativa de vida:</strong> {dog.life_span || "Desconhecido"}</p>
                <p><strong>Origem:</strong> {dog.origin || "Desconhecido"}</p>
                <div>
                  <button onClick={showAllCards}>Voltar</button>
                  <button onClick={nextDog}>Proximo</button>
                  <button onClick={previousDog}>Anterior</button>
                </div>
              </InfoDetalhes>
              
            </DivDetalhes>
            
          ))
    )}
    </>
  );
}

export default Cards;
