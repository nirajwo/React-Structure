import { createSlice } from "@reduxjs/toolkit";

/* Loader Slice to manage state for loader */
const loaderSlice = createSlice({
  name: "loader",
  initialState: { isshowLoader: false },
  reducers: {
    SHOW_LOADER(state, action) {
      state.isshowLoader = action?.payload;
    },
  },
});

/* To show/hide loader */

export const showLoader = (isshowLoader) => (dispatch) => {
  dispatch(loaderSlice.actions.SHOW_LOADER(isshowLoader));
};

export { loaderSlice };
