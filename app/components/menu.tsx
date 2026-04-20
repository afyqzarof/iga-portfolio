import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const handleClick = () => setOpen(!open);

  const isActive = (path: string): boolean => {
    return location.pathname === path;
  };
  return (
    <>
      <article className="fixed bottom-4 p-4 font-serif text-white">
        <button onClick={handleClick}>(menu)</button>
      </article>
      <nav
        className={` ${open ? "translate-0 opacity-90" : "translate-y-full opacity-0"} absolute top-0 h-screen w-screen overflow-hidden bg-red-100 p-4 transition`}
      >
        <ul>
          <li>
            <NavLink to="/" className={isActive("/") ? "line-through" : ""}>
              home
            </NavLink>
          </li>
          <li>view my project, studio</li>
          <li>
            <Link to="about">about</Link>
          </li>
          <li>contact</li>
        </ul>
      </nav>
    </>
  );
};

export { Menu };
