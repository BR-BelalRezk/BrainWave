import ButtonGradient from "../../public/assets/svg/ButtonGradient";
import Benefits from "../components/Benefits";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function App() {
  return (
    <>
      <main className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
      </main>
      <ButtonGradient />
    </>
  );
}
