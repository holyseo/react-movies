import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import MovieDetail from "./routes/MovieDetail";
import TvDetail from "./routes/TvDetail";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <MovieDetail />
        </Route>
        <Route path="/tv/:id">
          <TvDetail />
        </Route>
        {/* <Route path="/people/:id">
          <PeopleDetail />
        </Route> */}
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
