import axios from "axios";
const BASE_URL = "http://localhost:3000";

export default axios.create({
  baseURL: BASE_URL,
});

export const postTirarDados = async () => {
    const DADOS_URL = `${BASE_URL}/tirardados`;
    console.log(DADOS_URL);
    try {
        const response = await axios.post(
        DADOS_URL,
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


