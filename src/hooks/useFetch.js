// this folder is a custom hook which can be used in different component for same purpose
import { useEffect, useState } from "react";
import { fetchDataFromAPI } from "../utils/api";

const useFetch = (endpoint) => {
  // enpoint from where we need to call url or api
  const [data, setData] = useState();

  useEffect(() => {
    makeApiCall();
  }, [endpoint]);

  const makeApiCall = async () => {
    const res = await fetchDataFromAPI(endpoint);
    setData(res);
  };
  return {data};
};
export default useFetch;
