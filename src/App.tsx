import { HashRouter, Route, Routes } from 'react-router-dom'
import { NotFound } from './pages/NotFound'
import { Home } from './pages/Home'
import { Games } from './pages/games/Games'
import { LiarsDice } from './pages/games/liars-dice/LiarsDice'
import './App.css'


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={< Games/>} />
        <Route path="/games/liars-dice" element={< LiarsDice/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  )
}

export default App
