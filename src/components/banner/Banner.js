import { Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Carousel from "./Carousel";

const useStyles = makeStyles(() => ({
  banner: {
    backgroundImage: "url(./banner2.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  banner__content: {
    height: 400,
    display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "space-around",
  },
  tag__line: {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  }
}));

const Banner = () => {
  const classes = useStyles();

  return (
    <div className={classes.banner}>
      <Container className={classes.banner__content}>
        <div className={classes.tag__line}>
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
            }}
          >
            Crypto Hunter
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: "#A9A9A9",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
            }}
          >
            Get all the info regarding your favorite crypto currency
          </Typography>
        </div>
        <Carousel />
      </Container>
    </div>
  );
};

export default Banner;
