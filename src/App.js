import "./App.css";
//import logo from './logo.svg';
import Login from './components/auth/login';
import Registro from './components/auth/registro'; 
import Dashboard from './components/pages/dashboard'; 
import Zapopan from "./components/zapopan/zapopan";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/registro' element={<Registro />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/sede/zapopan' element={<Zapopan />} />
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
