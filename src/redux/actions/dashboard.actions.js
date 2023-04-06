import paths from "../../lib/api/paths";
import NetworkApi from "../../lib/api/NetworkApi";
import { closeModal } from "../slices/modal";
import { showLoader } from "../../redux/slices/loader";
import { resetDashboardPage, saveUserData } from "../../redux/slices/dashboard";

/* Get user list */
export const getUser = () => async (dispatch) => {
  dispatch(showLoader(true));
  NetworkApi.get(
    paths.getUserDataApi(),
    {},
    {
      // Authorization: `${TOKEN_TYPE} ${token}`,
    }
  )
    .then((response) => {
      const data = response?.users;
      dispatch(saveUserData(data || []));
      dispatch(showLoader(false));
    })
    .catch((error) => {
      console.log(error);
      dispatch(showLoader(false));
    });
};

/* Add user */
export const addUser =
  ({ fname, lname, email, password, phone, domain }) =>
  async (dispatch) => {
    dispatch(showLoader(true));
    NetworkApi.post(
      paths.addUserApi(),
      {
        firstName: fname,
        lastName: lname,
        email: email,
        password: password,
        phone: phone,
        domain: domain,
        /* other user data */
      },
      {
        // Authorization: `${TOKEN_TYPE} ${token}`,
      }
    )
      .then((response) => {
        dispatch(getUser());
        dispatch(closeModal());
        dispatch(showLoader(false));
      })
      .catch((error) => {
        console.log(error);
        dispatch(showLoader(false));
      });
  };

/* Edit user */
export const editUser =
  ({ id, fname, lname, email, password, phone, domain }) =>
  async (dispatch) => {
    dispatch(showLoader(true));
    NetworkApi.put(
      paths.editUserApi({ id }),
      {
        firstName: fname,
        lastName: lname,
        email: email,
        password: password,
        phone: phone,
        domain: domain,
        /* other user data */
      },
      {
        // Authorization: `${TOKEN_TYPE} ${token}`,
      }
    )
      .then((response) => {
        dispatch(getUser());
        dispatch(closeModal());
        dispatch(showLoader(false));
      })
      .catch((error) => {
        console.log(error);
        dispatch(showLoader(false));
      });
  };

/*Delete User*/
export const deleteUser =
  ({ id }) =>
  async (dispatch) => {
    dispatch(showLoader(true));
    NetworkApi.delete(
      paths.deleteUserApi({ id }),
      {},
      {
        // Authorization: `${TOKEN_TYPE} ${token}`,
      }
    )
      .then((response) => {
        dispatch(getUser());
        dispatch(closeModal());
        dispatch(showLoader(false));
      })
      .catch((error) => {
        console.log(error);
        dispatch(showLoader(false));
      });
  };

//Reset whole page data when page unmounts
export const resetAllData = () => (dispatch) => {
  dispatch(resetDashboardPage());
};
