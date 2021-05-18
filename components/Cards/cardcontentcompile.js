import cardContentStyles from "../../styles/Home.module.scss";
import CardCompile from "./cardcompile";
import Info from "./info";

function CardContentCompile() {
  return (
    <div className={cardContentStyles["card-content-compile-wrapper"]}>
      <Info />
      <CardCompile />
    </div>
  );
}

export default CardContentCompile;
