import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import WhyCultiva from "@/components/why-cultiva";
import Features from "@/components/features";
import HowItWorks from "@/components/how-it-works";
import Statistics from "@/components/statistics";
import AppPreview from "@/components/app-preview";
import Roadmap from "@/components/roadmap";
import Testimonials from "@/components/testimonials";
import FAQ from "@/components/faq";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <WhyCultiva />
      <Features />
      <HowItWorks />
      <Statistics />
      <AppPreview />
      <Roadmap />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
