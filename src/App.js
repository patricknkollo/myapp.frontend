import "./App.css";
import UserComponent from "./UserComponent";
import UserService from "./UserService";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <div className="page">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="navbar-nav mr-auto">
          <li className="nav-item">une liste</li>
        </div>
      </nav>

      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/usercomponent">
            <UserComponent />
          </Route>
          <Route path="/users">
            <UserService />
          </Route>
        </Switch>
      </Router>
    </div>
    //--------------------------------------
  );
}

export default App;
