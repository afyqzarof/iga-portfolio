import type { Route } from "./+types/contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "iga's contact page" },
    { name: "description", content: "contact page" },
  ];
}
const Contact = () => {
  return (
    <div className="p-8 md:hidden">
      <section className="mt-36">
        <h1 className="font-mono text-xl text-white">email me at:</h1>
        <a
          href="mailto:igaa.sokol@gmail.com"
          className="font-mono text-xl text-white underline underline-offset-4 hover:no-underline"
        >
          igaa.sokol@gmail.com
        </a>
      </section>
    </div>
  );
};

export default Contact;
