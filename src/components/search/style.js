import styled from "styled-components";

export const SearchContainer = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 610px;

  span {
    margin-bottom: 20px;
    font-size: 30px;
    font-weight: 600;
    color: white;
    text-align: start;
  }

  div {
    position: relative;
    width: 100%;
  }

  input {
    position: relative;
    padding: 10px 20px;
    border: none;
    border-radius: 10px;
    font-size: 20px;
    width: 100%;
  }

  .icon {
    position: absolute;
    font-size: 25px;
    color: #ccc;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 90%;

    span {
      font-size: 20px;
    }

    input {
      font-size: 15px;
    }

    .icon {
      font-size: 20px;
    }
  }

  @media (max-width: 500px) {
    width: 80%;

    span {
      font-size: 15px;
      text-align: center;
    }

    input {
      font-size: 10px;
    }

    .icon {
      font-size: 15px;
    }
  }
`;
