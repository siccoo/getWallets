import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

import "./App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
