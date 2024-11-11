import styled from "styled-components";
import { IoMdCloseCircle } from "react-icons/io";

export const Card = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 390px;
  width: 300px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  margin: 10px;
  overflow: hidden;


  @media (max-width: 500px) {
    width: 280px;
    height: 380px;
  }
`;

export const DivImg = styled.div`
  height: 250px;
  width: 100%;
  background-color: red;
  overflow: hidden;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: top center;
  transition: all 0.3s;

    &:hover {
      transform: scale(1.05);
   
`;

export const DivInfo = styled.div`
  overflow: hidden;
  height: 120px;
  width: 100%;
  z-index: 1;
  background-color: white;

  h6 {
    font-size: 18px;
    font-weight: 600;
    margin: 5px 0px;
    text-align: center;
  }

  span {
    display: block;
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    margin: 0px 10px;
  }
`;

export const VerMais = styled.input`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 35px;
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
`;

// parte de detalhes


export const DivDetalhes = styled.div`
  max-width: 1920px;
  position: relative;
  margin-top: 50px;
  width: 80%;
  height: 500px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;


  @media (max-width: 1100px) {
    height: 400px;
    width: 90%;
  }
`;

export const CloseBtn = styled(IoMdCloseCircle)`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  height: 50px;
  width: 50px;
  color: #05705a;
  z-index: 10000;
  overflow: auto;
  border-radius: 50%;
  transition: all 0.3s;

  &:hover {
    color: #0d6f64;
    box-shadow: inset 0 0 10px 0 rgba(0, 0, 0, 0.2),
      0 0 10px 0 rgba(0, 0, 0, 0.2);
  }


  @media (max-width: 1100px) {
    height: 40px;
    width: 40px;
  }
`;

export const InfoDetalhes = styled.div`
  background-color: #fff;
  width: 50%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 20px;
  flex-direction: column;
  overflow: hidden;

  h6 {
    font-size: 18px;
    font-weight: 600;
    margin: 30px 0px 30px 0px;
    text-align: center;
  }

  span {
    width: 80%;
    display: block;
    font-size: 14px;
    font-weight: 400;
    text-align: start;
    margin: 0px 10px;
  }

  p {
    width: 80%;
    text-align: start;
  }

  div {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
  }

  button {
    margin-top: 20px;
    width: 200px;
    height: 30px;
    border: none;
    border-radius: 5px;
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

  strong {
    font-weight: 600;
  }



  @media (max-width: 1500px) {
    button {
      width: 150px;
    }
  }

  @media (max-width: 1280px) {
    button {
      width: 150px;
    }
  }

  @media (max-width: 1100px) {
    height: 400px;

    h6{
      font-size: 16px;
      margin: 20px 0px 0px 0px;
    }

    span {
      font-size: 12px;
      margin: 0px 0px;
    }


    button {
      margin-top: 10px;
      width: 100px;
    }
  }
`;

export const ImgDetalhes = styled.div`
  width: 50%;
  height: 500px;
  background-image: url(${(props) => props.imageUrl});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
`;
