import { Menu } from "~/components/menu";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "iga's homepage" },
    { name: "description", content: "homepage" },
  ];
}

const Home = () => {
  return (
    <main className="fixed top-0 h-screen w-screen bg-[url(/backgrounds/mobile-home-bg.jpg)] bg-cover">
      <section className="mt-24">
        <h1 className="font-mono text-3xl text-white">iga sokół,</h1>
        <h2 className="font-mono text-3xl text-white">UI/UX designer</h2>
      </section>
      <Menu />
    </main>
  );
};

export default Home;
