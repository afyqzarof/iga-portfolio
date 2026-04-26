import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "iga's about page" },
    { name: "description", content: "about page" },
  ];
}

const About = () => {
  return (
    <section className="flex justify-end gap-8">
      <div className="hidden max-w-xl flex-3 md:block">
        <img
          src="/iga-picture.jpg"
          alt="iga's picture"
          className="w-full max-w-xl"
        />
      </div>
      <div className="flex flex-1/6 flex-col gap-4 py-24 pr-20 pl-4 font-serif text-white md:gap-8 md:pt-30 md:pl-0 md:text-2xl">
        <p>
          Iga holds a degree in graphic communication design. Her route into
          UI/UX took her through  project management, operations, and  internal
          communications.
        </p>
        <p>
          Those experiences is perhaps why she thinks about design as much in
          terms of context  and process as about the work itself.
        </p>
        <p>
          Iga likes research, empathy, and typography. She enjoys investigating
          where design connects to other creative disciplines.
        </p>
        <p>
          She is based in London, and open to freelance and full‑time
          opportunities.
        </p>
      </div>
    </section>
  );
};

export default About;
