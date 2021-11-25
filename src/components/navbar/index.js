import {
  AppBar,
  Container,
  createTheme,
  makeStyles,
  MenuItem,
  Select,
  Toolbar,
  Typography,
  ThemeProvider
} from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";

import { CryptoState } from "../../CryptoContext";

const useStyles = makeStyles(() => ({
  nav__header: {
    flex: 1,
    color: "#FFD700",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
}));

const Navbar = () => {
  const classes = useStyles();

  const history = useHistory();

  const { currency, setCurrency } = CryptoState();

  const darkTheme = createTheme({
    palette: {
      main: "#ffffff",
    },
    type: "dark",
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography
              onClick={() => history.push("/")}
              className={classes.nav__header}
              variant="h5"
            >
              Crypto Hunter
            </Typography>
            <Select
              variant="outlined"
              style={{
                width: 100,
                height: 40,
                marginRight: 15,
              }}
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"NGN"}>NGR</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Navbar;
