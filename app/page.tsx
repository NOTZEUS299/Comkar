import Spline from "@splinetool/react-spline";
import HeaderWithHero from "@/components/Navbar/HeaderWithHero";
import CardTypeOne from "@/components/Cards/CardTypeOne/CardTypeOne";

export default function Home() {
  return (
    <main>
      <HeaderWithHero>
        <div id="heroSectionCardContainer"></div>
        <CardTypeOne width="15em" height="30em" active={true} />
      </HeaderWithHero>
    </main>
  );
}
