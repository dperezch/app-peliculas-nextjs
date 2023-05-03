import Layout from "@/components/Layout";
import Pelicula from "@/components/Pelicula";
import { URL_API } from "@/config";

export default function Home({ peliculas }) {
  console.log(peliculas);

    return (
    <Layout>
      <h1 className="'text-center mt-4">Aplicación Peliculas</h1>

      {peliculas.data.map((pelicula) => (
        <Pelicula key={pelicula.id} pelicula={pelicula} />
      ))}
    </Layout>
  );
}

  /* if (error) {
    return <div>An error occured: {error.message} </div>;
  }
  return (
    <Layout>
      <h1 className="text-center mt-4">Aplicación de Películas</h1>
      {peliculas.data.map((pelicula) => (
        <Pelicula key={pelicula.id} pelicula={pelicula} />
      ))}
    </Layout>
  );
} */

//ejemplo: getStaticProps
export async function getStaticProps() {
  const res = await fetch(`${URL_API}/api/peliculas`);
  const peliculas = await res.json();

  //console.log(peliculas);

  return {
    props: { peliculas },
    revalidate: 2,
  };
}


//ejemplo strapi
/* export async function getInitialProps() {
  try {
    const parseJSON = (resp) => (resp.json ? resp.json() : resp);

    const checkStatus = (resp) => {
      if (resp.status >= 200 && resp.status < 300) {
        return resp;
      }
      return parseJSON(resp).then((resp) => {
        throw resp;
      });
    };
    const headers = {
      "Content-Type": "application/json",
    };

    const peliculas = await fetch(`${URL_API}/api/peliculas`, {
      method: "GET",
      headers,
    })
      .then(checkStatus)
      .then(parseJSON);
    return {
      peliculas,
    };
  } catch (error) {
    return { error };
  }
} */



//ejemplo 1: getServerSideProps
/* export async function getServerSideProps(){
  const res = await fetch(`${URL_API}/api/peliculas`)
  const peliculas = await res.json()

  return{
    props: {peliculas}
  }
} */

