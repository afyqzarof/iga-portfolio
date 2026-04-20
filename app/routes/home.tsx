import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "iga's homepage" },
    { name: "description", content: "homepage" },
  ];
}

const Home = () => {
  return (
    <main className="h-screen bg-cover bg-[url(/backgrounds/mobile-home-bg.jpg)]">
      <p className="font-mono">This is home page</p>;
    </main>
  );
};

export default Home;
