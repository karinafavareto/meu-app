import React from 'react';
import { Link } from 'react-router-dom';

const Home = () =>{
    return (
        <div className="container d-flex flex-column align-items-center mt-5">
            <h2 className="display-2 mb-5">Página Inicial</h2>
            <nav>
                <ul className="list-group">
                    <li class="list-group-item list-group-item-action">
                        <Link to="/Atv01"><h5 className="display-6">Atividade 1</h5></Link>
                    </li>
                    <li class="list-group-item list-group-item-action">
                        <Link to="/Atv02"><h5 className="display-6">Atividade 2</h5></Link>
                    </li>
                    <li class="list-group-item list-group-item-action">
                        <Link to="/Atv03"><h5 className="display-6">Atividade 3</h5></Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Home;