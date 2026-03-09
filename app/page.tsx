import Hero from "./components/Hero";
import ProblemSolution from "./components/ProblemSolution";
import VisualFeatures from "./components/VisualFeatures";
import FooterCTA from "./components/FooterCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 font-sans text-zinc-900 selection:bg-orange-200 selection:text-orange-900">
      <Hero />
      <ProblemSolution />
      <VisualFeatures />
      <FooterCTA />
    </main>
  );
}
