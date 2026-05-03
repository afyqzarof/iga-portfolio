import type { Route } from "./+types/contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "iga's contact page" },
    { name: "description", content: "contact page" },
  ];
}
const Contact = () => {
  return (
    <div className="p-8 md:flex md:h-[63%] md:w-full md:items-end md:justify-end">
      <section className="mt-36 font-serif">
        <p className="text-2xl text-white md:hidden">email me at:</p>
        <a
          href="mailto:igaa.sokol@gmail.com"
          className="text-2xl text-white underline underline-offset-4 hover:no-underline"
        >
          igaa.sokol@gmail.com
        </a>
        <p className="hidden text-2xl text-white md:flex">london, uk</p>
      </section>
    </div>
  );
};

export default Contact;
