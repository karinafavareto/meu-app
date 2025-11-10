import Relogio from "./Relogio";
import Letreiro from './Letreiro';
import { Link } from "react-router-dom";

const Atv01 = () => {
    return (
        <div className="container d-flex flex-column align-items-center mt-5">
           <h1 className="display-3 mb-5">Atividade 1</h1>
           <Relogio />
           <Letreiro />
        <Link to="../"><button type="button" className="btn btn-info mt-5">Voltar</button></Link>
        </div>
    )
}

export default Atv01;
