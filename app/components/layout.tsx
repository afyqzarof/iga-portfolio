import { Outlet, useLocation } from "react-router";
import { Menu } from "./menu";

const Layout = () => {
  const location = useLocation();
  console.log(location);

  const getPath = () => {
    switch (location.pathname) {
      case "/about":
        return "about";
      default:
        return "home";
    }
  };

  return (
    <main
      className={`fixed top-0 h-screen w-screen bg-[url(/backgrounds/mobile/${getPath()}.jpg)] bg-cover md:bg-[url(/backgrounds/desktop/home.jpg)]`}
    >
      <Outlet />
      <Menu />
    </main>
  );
};

export default Layout;
