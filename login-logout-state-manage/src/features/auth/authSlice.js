import { createSlice } from "@reduxjs/toolkit";
import {
  clearAuthFromLocal,
  loadAuthFromLocal,
  saveAuthToLocal,
} from "../../utils/localStorage";

const initialState = loadAuthFromLocal() || {
  isLoggedIn: false,
  username: "",
  token: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.username = action.payload;
      state.token = action.payload.token;
      saveAuthToLocal({ isLoggedIn: true, username: action.payload });
      // saveAuthToLocal(state)
      // console.log('this is state',state);
      
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.username = "";
      state.token = "";
      clearAuthFromLocal();
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
