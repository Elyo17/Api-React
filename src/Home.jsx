import { Outlet, Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/artist">Artist</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};
