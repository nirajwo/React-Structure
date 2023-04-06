const getHost = () => {
  return process.env.REACT_APP_API_BASE_URL;
};
const workflowURL = getHost();

//paths for all api call.
const paths = {
  getUserDataApi: () => `${workflowURL}/users`,
  addUserApi: () => `${workflowURL}/users/add`,
  editUserApi: ({ id }) => `${workflowURL}/users/${id}`,
  deleteUserApi: ({ id }) => `${workflowURL}/users/${id}`
};

export default paths;
