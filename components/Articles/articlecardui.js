import articleCardUIStyles from "../../styles/Home.module.scss";
import { useContext } from "react";
import {
  ArticleImageContext,
  AuthorContext,
  ArticleTitleContext,
  ArticleDescriptionContext,
} from "./articlecardcompile";

function ArticleCardUI() {
  const articleImage = useContext(ArticleImageContext);
  const articleAuthor = useContext(AuthorContext);
  const articleTitle = useContext(ArticleTitleContext);
  const articleDescription = useContext(ArticleDescriptionContext);

  return (
    <div className={articleCardUIStyles["article-card-ui-wrapper"]}>
      <div>
        <img src={articleImage} alt="Article Card Image" />
      </div>

      <div>
        <p className={articleCardUIStyles["article-author"]}>
          By {articleAuthor}
        </p>
        <h3 className={articleCardUIStyles["article-title"]}>{articleTitle}</h3>
        <p className={articleCardUIStyles["article-description"]}>
          {articleDescription}
        </p>
      </div>
    </div>
  );
}

export default ArticleCardUI;
