import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Registro from './Pages/Registro'
import Login from './Pages/Login'



function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/registro" element={<Registro />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
