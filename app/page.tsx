import HeaderWithHero from "@/components/Navbar/HeaderWithHero";

export default function Home() {
  return (
    <main>
      <HeaderWithHero>
        <div>
          <div
            id="heroSectionCardContainer"
            className="flex justify-evenly items-center w-[33em] h-auto"
          >
            <div
              id="parent-card"
              className="w-[10em] h-[20em] rounded-large bg-black"
            ></div>
            <div
              id="parent-card"
              className="w-[10em] h-[20em] rounded-large bg-black"
            ></div>
            <div
              id="parent-card"
              className="w-[10em] h-[20em] rounded-large bg-black"
            ></div>
          </div>
          <h2 className="text-white text-[3.25em] text-center leading-[1.2em] font-montserrat drop-shadow-2xl" id="routine-simplified">Routine Simplified</h2>
        </div>
      </HeaderWithHero>
    </main>
  );
}
