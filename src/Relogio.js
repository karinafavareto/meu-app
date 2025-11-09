import { useState, useEffect } from 'react';

const Relogio = () => { // arrow function, omitindo as chaves {}, possui retorno implícito
    
    const [time, setTime] = useState(new Date());

    useEffect(() => {

        const intervalId = setInterval(() => { setTime(new Date()); }, 1000); // setup / montagem
                                                // função               // tempo
        
        return () => { // cleanup / desmontagem | recebe a instrução de como parar a execução; é executada depois
            clearInterval(intervalId);
        }

    }, [] ); // array de dependências, quando vazio, garante que o efeito só rode uma vez (no momento da montagem do componente)

    return ( //retorna o jsx, a parte visual
        <>
            <h1>Hora atual</h1>
            <p>{time.toLocaleTimeString()}</p>
        </>
        
    )
}

export default Relogio;
