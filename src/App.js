/**
 * @dev App.js hold the various paths your app will have. In my version
 * there are 6 pages:
 * "/" -> Home: The page where you deploy and attach to the contract
 * 
 * "/about" -> About: A brief introduction to your program
 * 
 * "/deploy" -> Deployment Page: The page where you can copy the contract info
 *              and proceed to the app. This page is only for the user who deploys
 *              the contract, attaching user will go directly to the app
 * 
 * "/app/alice" & "/app/bob" -> Participant Pages: Each participant has their own page
 *                              where they interact with their program. You should have
 *                              one page for each Participant / ParticipantClass
 * 
 * "/test" -> Test Page: If you just want to see how a view looks without deploying the
 *            contract again and again I recommend you to import that view and set it as
 *            the component of the test path
 */

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
