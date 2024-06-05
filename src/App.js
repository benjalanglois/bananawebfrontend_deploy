import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Tablero from "./components/Tablero";
import Missing from "./components/Missing";
//import Unauthorized from "./components/Unauthorized";
//import Perfil from "./components/Perfil";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <Routes>
      {/* public routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path = "home" element={<Home/>}/>
      <Route path = "tablero" element={<Tablero/>}/>
      {/*<Route path="unauthorized" element={<Unauthorized />} />*/}

      {/* Si el usuario se equivoca */}
      <Route path="*" element={<Missing />} />
    </Routes>
  );
}

export default App;
