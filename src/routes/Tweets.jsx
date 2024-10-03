import { Link } from "react-router-dom";
import { useTweets } from "../hooks/API.js";

export const Tweets = () => {
  const data = useTweets();
  return (
    <>
      {data?.map((tweet) => (
        <Link to={`tweets/${tweet.id}`} key={tweet.id}>
          <div className="tweet">
            <h3>{tweet.title}</h3>
            <p>{tweet.place}</p>
            <p>{tweet.createdAt}</p>
          </div>
        </Link>
      ))}
    </>
  );
};
