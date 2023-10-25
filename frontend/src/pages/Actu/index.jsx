import React from "react";

const Actu = () => {
  return (
    <>
      <div>
        {/* BACKGROUND DE LA PAGE ENTIERE ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */}
        <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500">
          <div>
            <ul>
              <li>
                <div>
                  <button>
                    acceuil
                  </button>
                </div>
                <div></div>
                <div></div>
                <div></div>
              </li>
            </ul>
          </div>
          {/* BACKGROUND DE LA PAGE ENTIERE ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */}
          <h1 className="text-red-500 italic text-3xl bg-black">
            Place de la nav a ajt <br />
            Place de la nav a ajt
          </h1>
          <p className="bg-white">Place de la nav a ajt</p>
          <div className="flex justify-center text-white my-6 text-4xl">
            <h1>1 Jour, 1 manga </h1>
          </div>

          <div className="flex justify-center ">
            {/* BACKGROUND DU PREMIER BLOCK QUI ENGLOBE LES DIV  ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/}
            <div className="bg-black w-1/2  ">
              {/* BACKGROUND DU PREMIER BLOCK QUI ENGLOBE LES DIV  ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/}
              <div>
                <h4 className="text-white"> 1 Jour = 1 manga </h4>
              </div>
              <div>
                <div className="px-14">
                  <div className="bg-white mt-8 py-4 flex justify-center rounded-lg ">
                    MANGA DU JOUR
                  </div>
                  <div>
                    <img src="images/" />
                  </div>

                  <div className="bg-[#b43eeeda] mt-8  rounded-lg ">
                    hier le 23 octobre 2023
                  </div>

                  <div className=" bg-[#FBFBEB] rounded-lg mt-4 py-10">
                    <div className="grid grid-cols-2">
                      <div>
                        <p>image</p>
                      </div>
                      <div>
                        <h1>TITRE DU MANGA DU JOUR</h1>
                        <p>
                          c'est l'histoir de Lorem ipsum dolor sit amet
                          consectetur, adipisicing elit, in dolor ipsum aliquid
                          pariatur magnam recusandae amet fugit libero odio?
                          Pariatur, unde nihil...
                        </p>
                        <button className="text-red-300">en savoir plus</button>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#b43eeeda] mt-10 rounded-lg  ">
                    avant hier le 22 octobre 2023
                  </div>
                  <div className="bg-[#FBFBEB] rounded-lg mt-4 py-10">
                    <div className="grid grid-cols-2">
                      <div>
                        <p>image</p>
                      </div>
                      <div>
                        <h1>TITRE DU MANGA DU JOUR</h1>
                        <p>
                          c'est l'histoir de Lorem ipsum dolor sit amet
                          consectetur, adipisicing elit, in dolor ipsum aliquid
                          pariatur magnam recusandae amet fugit libero odio?
                          Pariatur, unde nihil...
                        </p>
                        <button className="text-red-300">en savoir plus</button>
                      </div>
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

export default Actu;
