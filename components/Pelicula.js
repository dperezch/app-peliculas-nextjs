import Image from "next/image";
import styles from "../styles/Pelicula.module.css";
import Link from "next/link";

const Pelicula = ({ pelicula }) => {
  return (
    <div className={styles.caja}>
      <div className="row my-5 p-3">
        <div className="col-sm-3">
          <Image
            src={
              pelicula.imagen ? pelicula.imagen : "/imagenes/pelicula-temp.jpg"
            }
            width={168}
            height={250}
            alt="Aquí va la imagen"
          ></Image>
        </div>
        <div className="col-sm-3 pt-5">
          <h3> {pelicula.titulo} </h3>
        </div>
        <div className="col-sm-3 pt-5">
          <strong> Fecha de lanzamiento: </strong> {pelicula.fechaEstreno}
        </div>
        <div className="col-sm-3 pt-5">
          <Link href={`/peliculas/${pelicula.enlaceUrl}`}  className="btn btn-success">
            Más información...
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Pelicula;
