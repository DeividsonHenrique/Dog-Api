import { IoIosArrowDown } from "react-icons/io";
import {
  HeaderContainer,
  DivLogo,
  DivLinks,
  ModalContainer,
  Menu,
} from "./style";
import { useCards } from "../../CreateContext.jsx";
import { Fade } from "react-awesome-reveal";
import { useState } from "react";

function Header() {
  const { showAllCards } = useCards();
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Menu
        className={`icon ${showModal ? "open" : ""}`}
        onClick={() => setShowModal(!showModal)}
      />

      {showModal && (
        <ModalContainer>
          <div className="modal-content">
            <span>Explorar</span>
            <span>Licença</span>
            <span>Upload</span>
            <span>...</span>
            <span>Registre-se</span>
            <input
              type="button"
              value="Fechar"
              onClick={() => setShowModal(false)}
            />
          </div>
        </ModalContainer>
      )}

      <Fade triggerOnce>
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
      </Fade>
    </>
  );
}

export default Header;
