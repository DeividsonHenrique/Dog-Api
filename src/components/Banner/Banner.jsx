import { BannerContainer, BannerImg } from "./style";
import Search from "../search/Search";

function Banner() {
  return (
    <>
      <Search />
      <BannerContainer>
        <BannerImg />
      </BannerContainer>
    </>
  );
}

export default Banner;
