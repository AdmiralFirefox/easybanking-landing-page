import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>

      {/* Font Awesome */}

      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
        integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk"
        crossorigin="anonymous"
      ></link>

      {/* Public Sans Font */}

      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@300&display=swap"
        rel="stylesheet"
      ></link>

      {/* Material UI Icons */}

      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
    </Head>
  );
};

Meta.defaultProps = {
  title: "Easy Banking Landing Page",
  keywords: "Easy Banking Landing Page, Easy Banking, Frontend Mentors",
  description: "Easy Banking Landing Page Challenge by Frontend Mentors",
};

export default Meta;
