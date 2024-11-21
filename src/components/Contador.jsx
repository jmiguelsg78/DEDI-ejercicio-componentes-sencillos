import React, { useState } from 'react';

const Contador = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>Contador: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Incrementar</button>
            <button onClick={() => setCount(count - 1)}>Decrementar</button>
        </div>
    );
};

export default Contador;
