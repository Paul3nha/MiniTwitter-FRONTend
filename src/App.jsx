import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./routes/Layout.jsx";
import { Home } from "./routes/Home.jsx";
import { Users } from "./routes/Users.jsx";
import { Tweets } from "./routes/Tweets.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="tweets" element={<Tweets />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
