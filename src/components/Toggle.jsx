import React, { useState } from 'react';

const Toggle = () => {
    const [visible, setVisible] = useState(true);

    return (
        <div>
            <button onClick={() => setVisible(!visible)}>
                {visible ? 'Ocultar' : 'Mostrar'}
            </button>
            {visible && <p>¡Me has descubiertooo!</p>}
        </div>
    );
};

export default Toggle;
