import { useEffect, useState } from "react";
import { Square, ArrowIcon } from "../style";

function GoToTop() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <Square
        onClick={backToTop}
        className={`${scroll > 1000 ? "active" : ""}`}
      >
        <ArrowIcon />
      </Square>
    </div>
  );
}

export default GoToTop;
