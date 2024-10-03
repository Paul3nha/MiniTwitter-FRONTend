import { Link, Outlet } from "react-router-dom";
import { useUser } from "../UserContext.jsx";

export const Layout = () => {
  const [user] = useUser();

  return (
    <>
      <header id="header">
        <Link to="/">Twitter Page</Link>
        {user ? (
          <span>Bienvenido, {user}</span>
        ) : (
          <Link to="users/login">Login</Link>
        )}
        <Link to="tweets">Tweets</Link>
      </header>
      <Outlet />
    </>
  );
};
