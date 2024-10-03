import { useNavigate } from "react-router-dom";
import { Tweets } from "./Tweets.jsx";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>MiniTwitter App</h1>

      <h2>Últimos Tweets:</h2>

      <button
        className="btnHome"
        onClick={(e) => {
          e.preventDefault();
          navigate(
            "/newTweet"
          ); /* creo que no va a ser este endpoint. REVISAR */
        }}
      >
        twittear
      </button>

      <div id="home">
        <Tweets />
      </div>
    </>
  );
};
