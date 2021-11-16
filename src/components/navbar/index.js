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

const Navbar = () => {
  const useStyles = makeStyles(() => ({
    nav__header: {
      flex: 1,
      color: "#FFD700",
      fontFamily: "Montserrat",
      fontWeight: "bold",
      cursor: "pointer",
    }
  }))

  const classes = useStyles();

  return (
    <AppBar color="transparent" position="static">
      <Container>
        <Toolbar>
          <Typography className={classes.nav__header}>Crypto Hunter</Typography>
        </Toolbar>
        <Select variant="outlined" 
        style={{
          width: 100,
          height: 40,
          marginLeft: 15,
        }}>
          <MenuItem value={"USD"}>USD</MenuItem>
          <MenuItem value={"NGR"}>NGR</MenuItem>
        </Select>
      </Container>
    </AppBar>
  );
};

export default Navbar;
