import { createSlice } from "@reduxjs/toolkit";

/* Dashboard Slice to manage state for dasbboard data */
const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    userData: [],
  },
  reducers: {
    SAVE_USER_DATA(state, action) {
      state.userData = action?.payload || [];
    },

    RESET_ALL_DATA(state) {
      state.userData = [];
    },
  },
});

/* To save user data */
export const saveUserData = (data) => (dispatch) => {
  dispatch(dashboardSlice.actions.SAVE_USER_DATA(data));
};

/* Reset all data when page unmounts */
export const resetDashboardPage = () => (dispatch) => {
  dispatch(dashboardSlice.actions.RESET_ALL_DATA());
};

export { dashboardSlice };
