import { useContext } from "react";
import Context from "../context/Context";
import './Footer.css';

function Footer() {

  const handleClickC = () => {
    context.setClearTheme(false)
  }
  const handleClickD = () => {
    context.setClearTheme(true)
  }

  const context = useContext(Context)
  return (

      // <footer >
      <footer className={context.clearTheme ? "footer-c" : "footer"}>
        {context.clearTheme? 
        <div>Estas en modo claro
        <button onClick={handleClickC}>Oscuro</button> 
        </div> :
        <div>Estas en modo oscuro
        <button onClick={handleClickD}>claro</button> 
        </div>}
        {context.user.provincia && <h3>Nos gustaria conocer {context.user.provincia}</h3>}

      </footer>

  );
}

export default Footer;