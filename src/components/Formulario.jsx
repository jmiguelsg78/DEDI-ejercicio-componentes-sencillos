import React, { useState } from 'react';

const Formulario = () => {
    const [nombre, setNombre] = useState('');
    const [bienvenida, setBienvenida] = useState('');

    const manejarSubmit = (e) => {
        e.preventDefault();
        setBienvenida(`¡Bienvenido seas, ${nombre}!`);
    };

    return (
        <div>
            <form onSubmit={manejarSubmit}>
                <input
                    type="text"
                    placeholder="Escribe tu nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
                <button type="submit">Enviar</button>
            </form>
            {bienvenida && <h2>{bienvenida}</h2>}
        </div>
    );
};

export default Formulario;
