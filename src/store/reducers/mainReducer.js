import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProjects = createAsyncThunk("fetchProjects", async () => {
  const res = await fetch(`http://localhost:3000/projects`);
  return res?.json();
});
export const fetchAllData = createAsyncThunk("fetchAllData", async () => {
  const res = await fetch(`http://localhost:3000/portfolio`);
  return res?.json();
});

const mainReducer = createSlice({
  name: "mainState",
  initialState: {},
  //   reducers: {
  //     fetchProjects(state, action) {
  //       state.push(...action.payload);
  //     },
  //     fetchContactDetails(state, action) {
  //       state.contactDetails = action.payload;
  //     },
  //     fetchProfileDetails(state, action) {
  //       state.profileDetails = action.payload;
  //     },
  //   },
  extraReducers: (builder) => {
    builder.addCase(fetchAllData.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAllData.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchAllData.rejected, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(fetchProjects.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProjects.fulfilled, (state, action) => {
      state.projects = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchProjects.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export default mainReducer.reducer;
