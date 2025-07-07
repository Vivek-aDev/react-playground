import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const res = await axios.get("https://fakestoreapi.com/products");
  return res.data;
});

export { fetchProducts };
