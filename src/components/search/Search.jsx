import { SearchContainer } from "./style";
import { FaSearch } from "react-icons/fa";
import { useCards } from "../../CreateContext.jsx";
import { useState } from "react";

function Search() {
  const { onSearch } = useCards();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  const clearSearch = () => {
    setSearchQuery('');
    onSearch('');
  };

  return (
    <SearchContainer>
      <span>
        Encontre todas os tipos de informações, imagens e raças completas sobre
        cachorros com a Dogs API aqui!
      </span>
      <div>
        <input type="text" placeholder="Buscar por raça" value={searchQuery} onChange={handleSearch} />
        <FaSearch className="icon" onClick={clearSearch} />
      </div>
    </SearchContainer>
  );
}

export default Search;
