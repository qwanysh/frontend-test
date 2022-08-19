import { create } from "axios";

const axios = create({
  baseURL: "http://localhost:9000",
});

export const fetchSearchResults = async () => {
  const { data } = await axios.get("/search/results");
  return data;
};
