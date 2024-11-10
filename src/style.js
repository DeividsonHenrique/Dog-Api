import { createGlobalStyle, styled } from "styled-components";
import { FaArrowUp } from "react-icons/fa";

export const GlobalStyle = createGlobalStyle`
    :root {
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #F2F2F2;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
    }
`;

export const Square = styled.a`
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 45px;
  height: 50px;
  background-color: blue;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 10px;
  transition: all 0.3s;
  visibility: hidden;
  opacity: 0;

  &:hover {
    opacity: 0.5;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  }

  &.active {
    visibility: visible;
    opacity: 1;
  }
`;

export const ArrowIcon = styled(FaArrowUp)`
  color: white;
  font-size: 20px;
`;
