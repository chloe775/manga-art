"use client";

import AnchorLink from "react-anchor-link-smooth-scroll";

const NavbarDesktop = () => {
  return (
    <header className="bg-black">
      <nav className="pr-20">
        <div className="flex flex-row justify-center text-[rgb(252,206,80)]">
          <div className="hidden lg:flex justify-end text-whitepr-10 py-5 ">
            <ul className="flex flex-row uppercase">
              <li className="inline-flex py-2 hover:hover:text-pink-500 hover:underline-offset-4  ease-in duration-300 hover:border-b-2 hover:border-[rgb(252,206,80)]">
                <a href="http://localhost:3000/">Accueil</a>
              </li>
              <li
                className="inline-flex py-2 mx-10 hover:hover:text-pink-500 hover:underline-offset-4  ease-in duration-300 hover:border-b-2 hover:border-[rgb(252,206,80)] 
              "
              >
                <AnchorLink href="#about">A propos</AnchorLink>
              </li>
              <li className="inline-flex py-2 hover:hover:text-pink-500 ease-in duration-300 hover:border-b-2 hover:border-[rgb(252,206,80)]">
                <AnchorLink href="#skills" offset={() => 50}>
                  Compétences
                </AnchorLink>
              </li>
              <li className="inline-flex py-2 mx-10 hover:hover:text-pink-500 ease-in duration-300 hover:border-b-2 hover:border-[rgb(252,206,80)]">
                <AnchorLink href="#projects" offset={() => 50}>
                  Projets
                </AnchorLink>
              </li>
              <li className="inline-flex py-2 hover:hover:text-pink-500 ease-in duration-300 hover:border-b-2 hover:border-[rgb(252,206,80)]">
                <AnchorLink href="#timeline" offset={() => 50}>
                  Parcours
                </AnchorLink>
              </li>
              <li className="inline-flex py-2 ml-10 hover:hover:text-pink-500 ease-in duration-300 hover:border-b-2 hover:border-[rgb(252,206,80)]">
                <AnchorLink href="#contact" offset={() => 50}>
                  Contact
                </AnchorLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavbarDesktop;
