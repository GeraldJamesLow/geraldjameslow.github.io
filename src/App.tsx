import { HashRouter, Route, Routes } from 'react-router-dom'
import { NotFound } from './pages/NotFound'
import { Home } from './pages/Home'
import './App.css'


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  )
}

export default App
