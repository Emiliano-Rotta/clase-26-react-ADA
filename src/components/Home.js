import './Home.css';
import { useState, useEffect, useContext } from 'react';
import Card from "./Card"
import Context from '../context/Context';


function Home() {

  const context = useContext(Context)

  // console.log("context de Home", context.language)

  const[peliculas, setPeliculas] = useState([])

  const handleChangeIdioma = (e) =>{
    context.setLanguage(e.target.value)
  }

  useEffect(()=>{
    fetch (`https://api.themoviedb.org/3/movie/popular?api_key=07b7fbf0aa198d742f7f3020308675d2&language=${context.language}`)
    .then(res => res.json())
    .then (data => {
      setPeliculas(data.results)
    })
  },[context.language])

  return (

    <div>

      {context.user.apodo && <h2>{context.user.apodo} estas son pelicutlas para vos</h2>}

      <select onChange={handleChangeIdioma}>
        <option value="es">Español</option>
        <option value="en">Ingles</option>
        <option value="ko">coreano</option>
        <option value="gl">gallego</option>
      </select>



      <div className='contenedor'>
        {peliculas?.map(p=> (
          <Card
            key={p.id}
            title={p.title}
            img={p.poster_path}
            />
        ))}
      </div>
    </div>

  );
}

export default Home;