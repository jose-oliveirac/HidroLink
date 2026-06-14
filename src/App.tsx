import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Components/Layout'
import Login from './Pages/Login/Login'
import Home from './Pages/Home/Home'
import Monitoramento from './Pages/Monitoramento/Monitoramento'
import Clima from './Pages/Clima/Clima'
import Relatorio from './Pages/Relatorio/Relatorio'
import Noticias from './Pages/Noticias/Noticias'
import Configs from './Pages/Configs/Configs'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />

        <Route element={<Layout />}>
          <Route path='/home' element={<Home />} />
          <Route path='/monitoramento' element={<Monitoramento />} />
          <Route path='/clima' element={<Clima />} />
          <Route path='/relatorios' element={<Relatorio />} />
          <Route path='/noticias' element={<Noticias />} />
          <Route path='/configuracoes' element={<Configs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App