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
    <div className="py-24 pr-20 pl-4 font-serif">
      <p className="text-white">
        Iga holds a degree in graphic communication design. Her route into UI/UX
        took her through  project management, operations, and  internal
        communications.
      </p>
    </div>
  );
};

export default About;
