import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const FetchingData = createAsyncThunk(
  "ProductSlice/FetchingData",
  async () => {
    const res = await fetch(`https://api.escuelajs.co/api/v1/products`);
    const data = await res.json();
    return data;
  }
);

const ProductSlice = createSlice({
  name: "ProductSlice",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(FetchingData.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default ProductSlice.reducer;
