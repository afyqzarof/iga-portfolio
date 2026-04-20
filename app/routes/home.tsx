import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "iga's homepage" },
    { name: "description", content: "homepage" },
  ];
}

export default function Home() {
  return <p>This is home page</p>;
}
