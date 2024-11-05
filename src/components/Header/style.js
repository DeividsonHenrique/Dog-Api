import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 20px;
  height: 80px;
  background-color: transparent;
  z-index: 10;
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
`;
