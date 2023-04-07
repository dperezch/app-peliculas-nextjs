import Link from 'next/link';
import styles from '../styles/Menu.module.css'

const Menu = () => {
  return (
    <>
      <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
        <div className="container">
          <div className={styles.logo} ></div>
          
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" href="/">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/about">
                  Acerca de nosotros
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/peliculas">
                  Lista de Películas
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/peliculas/agregar">
                  Agregar Película
                </Link>
              </li>
            </ul>
          </div>
        
      </nav>
    </>
  );
};

export default Menu;
