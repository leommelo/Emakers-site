import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Registro from './Pages/Registro'
import Login from './Pages/Login'
import Perfil from './Pages/Perfil'



function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
