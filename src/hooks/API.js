import { useFetch } from "./useFetch.js";

export const useTweets = () =>
  useFetch("https://minitwitter-paulenha.up.railway.app/tweets");

export const useRegister = () => useFetch("https://davwa");

export const useEntry = (id) => useFetch(`https://dvsvc/${id}`);
