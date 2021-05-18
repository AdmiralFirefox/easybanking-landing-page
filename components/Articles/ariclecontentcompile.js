import articleContentStyles from "../../styles/Home.module.scss";
import ArticleCardCompile from "./articlecardcompile";

function ArticleContentCompile() {
  return (
    <div className={articleContentStyles["article-content-wrapper"]}>
      <div className={articleContentStyles["article-content-title"]}>
        <h1>Latest Articles</h1>
      </div>

      <div>
        <ArticleCardCompile />
      </div>
    </div>
  );
}

export default ArticleContentCompile;
