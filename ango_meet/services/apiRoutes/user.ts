import axiosInstance from "../axios";
import { UserData, UserDataSignIn } from "@/types/user_types";

// User Auth
const handleLogin = (data: UserDataSignIn) => {
  return axiosInstance.post(`/user/login`, data);
};

const handleRegister = (data: UserData) => {
  return axiosInstance.post("/user/signin", data);
};

const handleLogout = () => {
  return axiosInstance.get("/api/user/logout");
};

const getReceivedPix = (id: number) => {
  return axiosInstance.get(`/users/pix/receive/${id}`);
};



export { handleLogin, handleRegister, handleLogout, getReceivedPix};
