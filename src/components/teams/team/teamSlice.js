import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  team: {},
};

export const fetchTeamById = createAsyncThunk(
  "team/fetchTeamById",
  async (id) => {
    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_ESPORT_API_TOKEN}`,
      },
    };
    const response = await fetch(
      `${process.env.REACT_APP_ESPORT_API}/teams/${id}`,
      options
    );
    const data = await response.json();

    const result = {
      id: data.id,
      name: data.name,
      image_url: data.image_url,
      game: data.current_videogame.name,
      players: data.players,
    };

    return result;
  }
);

export const teamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {
    unsetTeam: (state) => {
      state.team = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTeamById.fulfilled, (state, action) => {
      state.team = action.payload;
    });
  },
});

export const { unsetTeam } = teamSlice.actions;

export default teamSlice.reducer;
