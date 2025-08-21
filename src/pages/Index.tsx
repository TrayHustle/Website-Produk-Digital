import Hero from "@/components/Hero";
import Educational from "@/components/Educational";
import VideoSection from "@/components/VideoSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
// import ProductDetails from "@/components/ProductDetails";
import PricingSection from "@/components/PricingSection";
// import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Educational />
      <VideoSection />
      <ProblemSection />
      <SolutionSection />
      {/* <ProductDetails /> */}
      <PricingSection />
      {/* <FinalCTA /> */}
    </div>
  );
};

export default Index;
