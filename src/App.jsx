import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./components/Home.jsx";
import Saludo from "./components/Saludo.jsx";
import Todo from "./components/todo/Todo.jsx";
import Rick from "./components/rick/Rick.jsx";
import AgeOfEmpires from "./components/aoe/AgeOfEmpires.jsx";
import Civilizacion from "./components/aoe/Civilizacion.jsx";

function App() {
  return (
    <Router>
      <div className="container mt-5">
        <div className="btn-group d-flex">
          <NavLink to="/" className="btn btn-info">
            Inicio
          </NavLink>
          <NavLink to="/saludo" className="btn" activeClassName="btn-success">
            Saludo
          </NavLink>
          <NavLink to="/todo" className="btn" activeClassName="btn-success">
            Todo
          </NavLink>
          <NavLink to="/rick" className="btn" activeClassName="btn-success">
            Rick & Morty
          </NavLink>
          <NavLink
            to="/civilizaciones"
            className="btn"
            activeClassName="btn-success"
          >
            Civilizaciones Age of Empires
          </NavLink>
        </div>
        <hr />
        <Switch>
          <Route path="/civilizaciones/:id" component={Civilizacion} />
          <Route path="/civilizaciones" component={AgeOfEmpires} />
          <Route path="/todo" component={Todo} />
          <Route path="/saludo" component={Saludo} />
          <Route path="/rick" component={Rick} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
