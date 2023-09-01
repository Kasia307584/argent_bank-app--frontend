import { configureStore, createSlice } from "@reduxjs/toolkit";

const tokenSlice = createSlice({
  name: "token",
  initialState: {
    token: "",
  },
  reducers: {
    setToken: (state, action) => {
      console.log(action.payload);
      state.token = action.payload;
    },
  },
});

const userDataSlice = createSlice({
  name: "userData",
  initialState: {
    firstName: "",
    lastName: "",
  },
  reducers: {
    setData: (state, action) => {
      console.log(action.payload);
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },
  },
});

const store = configureStore({
  reducer: {
    token: tokenSlice.reducer,
    userData: userDataSlice.reducer,
  },
});

const { setToken } = tokenSlice.actions;
const { setData } = userDataSlice.actions;

export { setToken, setData, store };
