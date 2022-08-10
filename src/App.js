import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ErrorScreen from "./screens/ErrorScreen";
import HomeScreen from "./screens/HomeScreen";
import LoadingScreen from "./screens/LoadingScreen";
import Moviedetails from "./screens/Moviedetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route path="/error" component={ErrorScreen} />
          <Route path="/loading" component={LoadingScreen} />
          <Route path="/movie-details" component={Moviedetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
