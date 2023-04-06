import axios from "axios";

/* Axios api calls */
const NetworkApi = {
  requestTimeout: 30000,
  getDefaultHeaders: () => ({
    Accept: "application/json",
    "Content-Type": "application/json",
  }),

  getHeaders: () => {
    const headers = {
      ...NetworkApi.getDefaultHeaders(),
    };
    return headers;
  },

  get: (route, params, headers) =>
    new Promise((resolve, reject) => {
      NetworkApi.prepareConfig(route, params, "get", headers, (err, res) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(res);
      });
    }),
  post: (route, params, headers) =>
    new Promise((resolve, reject) => {
      NetworkApi.prepareConfig(route, params, "post", headers, (err, res) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(res);
      });
    }),
  put: (route, params, headers) =>
    new Promise((resolve, reject) => {
      NetworkApi.prepareConfig(route, params, "put", headers, (err, res) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(res);
      });
    }),
  delete: (route, params, headers) =>
    new Promise((resolve, reject) => {
      NetworkApi.prepareConfig(route, params, "delete", headers, (err, res) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(res);
      });
    }),
  prepareConfig: async (url, data, methodType, headers, callback) => {
    const config = {
      method: methodType,
      url,
      data,
      headers: headers || NetworkApi.getDefaultHeaders(),
      // timeout: NetworkApi.requestTimeout
    };
    NetworkApi.call(config, callback);
  },
  call: (config, callback) => {
    axios(config)
      .then((response) => {
        callback(null, response.data);
      })
      .catch((error) => {
        callback(error, null);
      });
  },
};

export default NetworkApi;
