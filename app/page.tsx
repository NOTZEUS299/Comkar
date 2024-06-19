import Spline from "@splinetool/react-spline";
import HeaderWithHero from "@/components/Navbar/HeaderWithHero";
import CardTypeOne from "@/components/Cards/CardTypeOne/CardTypeOne";
import { Divider } from "@nextui-org/react";

export default function Home() {
  return (
    <main>
      <HeaderWithHero>
        <div
          id="heroSectionCardContainer"
          className="flex justify-evenly items-center w-[48em] h-auto"
        >
          <CardTypeOne width="15em" height="30em" active={true} />
          <div className="w-[0.25px] h-[30em] bg-white" />
          <CardTypeOne width="15em" height="30em" active={true} />
          <div className="w-[0.25px] h-[30em] bg-white" />
          <CardTypeOne width="15em" height="30em" active={true} />
        </div>
      </HeaderWithHero>
    </main>
  );
}
