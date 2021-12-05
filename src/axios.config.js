import axios from "axios";
import settings from "./settings";

axios.defaults.withCredentials = true;

export default axios.create({
  baseURL: "http://localhost:8000/",
  headers: { "Content-Type": "application/json" }
});
