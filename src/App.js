import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./Home";
import NotFound from "./NotFound";
import StateWise from "./StateWise";
import Navbar from './components/Navbar'
import AboutUs from './About';

const App = () => {

  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className="content">
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/stateWise"><StateWise /></Route>
          <Route path="/about"><AboutUs /></Route> 
          <Route path="*"><NotFound /></Route> 
        </Switch>
      </div>
    </div>
    </Router>
  );
}
 
export default App;
