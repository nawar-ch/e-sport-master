import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  league: {},
};

export const fetchLeague = createAsyncThunk(
  "league/fetchLeague",
  async (id) => {
    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_ESPORT_API_TOKEN}`,
      },
    };
    const response = await fetch(
      `${process.env.REACT_APP_ESPORT_API}/leagues/${id}`,
      options
    );
    const data = await response.json();

    const result = {
      id: data.id,
      image_url: data.image_url,
      name: data.name,
      full_name: data.series[0].full_name,
      begin_at: data.series[0].begin_at,
      winner_id: data.series[0].winner_id,
      game: data.videogame.name,
      end_at: data.series[0].end_at,
    };
  

    return result;
  }
);

export const leagueSlice = createSlice({
  name: "league",
  initialState,
  reducers: {
    unsetLeague: (state) => {
      state.league = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLeague.fulfilled, (state, action) => {
      state.league = action.payload;
    });
  },
});

export const { unsetLeague } = leagueSlice.actions;

export default leagueSlice.reducer;
