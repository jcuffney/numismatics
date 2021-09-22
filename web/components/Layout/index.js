import React, { useState, useCallback, memo } from "react";
import Head from "next/head";
import {
  AppBar,
  Container,
  Toolbar,
  IconButton,
  Typography,
  Menu,
} from "@material-ui/core";
import { Menu as MenuIcon, AccountCircle } from "@material-ui/icons";
import styles from "./Layout.module.css";

export default memo(({ children }) => {
  const [auth, setAuth] = useState(false);
  //   const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(false);
  const open = Boolean(anchorEl);

  const handleChange = useCallback(
    (event) => {
      setAuth(event.target.checked);
    },
    [setAuth]
  );

  const handleMenu = useCallback(
    (event) => {
      setAnchorEl(event.currentTarget);
    },
    [setAnchorEl]
  );

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, [setAnchorEl]);

  return (
    <div className={styles.root}>
      <Head>
        <title>Numismatics</title>
        <meta name="description" content="Coin identification" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>

      <AppBar component="header" className={styles.header}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Numismatics</Typography>
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                // anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <Container>
          <Typography variant="body2" align="center">
            Made with &hearts; by Joe Cuffney
          </Typography>
        </Container>
      </footer>
    </div>
  );
});
