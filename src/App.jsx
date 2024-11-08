import { GlobalStyle } from "./style.js";
import Header from "./components/Header/Header.jsx";
import Banner from "./components/Banner/Banner.jsx";

import Main from "./components/Main/Main.jsx";
import GoToTop from "./components/GoToTop.jsx";
import Search from "./components/search/Search.jsx";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Banner />
      <Search />
      <Main />
      <GoToTop />
    </>
  );
}

export default App;
