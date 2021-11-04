import Navbar from "./layout/Navbar";
import Leagues from "./components/leagues/leagues/Leagues";
import League from "./components/leagues/league/League";
import Teams from "./components/teams/teams/Teams";
import Team from "./components/teams/team/Team";
import {BrowserRouter as Router,Switch,Route,Redirect} from "react-router-dom";



function App() {
  return (
    <div style={{ height: "100%" }}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/"
            render={() => {
              return <Redirect to="api/leagues" />;
            }}
          />
          <Route exact path="api/leagues">
            <Leagues />
          </Route>
          <Route exact path="/leagues/:id">
            <League />
          </Route>
          <Route exact path="/teams">
            <Teams />
          </Route>
          <Route exact path="/teams/:id">
            <Team />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;