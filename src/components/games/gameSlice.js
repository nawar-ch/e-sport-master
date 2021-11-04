import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  games: [],
};

export const fetchGames = createAsyncThunk("game/fetchGames", async () => {
  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_ESPORT_API_TOKEN}`,
    },
  };
  const response = await fetch(
    `${process.env.REACT_APP_ESPORT_API}/api/videogames`,
    options
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
