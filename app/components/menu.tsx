import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { Dot } from "./dot";
import Footer from "./footer";

const MenuBtn = ({
  handleClick,
  isActive,
}: {
  handleClick: () => void;
  isActive: boolean;
}) => {
  return (
    <button
      onClick={handleClick}
      className="flex cursor-pointer flex-col items-center gap-1 text-inherit"
    >
      <Dot className={isActive ? "bg-accent" : "bg-white"} />
      (menu)
    </button>
  );
};

const Menu = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  let navigate = useNavigate();

  const handleClick = () => setOpen(!open);

  const isActive = (path: string): boolean => {
    return location.pathname === path;
  };

  const handleLinkClick = (path: string) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <>
      {!open && (
        <article className="fixed bottom-4 z-10 px-4 font-mono text-xl text-white md:hidden">
          <MenuBtn handleClick={handleClick} isActive={open} />
        </article>
      )}
      <nav
        className={` ${open ? "translate-0 opacity-80 backdrop-blur-2xl" : "translate-y-full opacity-0"} absolute top-0 flex h-screen w-screen items-end overflow-hidden bg-[#6B6B6BCC] p-4 font-mono text-xl text-white transition`}
      >
        <div className="flex h-full flex-col justify-between">
          <Footer />
          <section className="flex flex-col items-start gap-5">
            <ul className="flex flex-col gap-5">
              <li>
                <button
                  type="button"
                  onClick={() => {
                    handleLinkClick("/");
                  }}
                  className={isActive("/") ? "line-through" : ""}
                >
                  home
                </button>
              </li>
              <li>view my project, studio</li>
              <li>
                <button
                  onClick={() => {
                    handleLinkClick("/about");
                  }}
                  className={isActive("/about") ? "line-through" : ""}
                >
                  about
                </button>
              </li>
              <li>contact</li>
            </ul>
            <div className="text-accent">
              <MenuBtn handleClick={handleClick} isActive={open} />
            </div>
          </section>
        </div>
      </nav>
    </>
  );
};

export { Menu };
