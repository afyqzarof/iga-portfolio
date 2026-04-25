import { Menu } from "~/components/menu";
import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "iga's about page" },
    { name: "description", content: "about page" },
  ];
}

const About = () => {
  return (
    <main className="fixed top-0 h-screen w-screen bg-[url(/backgrounds/mobile-about-bg.jpg)] bg-cover">
      <p className="text-white">about page</p>
      <Menu />
    </main>
  );
};

export default About;
