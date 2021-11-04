import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import GamesComboBox from "../components/games/GamesComboBox";

export default function Navbar() {
  const styles ={
    Button:{
      color: "white",
      border: "1px solid rgba(255, 255, 255, 1)",
     },
    Box:{
      flexGrow: 1,
      backgroundcolor: "#3f51b5"
    },
    Link: {
      textDecoration: "none"
    }
  }
  return (
    <Box  style={styles.Box}>
      <AppBar position="static">
        <Toolbar sx={{ backgroundColor: "#3f51b5"}} >
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
             E-Sport Démo UBO
          </Typography>
          <Stack direction="row" spacing={2}>
            <GamesComboBox/>
            <Link style={styles.Link} to="/api/teams">       
              <Button style={styles.Button} variant="outlined">TEAMS</Button>
            </Link>
            <Link style={styles.Link} to="/api/leagues">
              <Button style={styles.Button} variant="outlined"> lEAGUES </Button>
            </Link>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
