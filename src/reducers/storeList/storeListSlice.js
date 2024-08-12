import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getId = createAsyncThunk("storeList/getId", async () => {
  const { data } = await axios.get("http://localhost:3000/data2");
  return data;
});

export const postData = createAsyncThunk(
  "storeList/postData",
  async (data2, { dispatch }) => {
    const { data } = await axios.post("http://localhost:3000/data2", data2);
    dispatch(getId());
  }
);

export const deleteData = createAsyncThunk(
  "storeList/deleteData",
  async (id, { dispatch }) => {
    await axios.delete(`http://localhost:3000/data2/${id}`);
    dispatch(getId());
  }
);

export const storeListSlice = createSlice({
  name: "storeList",
  initialState: {
    data2: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getId.fulfilled, (state, action) => {
        state.data2 = action.payload;
      })
      .addCase(postData.fulfilled, (state, action) => {
        state.data2 = action.payload;
      })
      .addCase(deleteData.fulfilled, (state, action) => {
        console.log("good");
      });
  },
});

export default storeListSlice.reducer;
