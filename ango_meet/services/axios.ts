import axios from "axios"

// Create an Axios instance with default configuration
const axiosInstance = axios.create({
  baseURL: "http://192.168.1.204:3000", // Set your base URL here
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
