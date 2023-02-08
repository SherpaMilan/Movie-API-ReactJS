import axios from "axios";

export const fetchData = async (str) => {
  const apiEp = `http://www.omdbapi.com/?apikey=eabc3d05&t=${str}`;

  try {
    const { data } = await axios.get(apiEp);
    return data;
  } catch (error) {
    console.log(error);
  }
};
