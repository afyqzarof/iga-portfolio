import { useState } from "react";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);

  return (
    <>
      <article className="fixed bottom-4 text-white font-serif">
        <button onClick={handleClick}>(menu)</button>
      </article>
      <section
        className={`
          ${open ? "translate-0" : "translate-y-full"} overflow-hidden absolute bg-red-100 w-screen h-screen top-0 transition-transform
            `}
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
