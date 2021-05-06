import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AppNavbar from './components/AppNavbar';
import Home from './components/views/Home';
import About from './components/views/About';
import DeployScreen from './components/views/DeployScreen';
import { Alice } from './components/participants/Alice';
import { Bob } from './components/participants/Bob';
import { AcceptWager } from "./components/participants/BobViews";

const App = () => {
  return (
    <Router>
      <div className="App">
        <AppNavbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/deploy" component={DeployScreen} />
          <Route path="/app/alice" component={Alice} />
          <Route path="/app/bob" component={Bob} />
          <Route path="/test" component={AcceptWager} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
