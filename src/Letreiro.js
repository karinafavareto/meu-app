import { useState, useEffect } from 'react';

const Letreiro = () => {

    const [resetKey, setResetKey] = useState(0);
    const [text, setText] = useState('');
    const fullText = "Conheça a Fatec!";

    useEffect(() => {

                                        // callback, arrow function e anônima
        const intervalId = setInterval( () => {
            
            if(text.length >= fullText.length){
                clearInterval(intervalId);
                setTimeout( () => {
                    setText("");
                    setResetKey(prev => prev + 1);   
                }, 1500);
                return; 
            }
            
                    // callback
            setText(prevText => prevText + fullText[prevText.length])

        }, 100);
        
        return () => { // cleanup pra desmontar o componente
            clearInterval(intervalId);
        }

    }, [resetKey, text.length] ) // função configurada na montagem; o valor de text fica congelado em "" dentro do setInterval; colocar o text aqui é ineficiente, pois o useEffect seria re-executado 16 vezes

    return (
        <div className="container d-flex flex-column align-items-center mt-5">
            <h2>Letreiro</h2>
            <h4>{text}</h4>
        </div>
    )
    
}

export default Letreiro;
