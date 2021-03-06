import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  games: [],
};

export const fetchGames = createAsyncThunk("game/fetchGames", async () => {
  const options = {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "Authorization": `Bearer ${process.env.REACT_APP_ESPORT_API_TOKEN}`,
      //"Access-Control-Allow-Origin": "http://localhost:5000",
      "origin" : "https://e-sport-master.vercel.app",
    },
  };
  const response = await fetch(
    `${process.env.REACT_APP_ESPORT_API}/videogames`,
    options,
    { mode: 'no-cors'}
  );
  const data = await response.json();

  const result = data.map((data) => {
    return {
      id: data.id,
      name: data.name,
    };
  });

  return result;
});

export const gameSlice = createSlice({
  name: "game",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchGames.fulfilled, (state, action) => {
      state.games = action.payload;
    });
  },
});

export default gameSlice.reducer
