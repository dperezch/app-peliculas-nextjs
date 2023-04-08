import Layout from '@/components/Layout'
import Pelicula from '@/components/Pelicula';
import { URL_API } from '@/config';


export default function Home({peliculas}) {

  console.log(peliculas);
  return (
    <Layout>
      <h1 className='text-center mt-4' >Aplicación de Películas</h1>
      {peliculas.map((pelicula)=>(
        <Pelicula key={pelicula.id} pelicula={pelicula}/>
      ))}
      
    </Layout>
  )
}

//ejemplo 1: getServerSideProps
export async function getServerSideProps(){
  const res = await fetch(`${URL_API}/api/peliculas`)
  const peliculas = await res.json()

  return{
    props: {peliculas}
  }
}

//ejemplo 2: getStaticProps
/* export async function getStaticProps(){
  const res = await fetch(`${URL_API}/api/peliculas`)
  const peliculas = await res.json()

  return{
    props: {peliculas},
    revalidate: 2
  }
} */
