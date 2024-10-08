"use client";

import { Link, Button } from "@nextui-org/react";
import Spline from "@splinetool/react-spline";
import Calendar from "../Calendar/Calendar";
import Clock from "../Clock/Clock";
import "./headerwithhero.css";
import useGeolocation from "react-hook-geolocation";

const HeaderWithHero = ({children}: { children: React.ReactNode }) => {
  // try {
  //   fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${geolocation?.latitude}&longitude=${geolocation?.longitude}&localityLanguage=en`)
  //     .then((response) => response.json())
  //     .then((json) => console.log(json));
  // } catch (error) {
  //   console.log(error);
  // }

  const geolocation = useGeolocation();
  console.log(geolocation);



  return (
    <div
      className="w-full h-[100vh] relative flex justify-center items-center"
      style={{
        background: "url(./assets/herosectionbg.png)",
        backgroundSize: "100vmax",
        backgroundPosition: "bottom right",
        backgroundRepeat: "no-repeat",
      }}
    >
      ``
      <nav id="mainHeader" className="flex justify-between items-center z-40">
        <div className="flex justify-center items-center">
          <img
            className="w-[80px] invert"
            src="./assets/Comkar-logo.png"
            alt=""
          />
          <p className="font-bold text-[30px] text-white">COMKAR</p>
        </div>
        <div className="flex justify-between items-center w-[30%]">
          <Link id="headerLinks" className="text-white" href="#">
            Mission
          </Link>
          <Link id="headerLinks" className="text-white" href="#">
            Overview
          </Link>
          <Link id="headerLinks" className="text-white" href="#">
            Annotations
          </Link>
          <Button as={Link} className="text-white" href="#" variant="flat">
            Sign In
          </Button>
        </div>
      </nav>
      <Spline
        scene="https://prod.spline.design/fTmiNIeh0pXpnsY2/scene.splinecode"
        className="absolute z-30"
      />
      <div className="w-[90%] h-[90%] border-[0.5375em] border-white rounded-[5.375em]">
        <div className="w-full h-[100%] flex justify-between items-start rounded-[4.5em]">
          <div className="w-[50%] h-[85%] rounded-[4.5em] absolute z-40 flex justify-center items-center">
            {children}
          </div>
        </div>
      </div>
      <div
        className="w-[75%] h-[40%] flex justify-center items-center absolute bottom-0 right-0 z-20"
        style={{
          background: "url(./assets/herosectionbg.png)",
          backgroundSize: "100vmax",
          backgroundPosition: "bottom right",
          backgroundRepeat: "no-repeat",
          borderRadius: "85% 0 0 0",
        }}
      >
        <div
          id="time-date-and-calendar-container"
          className="w-auto h-[70%] absolute right-0 z-40"
        >
          <div id="TimeNDate-container">
            <Clock />
          </div>
          <div id="Calendar-container">
            <Calendar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderWithHero;
