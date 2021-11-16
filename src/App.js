import { BrowserRouter, Route } from 'react-router-dom';
import './App.scss';

import Navbar from './components/navbar/index';
import Home from "./pages/Home";
import Coin from "./pages/Coin";
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  crypto__app:  {
    backgroundColor: "#14161a",
    color: "#ffffff",
    minHeight: "100vh"
  }, 
}));

function App() {

  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.crypto__app}>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/coins/:id" component={Coin} />
      </div>
    </BrowserRouter>
  );
}

export default App;
