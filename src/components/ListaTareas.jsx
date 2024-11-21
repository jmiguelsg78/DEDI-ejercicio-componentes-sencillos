import React, { useState } from 'react';

const ListaTareas = () => {
    const [tareas, setTareas] = useState([
        { id: 1, texto: 'Hacer la compra', completada: false },
        { id: 2, texto: 'Estudiar React', completada: false },
        { id: 3, texto: 'Ir al gym', completada: false },
        { id: 4, texto: 'Hacer las actividades', completada: false },
        { id: 5, texto: 'Fregar los platos', completada: false },
    ]);

    const toggleCompletar = (id) => {
        setTareas(tareas.map((tarea) => 
            tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
        ));
    };

    return (
        <div>
            <h2>Lista de Tareas</h2>
            <ul>
                {tareas.map((tarea) => (
                    <li key={tarea.id}>
                        <label>
                            <input
                                type="checkbox"
                                checked={tarea.completada}
                                onChange={() => toggleCompletar(tarea.id)}
                            />
                            {tarea.texto}
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListaTareas;
