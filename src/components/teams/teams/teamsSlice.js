import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  teams: [],
};

export const fetchTeams = createAsyncThunk(
  "teams/fetchTeams",
  async (page = 1) => {
    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_ESPORT_API_TOKEN}`,
      },
    };
    const response = await fetch(
      `${process.env.REACT_APP_ESPORT_API}/teams?page=${page}&per_page=5`,
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

export const teamsSlice = createSlice({
  name: "teams",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTeams.fulfilled, (state, action) => {
		state.teams = action.payload
	});
  },
});

export default teamsSlice.reducer;
