import axios from "axios";

const TOKEN = "314e96c919e54091997a566ae0fdc0fa";

const axiosInstance = axios.create({
  baseURL: "https://api.football-data.org/v2",
  headers: { "X-Auth-Token": TOKEN }
});

export default axiosInstance;
