import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "../components/games/gameSlice";
import teamReducer from "../components/teams/team/teamSlice";
import teamsReducer from "../components/teams/teams/teamsSlice";
import leagueReducer from "../components/leagues/league/leagueSlice";
import leaguesReducer from "../components/leagues/leagues/leaguesSlice";


export const store = configureStore({
  reducer: {
    leagues: leaguesReducer,
    league: leagueReducer,
    teams: teamsReducer,
	  team: teamReducer,
	  game: gameReducer
  },
});
