import React from "react";
import NsLogo from "../../images/NS-logo-small.svg";

import { makeStyles } from "@mui/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

const useStyles = makeStyles({
  link: {
    color: "#fff",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    height: "100%",
    padding: "0 1rem",
    cursor: "pointer",
    textTransform: "initial",

    "& :hover": {
      color: "black",
    },
  },
});

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar
      position="sticky"
      elevation={1}
      sx={{ height: 90, backgroundColor: "black", marginTop: "-100px" }}
    >
      <Container maxWidth="100%" sx={{ height: "100%" }}>
        <Toolbar disableGutters sx={{ height: "100%" }}>
          <Box
            display="flex"
            component="div"
            sx={{ flexGrow: { md: "0", xs: "1" } }}
          >
            <LinkRouter to="/">
              <img src={NsLogo} alt="No Stress logo" />
            </LinkRouter>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="h5"
            flexGrow={1}
            sx={{ fontFamily: "inherit", display: { md: "flex", xs: "none" } }}
          >
            NS Creative Studio
          </Typography>
          <Box
            display="flex"
            component="div"
            sx={{ display: { md: "flex", xs: "none" }, marginRight: "10px" }}
          >
            <Button
              variant="text"
              sx={{
                height: 80,
                padding: 0,
                textTransform: "lowerase",
              }}
            >
              <LinkScroll className={classes.link} to="/">
                About
              </LinkScroll>
            </Button>

            <Button
              variant="text"
              sx={{
                height: 80,
                padding: 0,
                textTransform: "lowerase",
              }}
            >
              <LinkScroll className={classes.link} to="/">
                What We Do
              </LinkScroll>
            </Button>
            <Button
              variant="text"
              sx={{ height: 80, padding: 0, textTransform: "lowerase" }}
            >
              <LinkScroll className={classes.link} to="/">
                Where To Find
              </LinkScroll>
            </Button>
          </Box>
          <Button
            variant="outlined"
            size="medium"
            sx={{
              color: "#fff",
              borderColor: "#fff",
              display: { md: "flex", xs: "none" },
            }}
          >
            Contact Us
          </Button>
          <IconButton size="large">
            <MenuOutlinedIcon
              sx={{
                color: "#fff",
                fontSize: "2rem",
                display: { md: "none", xs: "flex" },
              }}
            />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
