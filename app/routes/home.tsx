import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "iga's homepage" },
    { name: "description", content: "homepage" },
  ];
}

const Home = () => {
  return <p className="font-mono">This is home page</p>;
};

export default Home;
