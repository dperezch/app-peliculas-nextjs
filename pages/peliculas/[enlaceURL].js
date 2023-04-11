import Layout from '@/components/Layout'
import { URL_API } from '@/config'

const enlaceURL = ({pelicula}) => {
  console.log(pelicula);
  return (
    <Layout titulo="Detalle película" >
        <h1> {pelicula.titulo} </h1>
    </Layout>

    
  )
}

export default enlaceURL

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
export async function getStaticPaths(){
  const res = await fetch(`${URL_API}/api/peliculas`)
  const peliculas = await res.json()

  const paths = peliculas.map(peli=> ({
    params: {enlaceURL: peli.enlaceUrl }
}))

return {
  paths,
  fallback: true
}
}

//getStaticProps  
export async function getStaticProps({params:{enlaceURL}}){
  const res = await fetch(`${URL_API}/api/peliculas/${enlaceURL}`)
  const peliculas = await res.json()

  return{
    props: {pelicula: peliculas[0]}
  }
}