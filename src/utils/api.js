import axios from "axios";

const params = {
  headers: {
    authorization: process.env.REACT_STRAPI_API_TOKEN,
  },
};
export const fetchDataFromAPI = async (url) => {
  try {
    const { data } = await axios.get(
      process.env.REACT_APP_DEV_URL + url ,
      params
    );
    return data; 
  } catch (error) {
    console.log(error);
    return error;
  }
};

// payment 
export const makePaymentRequest = axios.create({
  baseURL: process.env.REACT_APP_DEV_URL,
  headers: {
    authorization: process.env.REACT_STRAPI_API_TOKEN,
  },
})