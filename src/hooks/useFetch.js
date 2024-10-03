import { useEffect } from "react";
import { useState } from "react";
//import { useUser } from "../UserContext";

export const useFetch = (url) => {
  //const [user] = useUser();
  const [content, setContent] = useState(null);

  /*  const headers = {};
  if (user?.token) headers.Authorization = "Bearer " + user?.token; */

  useEffect(() => {
    fetch(url /*{ headers }*/)
      .then((res) => res.json())
      .then((data) => setContent(data));
  }, [url /*user?.token*/]);

  return content;
};
