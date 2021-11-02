import React, {useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";
import { fetchGames } from "./gameSlice";
import { fetchLeagues, fetchLeaguesByGame } from "../leagues/leagues/leaguesSlice";

export default function GamesComboBox() {
  const games = useSelector((state) => state.game.games);
  const dispatch = useDispatch();
  const styles ={
    selectBox:{
      color: "white",
      height: "35px"
    
    },
    FormControl :{
        color: "white",
        border: "1px solid rgba(255, 255, 255, 1)",
        borderRadius: 5,
        height: "35px",
        
    }
  }
  useEffect(() => {
    dispatch(fetchGames());
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    if (value == "all") {
      dispatch(fetchLeagues());
    } else {
      dispatch(fetchLeaguesByGame(value));
    }
  };

  return (
    <FormControl
      style={styles.FormControl}
    >
      <Select
        onChange={handleChange}
        style={styles.selectBox}
        value="all"
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
        
      >
        <MenuItem  
          
      value="all" style={{padding:"0px"}}>All Games</MenuItem>
        {games &&
          games.map((g, key) => (
            <MenuItem key={key} value={g.id}style={{padding:"0px",display:"block"}}>
              {g.name}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
}
