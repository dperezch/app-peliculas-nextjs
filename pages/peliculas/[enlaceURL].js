import Layout from "@/components/Layout";
import { URL_API } from "@/config";
import styles from "@/styles/[enlaceURL].module.css";
import Image from "next/image";
import Link from "next/link";

const enlaceURL = ({ pelicula }) => {
  console.log(pelicula);
  return (
    <Layout titulo="Detalle película">
      <div className={styles.caja}>
        <div className="row">
          <div className="col-sm-4 offset-8">
            <Link href={`/peliculas/editar/${pelicula.id}`} className="btn btn-secondary btn-sm mx-1 my-2">
                  <i className="bi bi-pencil-fill">Editar</i>
            </Link>
            <a href="#" className="btn btn-danger btn-sm" ><i className="bi bi-eraser-fill">Borrar</i></a>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h2 className="card-title"> {pelicula.titulo} </h2>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-sm-6 offset-3">
                <Image
                  className="img-responsive"
                  src={
                    pelicula.imagen
                      ? pelicula.imagen
                      : "/imagenes/pelicula-temp.jpg"
                  }
                  width={255}
                  height={382}
                  alt="Aquí va la imagen"
                ></Image>
              </div>
            </div>
            <p className="card-text"> <strong>Descripción: </strong>{pelicula.descripcion} </p>
            <p className="card-text"> <strong>País: </strong>{pelicula.pais}  </p>
            <p className="card-text"> <strong>Género: </strong>{pelicula.genero} </p>
            <p className="card-text"> <strong>Director: </strong>{pelicula.director}  </p>
            <p className="card-text"> <strong>Guión: </strong>{pelicula.guion}  </p>
            <p className="card-text"> <strong>Calificación: </strong> <span className="badge bg-warning text-dark"> {pelicula.calificacion}</span></p>
            <p className="card-text"> <strong>Fecha Estreno:  </strong>{pelicula.fechaEstreno} </p>
          </div>
          <div className="card-footer">
            <Link href='/' className="btn btn-primary">
                  Volver atrás
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default enlaceURL;

//ejemplo 1: getServerSideProps
/* export async function getServerSideProps({query:{enlaceURL}}){
  const res = await fetch(`${URL_API}/api/peliculas/${enlaceURL}`)
  const peliculas = await res.json()

  return{
    props: {pelicula: peliculas[0]}
  }
} */

//ejemplo 2: getStaticProps  **NO FUNCIONA AQUI
/* export async function getStaticProps({query:{enlaceURL}}){
  const res = await fetch(`${URL_API}/api/peliculas/${enlaceURL}`)
  const peliculas = await res.json()

  return{
    props: {pelicula: peliculas[0]}
  }
} */

//ejemplo:3 Combinación de geStaticPaths y getStaticProps
export async function getStaticPaths() {
  const res = await fetch(`${URL_API}/api/peliculas`);
  const peliculas = await res.json();

  const paths = peliculas.map((peli) => ({
    params: { enlaceURL: peli.enlaceUrl },
  }));

  return {
    paths,
    fallback: true,
  };
}

//getStaticProps
export async function getStaticProps({ params: { enlaceURL } }) {
  const res = await fetch(`${URL_API}/api/peliculas/${enlaceURL}`);
  const peliculas = await res.json();

  return {
    props: { pelicula: peliculas[0] },
  };
}
