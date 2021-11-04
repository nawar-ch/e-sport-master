import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  leagues: [],
};

export const fetchLeagues = createAsyncThunk(
  "leagues/fetchLeagues",
  async (page = 1) => {
    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_ESPORT_API_TOKEN}`,
      },
    };
    const response = await fetch(
      `${process.env.REACT_APP_ESPORT_API}/leagues?page=${page}&per_page=5`,
      options
    );
    const data = await response.json();
    const result = data.map((data) => {
      return {
        id: data.id,
        name: data.name,
        image_url: data.image_url,
      };
    });
    return result;
  }
);

export const fetchLeaguesByGame = createAsyncThunk(
  "leagues/fetchLeaguesByGame",
  async (game, page = 1) => {
    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_ESPORT_API_TOKEN}`,
      },
    };
    const response = await fetch(
      `${process.env.REACT_APP_ESPORT_API}/videogames/${game}/leagues?page=${page}&per_page=5`,
      options
    );
    const data = await response.json();
    const result = data.map((l) => {
      return {
        id: l.id,
        name: l.name,
        image_url: l.image_url,
      };
    });
    return result;
  }
);

export const leaguesSlice = createSlice({
  name: "leagues",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLeagues.fulfilled, (state, action) => {
      state.leagues = action.payload;
    });
	builder.addCase(fetchLeaguesByGame.fulfilled, (state, action) => {
		state.leagues = action.payload
	})
  },
});

export default leaguesSlice.reducer;
