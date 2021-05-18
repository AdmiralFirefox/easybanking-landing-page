import uiStyles from "../../styles/Home.module.scss";
import React, { useContext } from "react";
import { IconContext, TitleContext, DescriptionContext } from "./cardcompile";

function CardUI() {
  const cardIcon = useContext(IconContext);
  const cardTitle = useContext(TitleContext);
  const cardDescripton = useContext(DescriptionContext);

  return (
    <div className={uiStyles["card-ui-wrapper"]}>
      <div className={uiStyles["card-ui-content"]}>
        <img src={cardIcon} alt="Card Icon" />
        <h2>{cardTitle}</h2>
        <p>{cardDescripton}</p>
      </div>
    </div>
  );
}

export default CardUI;
