import {
  AppBar,
  Container,
  makeStyles,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";

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

  return (
    <AppBar color="transparent" position="static">
      <Container>
        <Toolbar>
          <Typography onClick={() => history.push("/")} className={classes.nav__header}>Crypto Hunter</Typography>
          <Select
            variant="outlined"
            style={{
              width: 100,
              height: 40,
              marginLeft: 15,
            }}
          >
            <MenuItem value={"USD"}>USD</MenuItem>
            <MenuItem value={"NGR"}>NGR</MenuItem>
          </Select>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
