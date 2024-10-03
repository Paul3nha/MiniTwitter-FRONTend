import { useFetch } from "./useFetch.js";

export const useEntries = () => useFetch("https://dsvccv");

export const useRegister = () => useFetch("https://davwa");

export const useEntry = (id) => useFetch(`https://dvsvc/${id}`);
