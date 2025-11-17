import { Link } from "react-router-dom";
import ContadorPessoas from "./ContadorPessoas";

const Atv02 = () => {
    return (
        <div className="container d-flex flex-column align-items-center mt-5">
           <h1 className="display-3 mb-5">Atividade 2</h1>
           <ContadorPessoas />
        <Link to="../"><button type="button" className="btn btn-info mt-5 mb-5">Voltar</button></Link>
        </div>
    )
}

export default Atv02;