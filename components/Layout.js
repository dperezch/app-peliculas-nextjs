import Head from "next/head";
import Menu from "./Menu";
import Encabezado from "./Encabezado";
import { useRouter } from "next/router";
import Footer from "./Footer";

const Layout = ({ titulo, descripcion, autor, keywords, children }) => {

  const router = useRouter()

  return (
    <div>
      <Head>
        <title> {titulo} </title>
        <meta name="description" content={descripcion} />
        <meta name="author" content={autor} />
        <meta name="keywords" content={keywords} />
      </Head>

      <Menu/>

      {router.pathname === '/' && <Encabezado />}  {/* if verdadero */}

      <div className="container">{children}</div>

      <Footer/>
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
