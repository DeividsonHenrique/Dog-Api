import { BannerContainer, BannerImg } from "./style";
import Search from "../search/Search";

function Banner() {
  return (
    <>
      <BannerContainer>
        <Search />
        <BannerImg />
      </BannerContainer>
    </>
  );
}

export default Banner;
