import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";

export const HeaderContainer = styled.header`
  max-width: 1920px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 20px;
  height: 80px;
  background-color: transparent;
`;

export const DivLogo = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  cursor: pointer;
  transition: all 0.3s;
  

  img {
    width: 50px;
    height: 50px;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  }

  h2 {
    margin-left: 10px;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 1px;
    color: white;
  }

  &:hover {
    opacity: 0.7;
    color: #181818;
  }

  @media (max-width: 768px) {
    img {
      width: 30px;
      height: 30px;
    }

    h2 {
      font-size: 16px;
    }
  }


 
`;

export const DivLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  span {
    position: relative;
    cursor: pointer;
    padding: 10px;
    transition: all 0.3s;
    color: white;
    font-weight: 500;

    &:hover {
      color: #ccc;
    }

    &:nth-child(4) {
      position: relative;
      margin-bottom: 10px;
    }

    &:nth-child(5) {
      background-color: white;
      padding: 10px 20px;
      border-radius: 10px;
      color: #181818;

      &:hover {
        box-shadow: inset 0 0 10px 0 rgba(0, 0, 0, 0.2);
        color: black;
      }
    }
  }

  @media (max-width: 768px) {
    span {
      font-size: 12px;

      &:nth-child(4) {
        display: none;
      }

      &:nth-child(5) {
        padding: 5px 10px;
      }
    }
  }

  @media (max-width: 500px) {
    display: none;
  }
`;


export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 1000;

  .modal-content {
    position: relative;
    background-color: #fff;
    padding: 20px;
    width: 300px;
    height: 300px;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;   
    overflow: hidden;   
}

    input {
      position:absolute;
      bottom: 0;
      width: 300px;
      height: 40px;
      border: none;
      border-top: 1px solid rgba(0, 0, 0, 0.2);
      background-color: #05705a;
      font-size: 18px;
      z-index: 2;
      cursor: pointer;
      color: white;
      transition: all 0.3s;

      &:hover {
        background-color: #0d6f64;
        color: #f2f2f2;
      }
    }
`;


export const Menu = styled(GiHamburgerMenu)`
      color: red;
      position: fixed;
      right: 20px;
      top: 20px;
      font-size: 30px;
      cursor: pointer;
      z-index: 1000;
      display: none;


      @media (max-width: 500px) {
        display: flex;
      }
`

