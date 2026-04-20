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
    <main className="h-screen bg-cover bg-[url(/backgrounds/mobile-home-bg.jpg)] p-4">
      <section className="mt-24">
        <h1 className="font-mono text-white text-3xl">iga sokół,</h1>
        <h2 className="font-mono text-white text-3xl">UI/UX designer</h2>
      </section>
      <Menu />
    </main>
  );
};

export default Home;
