import ArticleCardUI from "./articlecardui";
import articleCardCompileStyles from "../../styles/Home.module.scss";
import { createContext } from "react";
import CurrencyImage from "../../assets/image-currency.jpg";
import RestaurantImage from "../../assets/image-restaurant.jpg";
import PlaneImage from "../../assets/image-plane.jpg";
import ConfettiImage from "../../assets/image-confetti.jpg";
import { ArticleAuthor, ArticleTitle, ArticleDescription } from "./articledata";

export const ArticleImageContext = createContext();
export const AuthorContext = createContext();
export const ArticleTitleContext = createContext();
export const ArticleDescriptionContext = createContext();

function ArticleCardCompile() {
  return (
    <div className={articleCardCompileStyles["article-card-compile-wrapper"]}>
      <div className={articleCardCompileStyles["article-card-compile-content"]}>
        <div>
          <ArticleImageContext.Provider value={CurrencyImage}>
            <AuthorContext.Provider value={ArticleAuthor.cardOneFour}>
              <ArticleTitleContext.Provider value={ArticleTitle.cardOne}>
                <ArticleDescriptionContext.Provider
                  value={ArticleDescription.cardOne}
                >
                  <ArticleCardUI />
                </ArticleDescriptionContext.Provider>
              </ArticleTitleContext.Provider>
            </AuthorContext.Provider>
          </ArticleImageContext.Provider>
        </div>

        <div>
          <ArticleImageContext.Provider value={RestaurantImage}>
            <AuthorContext.Provider value={ArticleAuthor.cardTwoThree}>
              <ArticleTitleContext.Provider value={ArticleTitle.cardTwo}>
                <ArticleDescriptionContext.Provider
                  value={ArticleDescription.cardTwo}
                >
                  <ArticleCardUI />
                </ArticleDescriptionContext.Provider>
              </ArticleTitleContext.Provider>
            </AuthorContext.Provider>
          </ArticleImageContext.Provider>
        </div>

        <div>
          <ArticleImageContext.Provider value={PlaneImage}>
            <AuthorContext.Provider value={ArticleAuthor.cardTwoThree}>
              <ArticleTitleContext.Provider value={ArticleTitle.cardThree}>
                <ArticleDescriptionContext.Provider
                  value={ArticleDescription.cardThree}
                >
                  <ArticleCardUI />
                </ArticleDescriptionContext.Provider>
              </ArticleTitleContext.Provider>
            </AuthorContext.Provider>
          </ArticleImageContext.Provider>
        </div>

        <div>
          <ArticleImageContext.Provider value={ConfettiImage}>
            <AuthorContext.Provider value={ArticleAuthor.cardOneFour}>
              <ArticleTitleContext.Provider value={ArticleTitle.cardFour}>
                <ArticleDescriptionContext.Provider
                  value={ArticleDescription.cardFour}
                >
                  <ArticleCardUI />
                </ArticleDescriptionContext.Provider>
              </ArticleTitleContext.Provider>
            </AuthorContext.Provider>
          </ArticleImageContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default ArticleCardCompile;
