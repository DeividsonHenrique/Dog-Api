import { SearchContainer } from "./style";
import { FaSearch } from "react-icons/fa";
import { useCards } from "../../CreateContext.jsx";

function Search() {
  const { selectedBreedsId, clearSearch, handleSearch, searchQuery } =
    useCards();

  return (
    <SearchContainer>
      <span>
        Encontre todas os tipos de informações, imagens e raças completas sobre
        cachorros com a Dogs API aqui!
      </span>
      <div>
        <input
          type="text"
          placeholder="Buscar por raça"
          value={searchQuery}
          onChange={handleSearch}
          disabled={selectedBreedsId !== null}
        />
        <FaSearch className="icon" onClick={clearSearch} />
      </div>
    </SearchContainer>
  );
}

export default Search;
