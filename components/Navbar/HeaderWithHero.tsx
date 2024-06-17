import React from "react";
import sdfd from "../../public/assets/herosectionbg.png"

const HeaderWithHero = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-[100vh] relative" style={{background: "url(./assets/herosectionbg.png)", backgroundSize: "100vmax", backgroundPosition: "bottom right", backgroundRepeat: "no-repeat"}}>

      <div className="w-[90%] h-[90%] border-[0.9375em] border-white rounded-[9.375em] absolute top-[5%] left-[5%] z-10"> 
        {children}
      </div>
      <div className="w-[75%] h-[40%] absolute bottom-0 right-0 z-20" style={{background: "url(./assets/herosectionbg.png)", backgroundSize: "100vmax", backgroundPosition: "bottom right", backgroundRepeat: "no-repeat"}}></div>
    </div>
  );
};

export default HeaderWithHero;
