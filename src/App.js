import Navbar from "./Components/Navbar/Navbar"
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Index from "./Components/Main/Index"
import Trabajos from "./Components/Trabajos/Trabajos"
import Estudios from "./Components/Estudios/Estudios"
import Conocimientos from "./Components/Conocimientos/Conocimientos";
import Contacto from "./Components/Contacto/Contacto"
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/React" element={<Index />}/>
          <Route path="/Conocimientos" element={<Conocimientos />}/>
          <Route path="/Trabajos" element={<Trabajos />}/>
          <Route path="/Estudios" element={<Estudios />}/>
          <Route path="/Contacto" element={<Contacto />}/>
          <Route path="/*" element={<Navigate to="/React" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
