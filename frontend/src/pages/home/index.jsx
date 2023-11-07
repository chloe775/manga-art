"use client";

import AnchorLink from "react-anchor-link-smooth-scroll";
import React from "react";

import ReactDOM from "react-dom";

const Home = () => {
  return (
    <>
      {/* navbar sur pc */}

      <div>
        <nav>
          <div className="bg-white">
            <div className=" py-6 bg-black hidden lg:grid grid-cols-3 text-white ">
              <div className="flex justify-center">
                <img src="images/div12.png" alt="logo" width={150}/>
              </div>
              <div>
                <p>barre de recherche a ajouter</p>
              </div>
              <div>
                <button>
                  {" "}
                  se connecter<a href=""></a>
                </button>
                <button>
                  {" "}
                  s inscrire <a href=""></a>
                </button>
              </div>
            </div>
            <div className="pr-20">
              <div className="flex flex-row justify-center text-purple-900">
                <div className="hidden lg:flex justify-end text-whitepr-10 ">
                  <ul className="flex flex-row uppercase">
                    <li className="inline-flex py-2 hover:hover:text-pink-500 ease-in duration-300 ]">
                      <a href="#">Accueil</a>
                    </li>
                    <li
                      className="inline-flex py-2 mx-10 hover:hover:text-pink-500 hover:underline-offset-4  ease-in duration-300 hover:border-b-2 hover:border-[rgb(252,206,80)] 
              "
                    >
                      <AnchorLink href="#">Actu</AnchorLink>
                    </li>
                    <li className="inline-flex py-2 hover:hover:text-pink-500 ease-in duration-300 hover:border-b-2 hover:border-[rgb(252,206,80)]">
                      <AnchorLink href="#" offset={() => 50}>
                        1day, 1 manga
                      </AnchorLink>
                    </li>
                    <li className="inline-flex py-2 mx-10 hover:hover:text-pink-500 ease-in duration-300 hover:border-b-2 hover:border-[rgb(252,206,80)]">
                      <AnchorLink href="#" offset={() => 50}>
                        artist
                      </AnchorLink>
                    </li>
                    <li className="inline-flex py-2 hover:hover:text-pink-500 ease-in duration-300 hover:border-b-2 hover:border-[rgb(252,206,80)]">
                      <AnchorLink href="#" offset={() => 50}>
                        communauté
                      </AnchorLink>
                    </li>
                    <li className="inline-flex py-2 ml-10 hover:hover:text-pink-500 ease-in duration-300 hover:border-b-2 hover:border-[rgb(252,206,80)]">
                      <AnchorLink href="#" offset={() => 50}>
                        favoris
                      </AnchorLink>
                    </li>
                    <li className="inline-flex py-2 ml-10 hover:hover:text-pink-500 ease-in duration-300 hover:border-b-2 hover:border-[rgb(252,206,80)]">
                      <AnchorLink href="#" offset={() => 50}>
                        favoris
                      </AnchorLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* fin de la nav sur pc */}

      {/* navbar mobile */}

      <div>
        <div className="">
          <div className="lg:hidden navbar bg-base-100">
            <div className="navbar-start">
              <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h7"
                    />
                  </svg>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a>accueil</a>
                  </li>
                  <li>
                    <a>actu</a>
                  </li>
                  <li>
                    <a>1day, 1manga</a>
                  </li>
                  <li>
                    <a>artist</a>
                  </li>
                  <li>
                    <a>communauté</a>
                  </li>
                  <li>
                    <a>favoris</a>
                  </li>
                  <li>
                    <a>connection/inscription</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="navbar-center">
              <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className="navbar-end">
              <button className="btn btn-ghost btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
              <button className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                  <span className="badge badge-xs badge-primary indicator-item"></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* fin de la navbar mobile */}

      {/* div avec fond blanc premkiere partie */}

      <div className=" bgbizzare">
        <div className="lg:hidden">
          <img src="images/banierejojo.jpg" />
        </div>

        <div className="lg:flex justify-center  hidden ">
          <img src="images/poyo2.jpg" alt="jojos" />
        </div>

        <div className="lg:flex justify-center">
          <div className="flex justify-center lg:w-2/3">
            <div className="bg-white py-4 min-w-full">
              <div className="text-4xl flex justify-center ">
                <h1>L'ESSENTIEL DE L'ACTUALITÉ MANGA & ANIME</h1>
              </div>

              <div className="pt-4">
                <div className="grid grid-cols-3 space-x-4 ml-4 mr-4 lg:grid lg:grid-cols-5 ">
                  <div class="flex flex-col items-start bg-red-300 py-6 ">
                    <span class="inline-block py-1 px-2 rounded bg-purple-50 text-purple-500 text-xs font-medium tracking-widest ml-2">
                      CATEGORY
                    </span>
                    <h2 class="sm:text-2xl text-xl title-font  text-gray-900 ml-2 font-bold">
                      Jojos Bizzare Adventure
                    </h2>
                    <div>
                      <div>
                        <img src="images/.jpg" />
                      </div>
                    </div>
                    <div class="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 w-full mt-6 ml-2">
                      <a class="text-purple-500 inline-flex items-center ">
                        En Savoir +
                        <svg
                          class="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                      <span class="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 ">
                        <svg
                          class="w-4 h-4 mr-1"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                        1.2K
                      </span>
                      <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                        <svg
                          class="w-4 h-4 mr-1"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                        <div className="mr-6">
                          <p>6</p>
                        </div>
                      </span>
                    </div>
                  </div>
                  <div class="flex flex-col items-start bg-blue-300 py-6 bg-imagess bg-cover ">
                    <span class="inline-block py-1 px-2 rounded bg-purple-50 text-purple-500 text-xs font-medium tracking-widest ml-2">
                      CATEGORY
                    </span>
                    <h2 class="sm:text-2xl text-xl title-font  text-gray-900 ml-2 ">
                      Saint Seiya
                    </h2>

                    <div>
                      <div className="border-b-2 border-gray-100 w-full"></div>
                    </div>
                    <div class="flex items-center flex-wrap pb-4 mb-4  mt-6 ml-2">
                      <a class="text-purple-500 inline-flex items-center">
                        En Savoir +
                        <svg
                          class="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                      <span class="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 ">
                        <svg
                          class="w-4 h-4 mr-1"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                        1.2K
                      </span>
                      <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                        <svg
                          class="w-4 h-4 mr-1"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                        <div className="mr-6">
                          <p>6</p>
                        </div>
                      </span>
                    </div>
                  </div>

                  <div class="  flex flex-col items-start bg-green-300 py-6">
                    <span class="inline-block py-1 px-2 rounded bg-purple-50 text-purple-500 text-xs font-medium tracking-widest ml-2">
                      CATEGORY
                    </span>
                    <h2 class="sm:text-2xl text-xl title-font  text-gray-900 ml-2">
                      GTO
                    </h2>
                    <div>
                      <img src="images/th.jpg" />
                    </div>
                    <div class="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 w-full mt-6">
                      <div></div>
                      <a class="text-purple-500 inline-flex items-center ml-2">
                        En Savoir +
                        <svg
                          class="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                      <span class="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 ">
                        <svg
                          class="w-4 h-4 mr-1"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                        1.2K
                      </span>
                      <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                        <svg
                          class="w-4 h-4 mr-1"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                        <div className="mr-6">
                          <p>6</p>
                        </div>
                      </span>
                    </div>
                  </div>
                  <div class="hidden lg:flex flex-col items-start bg-blue-300 py-6">
                    <span class="inline-block py-1 px-2 rounded bg-purple-50 text-purple-500 text-xs font-medium tracking-widest ml-2">
                      CATEGORY
                    </span>
                    <h2 class="sm:text-2xl text-xl title-font  text-gray-900 ml-2 ">
                      Naruto
                    </h2>

                    <div>
                      <div>
                        <img src="images/th.jpg" />
                      </div>
                    </div>
                    <div class="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 w-full mt-6 ml-2">
                      <a class="text-purple-500 inline-flex items-center">
                        En Savoir +
                        <svg
                          class="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                      <span class="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 ">
                        <svg
                          class="w-4 h-4 mr-1"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                        1.2K
                      </span>
                      <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                        <svg
                          class="w-4 h-4 mr-1"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                        <div className="mr-6">
                          <p>6</p>
                        </div>
                      </span>
                    </div>
                  </div>

                  <div class="hidden lg:flex flex-col items-start bg-red-300 py-6">
                    <span class="inline-block py-1 px-2 rounded bg-purple-50 text-purple-500 text-xs font-medium tracking-widest ml-2">
                      CATEGORY
                    </span>
                    <h2 class="sm:text-2xl text-xl title-font  text-gray-900 ml-2 ">
                      One Piece
                    </h2>

                    <div>
                      <div>
                        <img src="images/th.jpg" />
                      </div>
                    </div>
                    <div class="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 w-full mt-6 ml-2">
                      <a class="text-purple-500 inline-flex items-center">
                        En Savoir +
                        <svg
                          class="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                      <span class="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 ">
                        <svg
                          class="w-4 h-4 mr-1"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                        1.2K
                      </span>
                      <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                        <svg
                          class="w-4 h-4 mr-1"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                        <div className="mr-6">
                          <p>6</p>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end mt-4 mr-4">
                  <input
                    class="favorite styled"
                    type="button"
                    value="Voir tous les essentiel et Actualite"
                  />
                </div>
              </div>
              <hr />

              {/* carousel  */}

              <div>
                <div className="text-4xl flex justify-center mt-4">
                  <h1>L'ESSENTIEL DE L'ACTUALITÉ MANGA & ANIME 2EME PARTIE </h1>
                </div>
                <div id="slide" className="carousel w-full mt-4 flex ">
                  <div
                    id="slide1"
                    className="carousel-item  w-full justify-center"
                  >
                    <img
                      src="/images/th.jpg"
                      sizes=""
                      className="flex justify-center"
                    />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                      <a href="#slide1" className="btn btn-circle">
                        ❮
                      </a>
                      <a href="#slide2" className="btn btn-circle">
                        ❯
                      </a>
                    </div>
                  </div>

                  <div
                    id="slide2"
                    className="carousel-item w-full justify-center"
                  >
                    <img src="/images/jojos1.jpg" className="" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                      <a href="#slide1" className="btn btn-circle">
                        ❮
                      </a>
                      <a href="#slide3" className="btn btn-circle">
                        ❯
                      </a>
                    </div>
                  </div>

                  <div
                    id="slide3"
                    className="carousel-item w-full justify-center "
                  >
                    <img src="/images/jojos2.jpg" className="" />*
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                      <a href="#slide2" className="btn btn-circle">
                        ❮
                      </a>
                      <a href="#slide4" className="btn btn-circle">
                        ❯
                      </a>
                    </div>
                  </div>

                  <div
                    id="slide4"
                    className="carousel-item  w-full justify-center"
                  >
                    <img src="/images/jojos3.jpg" className="" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                      <a href="#slide3" className="btn btn-circle">
                        ❮
                      </a>
                      <a href="#slide4" className="btn btn-circle">
                        ❯
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
