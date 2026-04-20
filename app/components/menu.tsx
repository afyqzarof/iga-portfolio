import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { Dot } from "./dot";

const MenuBtn = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <button
      onClick={handleClick}
      className="flex cursor-pointer flex-col items-center gap-1 text-inherit"
    >
      <Dot />
      (menu)
    </button>
  );
};

const Menu = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const handleClick = () => setOpen(!open);

  const isActive = (path: string): boolean => {
    return location.pathname === path;
  };
  return (
    <>
      {!open && (
        <article className="fixed bottom-4 z-10 px-4 font-serif text-xl text-white">
          <MenuBtn handleClick={handleClick} />
        </article>
      )}
      <nav
        className={` ${open ? "translate-0 opacity-80" : "translate-y-full opacity-0"} absolute top-0 flex h-screen w-screen items-end overflow-hidden bg-[#6B6B6BCC] p-4 font-serif text-xl text-white transition`}
      >
        <section className="flex flex-col items-start gap-5">
          <ul className="flex flex-col gap-5">
            <li>
              <NavLink to="/" className={isActive("/") ? "line-through" : ""}>
                home
              </NavLink>
            </li>
            <li>view my project, studio</li>
            <li>
              <Link
                to="about"
                className={isActive("/about") ? "line-through" : ""}
              >
                about
              </Link>
            </li>
            <li>contact</li>
          </ul>
          <MenuBtn handleClick={handleClick} />
        </section>
      </nav>
    </>
  );
};

export { Menu };
