import { useContext, useState } from "react";
import Context from "../context/Context";
import "./NavBar.css"

function NavBar() {

  const [iniciarSesion, setIniciarSesion] = useState(false)
  const [contraseña, setContraseña] = useState("")
  const [usuario, setUsuario] = useState("")
  const context = useContext(Context)

  const handleClickIniciarSesion = () => {
    setIniciarSesion(true)
  }

  const handleClickCerrarSesion = () => {
    context.setUser ({})
  }
  const handleChangeC = (e) => {
    setContraseña(e.target.value)
  }

  const handleChangeU = (e) => {
    setUsuario(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify ({
        "email": "eve.holt@reqres.in",
        "password": "cityslicka"
      }) 
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      context.setUser ({
        nombre: "Valeria",
        apodo: "Vale",
        provincia: "Mendoza"
      })


    })

  }

  return (

      // <nav className={context.user.nombre ? "nav-iniciada" : "nav"}>
      <nav className={context.clearTheme ? "nav-c" : "nav"}>
        {context.user.apodo ? <h1>Hola, {context.user.apodo}</h1> : <h1>Hola te invito a que inicies sesion</h1>}

        {!context.user.nombre &&
        <button onClick={handleClickIniciarSesion}>Iniciar sesion</button>
        }

        {context.user.nombre &&
        <button onClick={handleClickCerrarSesion}>Cerrar sesion</button>
        }

        {iniciarSesion && !context.user.nombre &&
        
        <form onSubmit={handleSubmit}>
          <input 
          type="text"
          placeholder="usuario"
          value={usuario}
          onChange={handleChangeU}
          />
          <input 
          type="text"
          placeholder="Contraseña"
          value={contraseña}
          onChange={handleChangeC}
          />
          <input 
          type="submit"
          value="Iniciar sesion"
          />
        </form>
        
        }
      
      
      
      </nav>

  );
}

export default NavBar;