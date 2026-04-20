import { useState } from "react";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);

  return (
    <>
      <article className="fixed bottom-4 font-serif text-white">
        <button onClick={handleClick}>(menu)</button>
      </article>
      <section
        className={` ${open ? "translate-0 opacity-90" : "translate-y-full opacity-0"} absolute top-0 h-screen w-screen overflow-hidden bg-red-100 transition`}
      >
        <ul>
          <li>home</li>
          <li>view my project, studio</li>
          <li>about</li>
          <li>contact</li>
        </ul>
      </section>
    </>
  );
};

export { Menu };
