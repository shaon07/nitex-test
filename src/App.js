import HeroSection from "components/pages/Homepage/HeroSection";
import OurFeature from "components/pages/Homepage/OurFeature";
import Reward from "components/pages/Homepage/Reward";
import Testimonial from "components/pages/Homepage/Testimonial";
import WhyChooseUs from "components/pages/Homepage/WhyChooseus";
import Affiliate from "./components/pages/Homepage/Affiliate";

export default function App() {
  return (
    <div className={`homepage-wrapper`}>
    <HeroSection />
    <div className="container homepage-wrapper-block">
      <WhyChooseUs />
      <OurFeature />
      <Reward />
      <Affiliate />
      <Testimonial />
    </div>
  </div>
  )
}