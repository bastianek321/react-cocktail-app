import './App.css';
import CocktailDetails from "./components/CocktailDetails"
import CocktailList from "./components/CocktailList"
import CocktailTable from "./components/CocktailTable"
import cocktails from "./data/cocktails.json"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import AdminLogin from './components/AdminLogin';
// https://reactrouter.com/web/guides/quick-start

function App() {
    localStorage.setItem('cocktails', JSON.stringify(cocktails))


    return (
        <div className="container">
            <Router>
                <Link to="/table">
                    <button value="Table" className="btn btn-primary">Filtered Table</button>
                </Link>
                <Link to="/login">
                    <button value="Admin" className="btn btn-primary">Admin Login</button>
                </Link>
                <Switch>
                    <Route exact path="/">
                        <CocktailList cocktailArray={JSON.parse(localStorage.getItem('cocktails'))} />
                    </Route>
                    <Route path="/table">
                        <CocktailTable />
                    </Route>
                    <Route path="/login">
                        <AdminLogin />
                    </Route>
                    <Route path="/:cocktailId">
                        <CocktailDetails />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
