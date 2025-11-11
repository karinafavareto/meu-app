import { Link } from "react-router-dom";
import Gallery from "./Gallery";
import Profile from "./Profile";
import TodoList from "./TodoList";
import PackingList from "./PackingList";
import List from "./List";
import FullRecipe from "./FullRecipe";
import TeaSet from "./TeaGathering";



const Atv03 = () => {
    return (
        <div className="container d-flex flex-column align-items-center mt-5">
           <h1 className="display-3 mb-5">Atividade 3</h1>
           <Gallery />
           <TodoList />
           <Profile />
           <PackingList />
           <List />
           <FullRecipe />
           <TeaSet />
        <Link to="../"><button type="button" className="btn btn-info mt-5">Voltar</button></Link>
        </div>
    )
}

export default Atv03;