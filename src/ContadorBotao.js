//  esse é um componente filho, que sabe fazer uma coisa específica, não sabe informações do pai
// trata da parte visual

const ContadorBotao = ({ 
    label, 
    valor, 
    iconeURL, 
    onIncrement, 
    onDecrement, 
    labelPlus,
    labelMinus
}) => {
    return (
        <div className="card shadow p-4 text-center h-100"> 
            
            <img 
                src={iconeURL} 
                alt={label} 
                className="img-fluid mx-auto mb-3" 
                style={{ width: '80px', height: '80px' }} 
            />
            
            <h2 className="mb-3">{label}:</h2>
            <h3 className="p-2 border border-secondary rounded mb-4 mx-auto" style={{ minWidth: '60px' }}>{valor}</h3>
            
            <div className="d-flex justify-content-center">
                <button 
                    onClick={onIncrement} 
                    className="btn btn-success me-2" 
                >
                    {labelPlus} 
                </button>

                <button 
                    onClick={onDecrement} 
                    className="btn btn-warning" 
                >
                    {labelMinus} 
                </button>
            </div>
        </div>
    );
};

export default ContadorBotao;