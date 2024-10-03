import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./routes/Layout.jsx";
import { Home } from "./routes/Home.jsx";
import { Users } from "./routes/Users.jsx";
import { Tweets } from "./routes/Tweets.jsx";
import { Login } from "./components/Users/Login.jsx";
import { Register } from "./components/Users/Register.jsx";
import { Profile } from "./components/Users/Profile.jsx";
import { TweetsByUser } from "./components/Tweets/TweetsByUser.jsx";
import { TweetById } from "./components/Tweets/TweetById.jsx";
import { ChangeAvatar } from "./components/Users/ChangeAvatar.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="users" element={<Users />}>
            <Route path="login" element={<Login />}></Route>
            <Route path="register" element={<Register />}></Route>
            <Route path=":userId" element={<Profile />}></Route>
            <Route path="avatar" element={<ChangeAvatar />}></Route>
          </Route>
          <Route path="tweets" element={<Tweets />}>
            <Route path="user/:userId" element={<TweetsByUser />}></Route>
            <Route path=":tweetId" element={<TweetById />}></Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
