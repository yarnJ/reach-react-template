import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AppNavbar from './components/AppNavbar';
import Home from './components/views/Home';
import About from './components/views/About';
import DeployScreen from './components/views/DeployScreen';
import { Funder } from './components/participants/Funder';
import { Buyer } from './components/participants/Buyer';
import ConnectWallet from './components/reach/ConnectWallet';

const App = () => {
  return (
    <Router>
      <div className="App">
        <AppNavbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/deploy" component={DeployScreen} />
          <Route path="/app/funder" component={Funder} />
          <Route path="/app/buyer" component={Buyer} />
          {/* <Route path="/test" component={AcceptWager} /> */}
        </Switch>
        <ConnectWallet />
      </div>
    </Router>
  );
}

export default App;
