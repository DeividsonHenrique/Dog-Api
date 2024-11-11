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


export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 98vh;
  color: red;
  flex-direction: column;


  div{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    width: 60px;
    background-color: aqua;
    position: relative;
    
    &:first-child{
      color: #181818;
      position: absolute; 
      top: 45%;
      transform: translateX(-48.2%);
      animation: first .8s linear infinite;
      border-radius: 10px;
    }

    &:last-child{
      color: #181818;
      position: absolute; 
      bottom: 41.5%;
      transform: translateX(48.5%);
      animation: last .8s linear infinite;
      border-radius: 10px;
    }

    @keyframes first {
      0% {
        left: 48.2%;
        transform: translateX(-48.2%);
      }

      50% {
        left: 48.2%;
        transform: translateX(50%);
      }

      100% {
        left: 48.2%;
        transform: translateX(-48.2%);
      }
    }

    @keyframes last {
      0% {
        right: 48.5%;
        transform: translateX(48.5%);
      }

      50% {
        right: 48.5%;
        transform: translateX(-50%);
      }

      100% {
        right: 48.5%;
        transform: translateX(48.5%);
      }
    }
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
