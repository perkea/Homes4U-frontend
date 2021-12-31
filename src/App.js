
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homes from "./Homes"
import ShowHome from "./ShowHome"

function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route exact path = "/" component = {Homes}/>
         <Route exact path = "/show/:id" component = {ShowHome}/>
       </Switch>
     </Router>

     
    </div>
  );
}

export default App;
