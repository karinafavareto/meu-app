import React, { useState } from 'react';
import ContadorBotao from './ContadorBotao';

// esse é o pai, que sabe os estados, regras de negócio e informações críticas
// trata da parte lógica

const ContadorPessoas = () => {

    const [men, setMen] = useState(0);
    const [women, setWomen] = useState(0);
    const total = men + women; 

    const incrementMen = () => setMen(men + 1);
    const decrementMen = () => { 
        if(men > 0) 
            setMen(men - 1) 
        };

    const incrementWomen = () => setWomen(women + 1);
    const decrementWomen = () => { 
        if(women > 0) 
            setWomen(women - 1) 
        };

    const reset = () => { setMen(0); setWomen(0); };

    return (
        <div className="container mt-5 text-center">
            
            <div className="d-flex justify-content-center align-items-center mb-4">
                <h1 className="me-3">Total:</h1>
                <h3 className="p-2 border border-primary text-primary rounded" style={{ fontSize: '2em', minWidth: '80px' }}>{total}</h3>
            </div>
            
            <div className="row justify-content-center">
                
                <div className="col-12 col-md-5 mb-4">
                    <ContadorBotao
                        label="Homens"
                        valor={men}
                        iconeURL="https://cdni.iconscout.com/illustration/premium/thumb/man-illustration-svg-download-png-4651649.png"
                        onIncrement={incrementMen}
                        onDecrement={decrementMen}
                        labelPlus="+"
                        labelMinus="-"
                    />
                </div>

                <div className="col-12 col-md-5 mb-4">
                    <ContadorBotao
                        label="Mulheres"
                        valor={women}
                        iconeURL="https://cdni.iconscout.com/illustration/premium/thumb/girl-illustration-svg-download-png-4651652.png"
                        onIncrement={incrementWomen}
                        onDecrement={decrementWomen}
                        labelPlus="+"
                        labelMinus="-"
                    />
                </div>
            </div>
            
            <div className="mt-4">
                <button 
                    onClick={reset}
                    className="btn btn-danger btn-lg"
                >
                    Resetar Contagem
                </button>
            </div>
        </div>
    );
};

export default ContadorPessoas;