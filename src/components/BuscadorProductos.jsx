import React, { useState } from 'react';

const productos = [
    'Camiseta',
    'Pantalón',
    'Zapatos',
    'Sombrero',
    'Bolso',
    'Calcetín',
    'Sudadera',
    'Complementos',
    'Camisa',
    'Cinturon',
    'Anillo',
    'Pendientes',
    'Collar',
    'Pulsera',
];

const BuscadorProductos = () => {
    const [query, setQuery] = useState('');

    const productosFiltrados = productos.filter((producto) =>
        producto.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div>
            <input
                type="text"
                placeholder="Buscar producto"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <ul>
                {productosFiltrados.map((producto, index) => (
                    <li key={index}>{producto}</li>
                ))}
            </ul>
        </div>
    );
};

export default BuscadorProductos;
