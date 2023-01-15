import { CallToAction } from "../components/CallToAction";

const HeroSection = () => {
  return (
    <section className="container mx-auto px-9">
      <h1 className="text-6xl font-bold">
        React
        <span className="gradient-1"> Wiki</span>
      </h1>
      <div className="flex gap-x-6 my-8">
        <CallToAction text="Full list" color="color-1" href="#about" />
        <CallToAction text="By difficulty" color="color-1" href="#about" />
      </div>
    </section>
  );
};

export { HeroSection };
