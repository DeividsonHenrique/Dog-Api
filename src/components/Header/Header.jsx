import { IoIosArrowDown } from "react-icons/io";
import { HeaderContainer, DivLogo, DivLinks } from "./style";
import { useCards } from "../../CreateContext.jsx";

function Header() {
  const { showAllCards } = useCards();

  return (
    <HeaderContainer>
      <DivLogo onClick={showAllCards}>
        <img src="/Images/logo.jpg" alt="logo" />
        <h2>Logo</h2>
      </DivLogo>
      <DivLinks>
        <span>
          Explorar <IoIosArrowDown />
        </span>
        <span>Licença</span>
        <span>Upload</span>
        <span>...</span>
        <span>Registre-se</span>
      </DivLinks>
    </HeaderContainer>
  );
}

export default Header;
