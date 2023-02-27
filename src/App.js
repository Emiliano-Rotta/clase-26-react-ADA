import {useState} from "react"
import './App.css';
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Footer from "./components/Footer"
import Context from "./context/Context"


function App() {
  const [user, setUser] = useState({})
  const [language, setLanguage] = useState("es")
  const [clearTheme, setClearTheme] = useState(false)//

  const context = {
    user: user,
    setUser: setUser,
    language: language,
    setLanguage: setLanguage,
    clearTheme: clearTheme, //
    setClearTheme: setClearTheme,//
  }

  
  return (
    <Context.Provider value={context}>
      <div className={clearTheme ? "clear-theme" : "dark-theme"}>
        <NavBar />
        <Home />
        <Footer />
      </div>
    </Context.Provider>
  );
}

export default App;
