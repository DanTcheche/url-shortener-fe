import axios from "axios";
import settings from "@/settings";

axios.defaults.withCredentials = true;
axios.defaults.xsrfCookieName = "csrftoken"
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"

export default axios.create({
  baseURL: settings.API_URL,
  headers: { "Content-Type": "application/json" }
});
