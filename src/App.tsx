import './App.css'
import NavBarInferior from './Components/NavBarInferior/NavBarInferior'
import NavBarSuperior from './Components/NavBarSuperior/NavBarSuperior'
import Login from './Pages/Login/Login'
import Home from './Pages/Home/Home'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'

function AppContent() {
  const location = useLocation();
  const mostrarNavBars = location.pathname !== '/Login';

  return (
    <>
      {mostrarNavBars && <NavBarSuperior />}
      {mostrarNavBars && <NavBarInferior />}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<Login />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App