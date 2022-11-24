import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Imports generales
import Login from './components/auth/login';
import Sidebarnav from "./components/pages/sidebarnav";
import Home from './components/pages/home'; 
import Users from './components/pages/users';

//Imports zapopan
import Zapopan from "./components/zapopan/zapopan";
import BioIndustrialZap from "./components/zapopan/industrial/industrial";
import EquiposInsigniaZap from "./components/zapopan/industrial/equipos-insignia";
import BioreactoresZap from "./components/zapopan/industrial/bioreactores";
import PosgradoZap from "./components/zapopan/posgrado/posgrado";
import TecAlimentariaZap from "./components/zapopan/alimentaria/alimentaria";
import VideosAlimZap from "./components/zapopan/alimentaria/videos";
import CamAlimZap from "./components/zapopan/alimentaria/camara";
import BioVegetalZap from "./components/zapopan/vegetal/vegetal";
import CamVegetalZap from "./components/zapopan/vegetal/camara";

//Imports normalistas
import Normalistas from "./components/normalistas/normalistas";

//Imports merida
import Merida from './components/merida/merida';

//Imports monterrey
import Monterrey from './components/monterrey/monterrey';

function App() {
  return (
    <div className="App">

    <BrowserRouter>
    <Sidebarnav />
      <Routes>

          /** Rutas Generales */
          <Route path='/' element={<Login />} />
          <Route path='/dashboard' element={<Home />} />
          <Route path='/usuarios' element={<Users />} />

          /** Rutas de Zapopan */
          <Route path='/zapopan' element={<Zapopan />} />
          <Route path='/zapopan/biotecnología-industrial' element={<BioIndustrialZap />} />
          <Route path='/zapopan/biotecnología-industrial/equipos-insignia' element={<EquiposInsigniaZap />} />
          <Route path='/zapopan/biotecnología-industrial/bioreactores' element={<BioreactoresZap />} />

          <Route path='/zapopan/posgrado' element={<PosgradoZap />} />

          <Route path='/zapopan/tecnología-alimentaria' element={<TecAlimentariaZap />} />
          <Route path='/zapopan/tecnología-alimentaria/videos' element={<VideosAlimZap />} />
          <Route path='/zapopan/tecnología-alimentaria/camara' element={<CamAlimZap />} />

          <Route path='/zapopan/biotecnología-vegetal' element={<BioVegetalZap />} />
          <Route path='/zapopan/biotecnología-vegetal/camara' element={<CamVegetalZap />} />

          /** Rutas de Normalistas */
          <Route path='/normalistas' element={<Normalistas />} />

          /** Rutas de Merida */
          <Route path='/sureste' element={<Merida />} />

          /** Rutas de Monterrey */
          <Route path='/noreste' element={<Monterrey />} />

      </Routes>
    </BrowserRouter>

  </div>
  );
}

export default App;
