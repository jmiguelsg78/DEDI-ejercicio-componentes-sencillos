import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Contador from './components/Contador';
import Formulario from './components/Formulario';
import Toggle from './components/Toggle';
import ListaTareas from './components/ListaTareas';
import BuscadorProductos from './components/BuscadorProductos';

const App = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/contador">Contador</Link></li>
                        <li><Link to="/formulario">Formulario</Link></li>
                        <li><Link to="/toggle">Toggle</Link></li>
                        <li><Link to="/lista-tareas">Lista de Tareas</Link></li>
                        <li><Link to="/buscador-productos">Buscador de Productos</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/contador" element={<Contador />} />
                    <Route path="/formulario" element={<Formulario />} />
                    <Route path="/toggle" element={<Toggle />} />
                    <Route path="/lista-tareas" element={<ListaTareas />} />
                    <Route path="/buscador-productos" element={<BuscadorProductos />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
