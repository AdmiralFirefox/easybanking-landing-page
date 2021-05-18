import ArticleContentCompile from "../components/Articles/ariclecontentcompile";
import CardContentCompile from "../components/Cards/cardcontentcompile";
import Footer from "../components/Footer/footer";
import MainPage from "../components/Main/mainpage";

export default function Home() {
  return (
    <div>
      <MainPage />
      <CardContentCompile />
      <ArticleContentCompile />
      <Footer />
    </div>
  );
}
