import { NavLink, Outlet, useLocation } from "react-router";
import { Menu } from "./menu";
import { Dot } from "./dot";

const Layout = () => {
  const location = useLocation();

  const getPath = () => {
    switch (location.pathname) {
      case "/about":
        return "about";
      case "/contact":
        return "contact";
      default:
        return "home";
    }
  };

  const paths = ["home", "work", "about", "contact"];

  return (
    <>
      {/* mobile layout */}
      <main
        className="fixed top-0 h-screen w-screen bg-cover md:hidden"
        style={{ backgroundImage: `url(/backgrounds/mobile/${getPath()}.jpg)` }}
      >
        <Outlet />
        <Menu />
      </main>

      {/* desktop layout */}
      <main
        className={`fixed top-0 hidden h-screen w-screen gap-48 bg-cover px-8 py-4 md:flex md:bg-[url(/backgrounds/desktop/home.jpg)]`}
      >
        <section className="flex min-w-xs flex-col justify-between font-mono">
          <div className="flex-1/3">
            <p className="mt-34 flex items-center gap-4 text-3xl text-white">
              <Dot className="bg-white" />
              {getPath()}
            </p>
          </div>
          <div className="text-accent flex-1">
            <h1 className="font-mono text-4xl">iga sokół</h1>
            <h2 className="font-mono text-4xl">UI/UX designer</h2>
          </div>
          <ul className="flex flex-1 flex-col gap-4 pb-8 pl-8">
            {paths
              .filter((path) => path !== getPath())
              .map((path) => {
                return (
                  <li className="text-3xl text-white" key={path}>
                    <NavLink
                      to={path === "home" ? "/" : path}
                      className="flex items-center gap-2"
                    >
                      {path}
                    </NavLink>
                  </li>
                );
              })}
          </ul>
        </section>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
