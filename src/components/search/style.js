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
`;
