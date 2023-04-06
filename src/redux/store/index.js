import { rootReducer } from "./rootReducer";
import { configureStore } from "@reduxjs/toolkit";

//Provide store to all reducer
const store = configureStore({
  reducer: rootReducer,
});

export { store };
