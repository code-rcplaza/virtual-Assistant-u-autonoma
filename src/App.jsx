import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import { HOME, ASSISTANT, ASSISTANTS, CONFIGURATION } from './constants/routes'
import { Home, SelectAssistant, Configurations } from './pages'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import './App.scss'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={HOME} element={<Home />} />
        <Route path={ASSISTANT} element={<h1>Asistente</h1>} />
        <Route path={ASSISTANTS} element={<SelectAssistant />} />
        <Route path={CONFIGURATION} element={<Configurations />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
