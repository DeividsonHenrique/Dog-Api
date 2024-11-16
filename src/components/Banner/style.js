import styled from "styled-components";

export const BannerContainer = styled.div`
  height: 420px;
  z-index: -10;
`;

export const BannerImg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0 20px;
  height: 500px;
  background: url("/Images/Banner1.jpg");
  background-size: cover;
  background-position: 100% 30%;
  overflow: hidden;
  z-index: -1;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  }

  @media (max-width: 768px) {
    background-position: 50% 30%;
  }

  @media (max-width: 500px) {
    height: 400px;
  }
`;
