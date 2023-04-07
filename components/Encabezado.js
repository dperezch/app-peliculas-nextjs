import styles from "../styles/Encabezado.module.css"

const Encabezado = () => {
  return (
    <div className={styles.encabezado}>
        <h1 className="container">
            Administrador de Películas
        </h1>
        <h2 className="container">Encuentra la mejor selección de películas</h2>
    </div>
  )
}

export default Encabezado