import { Link, Button } from "@nextui-org/react";
import Spline from "@splinetool/react-spline";
import "./headerwithhero.css"

const HeaderWithHero = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="w-full h-[100vh] relative"
      style={{
        background: "url(./assets/herosectionbg.png)",
        backgroundSize: "100vmax",
        backgroundPosition: "bottom right",
        backgroundRepeat: "no-repeat",
      }}
    >
       <nav id="mainHeader" className="flex justify-between items-center z-40">
          <div className="flex justify-center items-center">
            <img
              className="w-[80px] invert"
              src="./assets/Comkar-logo.png"
              alt=""
            />
            <p className="font-bold text-[30px] text-white">COMKAR</p>
          </div>
          <div className="flex justify-between items-center w-[32%]">
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
      <Spline scene="https://prod.spline.design/fTmiNIeh0pXpnsY2/scene.splinecode" className="absolute z-30" />
      <div className="w-[90%] h-[90%] border-[0.5375em] border-white rounded-[5.375em] absolute top-[5%] left-[5%] z-10">
       
        {/* <div className="w-full h-[48%] flex justify-between items-start">
          {children}
          <div className="w-[50%] h-full">
          </div>
        </div> */}
      </div>
      <div
        className="w-[75%] h-[40%] absolute bottom-0 right-0 z-20"
        style={{
          background: "url(./assets/herosectionbg.png)",
          backgroundSize: "100vmax",
          backgroundPosition: "bottom right",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
};

export default HeaderWithHero;
