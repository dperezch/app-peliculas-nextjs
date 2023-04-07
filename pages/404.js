import Layout from "@/components/Layout"
import Link from "next/link"
import styles from "../styles/404.module.css"


const error404 = () => {
  return (
    <Layout titulo='Página no encontrada'>
        <div className={styles.error}>
            <h1 className={styles.titulo}>
                Error 404
            </h1>
            <p className={styles.parrafo}>Página no encontrada</p>
            <Link href='/'>Ir la página de inicio</Link>
        </div>

    </Layout>
  )
}

export default error404