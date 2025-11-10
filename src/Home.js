import React from 'react';
import { Link } from 'react-router-dom';

const Home = () =>{
    return (
        <div className="container d-flex flex-column align-items-center mt-5">
            <h1 className="display-3 mb-5">Página Inicial</h1>
            <nav>
                <ul className="list-group">
                    <li class="list-group-item list-group-item-action">
                        <Link to="/Atv01">Atividade 1</Link>
                    </li>
                    <li class="list-group-item list-group-item-action">
                        <Link to="/Atv02">Atividade 2</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Home;
