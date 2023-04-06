import { createSlice } from "@reduxjs/toolkit";

/* Modal Slice to manage state for modal*/
const modalSlice = createSlice({
  name: "modal",
  initialState: {
    showModal: false,
    title: "",
    submitBtnText: "",
    handleSubmit: "",
    content: "",
    type: "",
    submitId: "",
  },
  reducers: {
    OPEN_MODAL(state, action) {
      state.showModal = true;
      state.title = action.payload.title;
      state.submitBtnText = action.payload.submitBtnText;
      state.handleSubmit = action.payload.handleSubmit;
      state.content = action.payload.content;
      state.type = action.payload.type;
      state.submitId = action.payload.submitId;
    },
    CLOSE_MODAL(state, action) {
      state.showModal = false;
      state.title = "";
      state.submitBtnText = "";
      state.handleSubmit = "";
      state.content = "";
      state.type = "";
      state.submitId = "";
    },
  },
});

/* To modal opens */
export const openModal =
  ({ title, submitBtnText, handleSubmit, content, type, submitId }) =>
  (dispatch) => {
    dispatch(
      modalSlice.actions.OPEN_MODAL({
        title,
        submitBtnText,
        handleSubmit,
        content,
        type,
        submitId,
      })
    );
  };

/* To close modal */
export const closeModal = () => (dispatch) => {
  dispatch(modalSlice.actions.CLOSE_MODAL());
};

export { modalSlice };
