import axios from "axios";

export const strapiClient = axios.create({
  baseURL: process.env.STRAPI_URL,
  headers: {
    authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
  },
});

// export const mediaClient = axios.create({
//   baseURL: process.env.STRAPI_URL,
//   headers: {
//     authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
//   },
// });
