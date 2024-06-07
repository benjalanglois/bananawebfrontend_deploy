import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3000";

export default axios.create({
  baseURL: BASE_URL,
});

export const postTirarDados = async () => {
    const LOGIN_URL = '${BASE_URL}/tirardados';
    console.log("HOLAAAAaaaaaa")
    try {
        const response = await axios.post(
        LOGIN_URL,
        {},
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      return response;
    } catch (error) {
      return error;
    }
  };


