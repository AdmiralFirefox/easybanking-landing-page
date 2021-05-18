import CardUI from "./cardui";
import compileStyles from "../../styles/Home.module.scss";
import React, { createContext } from "react";
import BankingIcon from "../../assets/icon-online.svg";
import OnBoardingIcon from "../../assets/icon-onboarding.svg";
import BudgetingIcon from "../../assets/icon-budgeting.svg";
import ApiIcon from "../../assets/icon-api.svg";
import { CardTitles, CardDescription } from "./carddata";

export const IconContext = createContext();
export const TitleContext = createContext();
export const DescriptionContext = createContext();

function CardCompile() {
  return (
    <div className={compileStyles["card-compile-wrapper"]}>
      <div className={compileStyles["card-compile-content"]}>
        <div>
          <IconContext.Provider value={BankingIcon}>
            <TitleContext.Provider value={CardTitles.cardOne}>
              <DescriptionContext.Provider value={CardDescription.cardOne}>
                <CardUI />
              </DescriptionContext.Provider>
            </TitleContext.Provider>
          </IconContext.Provider>
        </div>

        <div>
          <IconContext.Provider value={BudgetingIcon}>
            <TitleContext.Provider value={CardTitles.cardTwo}>
              <DescriptionContext.Provider value={CardDescription.cardTwo}>
                <CardUI />
              </DescriptionContext.Provider>
            </TitleContext.Provider>
          </IconContext.Provider>
        </div>

        <div>
          <IconContext.Provider value={OnBoardingIcon}>
            <TitleContext.Provider value={CardTitles.cardThree}>
              <DescriptionContext.Provider value={CardDescription.cardThree}>
                <CardUI />
              </DescriptionContext.Provider>
            </TitleContext.Provider>
          </IconContext.Provider>
        </div>

        <div>
          <IconContext.Provider value={ApiIcon}>
            <TitleContext.Provider value={CardTitles.cardFour}>
              <DescriptionContext.Provider value={CardDescription.cardFour}>
                <CardUI />
              </DescriptionContext.Provider>
            </TitleContext.Provider>
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default CardCompile;
