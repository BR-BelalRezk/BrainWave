import ButtonGradient from "../../public/assets/svg/ButtonGradient";
import Benefits from "../components/Benefits";
import Collaboration from "../components/Collaboration";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";

export default function App() {
  return (
    <>
      <main className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
      </main>
      <ButtonGradient />
    </>
  );
}
