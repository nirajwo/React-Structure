import { loaderSlice } from "../slices/loader";
import { dashboardSlice } from "../slices/dashboard";
import { modalSlice } from "../slices/modal";

/* Root reducer to combine all reducers */
export const rootReducer = {
  loader: loaderSlice.reducer,
  dashboard: dashboardSlice.reducer,
  modalSlice: modalSlice.reducer,
};
