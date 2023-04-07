import Head from "next/head";
import Menu from "./Menu";

const Layout = ({ titulo, descripcion, autor, keywords, children }) => {
  return (
    <div>
      <Head>
        <title> {titulo} </title>
        <meta name="description" content={descripcion} />
        <meta name="author" content={autor} />
        <meta name="keywords" content={keywords} />
      </Head>

      <Menu/>

      <div className="container">{children}</div>
    </div>
  );
};

export default Layout;

Layout.defaultProps = {
  titulo: "Aplicación de películas con Next JS",
  descripcion: "Crea y administra películas",
  autor: "davarmando@gmail.com",
  keywords: "app películas, administrador películas, aplicación películas",
};
