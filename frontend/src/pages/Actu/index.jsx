import React from "react";

const Actu = () => {
  return (
    <>
      <div>
        {/* BACKGROUND DE LA PAGE ENTIERE ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */}
        <div className="bg-[#6B705C]">
          {/* BACKGROUND DE LA PAGE ENTIERE ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */}
          <h1 className="text-red-500 italic text-3xl bg-black">
            Place de la nav a ajt <br />
            Place de la nav a ajt
          </h1>
          <p className="bg-white">Place de la nav a ajt</p>
          <div className="flex justify-center text-white my-10 text-4xl">
            <h1>1 Jour, 1 manga </h1>
          </div>
          <div className="flex justify-center">
            {/* BACKGROUND DU PREMIER BLOCK QUI ENGLOBE LES DIV  ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/}
            <div className="bg-[#A5A58D] w-3/4  ">
              {/* BACKGROUND DU PREMIER BLOCK QUI ENGLOBE LES DIV  ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/}
              <div>
                <div className="grid grid-cols-2 ">
                  <div>
                    <div className="bg-[#CB997E] mt-8 flex justify-center  rounded-lg mx-4">
                      aujourd'hui le 23 octobre 2023
                    </div>

                    <div className=" bg-[#FBFBEB] rounded-lg mt-4 mx-4">
                      <div className="grid grid-cols-2">
                        <div>
                          <p>image</p>
                        </div>
                        <div>
                          <h1>TITRE DU MANGA DU JOUR</h1>
                          <p>
                            c'est l'histoir de Lorem ipsum dolor sit amet
                            consectetur, adipisicing elit, in dolor ipsum
                            aliquid pariatur magnam recusandae amet fugit libero
                            odio? Pariatur, unde nihil...
                          </p>
                          <button className="text-red-300">
                            en savoir plus
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="bg-[#CB997E] mt-10 rounded-lg mx-4 flex justify-center">
                      hier le 22 octobre 2023
                    </div>
                    <div className="bg-[#FBFBEB] rounded-lg mt-4 mx-4">
                      <div className="grid grid-cols-2">
                        <div>
                          <p>image</p>
                        </div>
                        <div>
                          <h1>TITRE DU MANGA DU JOUR</h1>
                          <p>
                            c'est l'histoir de Lorem ipsum dolor sit amet
                            consectetur, adipisicing elit, in dolor ipsum
                            aliquid pariatur magnam recusandae amet fugit libero
                            odio? Pariatur, unde nihil...
                          </p>
                          <button className="text-red-300">
                            en savoir plus
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-white w-3/4 ">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Maiores sunt distinctio voluptate iusto vero maxime unde
                      voluptates porro dolores saepe, hic exercitationem. Sunt
                      fugit quo consequuntur cupiditate quasi similique
                      blanditiis?
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center my-24">
                <div className="bg-[#CB997E]  w-3/4 ">
                  <p>
                    Lorem ipsum dolor sit amet, <br />
                    consectetur adipisicing elit. Nesciunt dolorum molestias{" "}
                    <br />
                    alias iure quasi est eum quia voluptatum? Est, in dolorum{" "}
                    <br />
                    aperiam autem iure repudiandae <br />
                    rerum molestiae totam laboriosam <br />
                    aliquid? <br />
                    Lorem ipsum dolor sit amet, <br />
                    consectetur adipisicing elit. Nesciunt dolorum molestias{" "}
                    <br />
                    alias iure quasi est eum quia voluptatum? Est, in dolorum{" "}
                    <br />
                    aperiam autem iure repudiandae <br />
                    rerum molestiae totam laboriosam <br />
                    aliquid?
                  </p>
                </div>
              </div>
              <div className="flex justify-center my-24 9/10">
                <div className="bg-[#CB997E] ">
                  <h1>ICI SERA LE FOOTER </h1>
                  <p>ICI SERA LE FOOTER</p>
                  <p>ICI SERA LE FOOTER</p>
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
