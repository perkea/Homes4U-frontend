
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homes from "./Homes"
import ShowHome from "./ShowHome"

function App() {
  return (
    <div className="App">
     <Router>
       <Routes>
         <Route exact path = "/" component = {Homes}/>
         <Route exact path = "/show/:id" component = {ShowHome}/>
       </Routes>
     </Router>

     
    </div>
  );
}

export default App;
