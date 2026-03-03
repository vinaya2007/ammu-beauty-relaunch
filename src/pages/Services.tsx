import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { Scissors, Sparkles } from "lucide-react";

const hairServices = [
  { title: "Haircut & Styling", price: "₹150+" },
  { title: "Hair Spa Treatment", price: "₹800+" },
  { title: "Hair Rebonding", price: "₹2,500+" },
  { title: "Hair Coloring", price: "₹500+" },
  { title: "Keratin Treatment", price: "₹3,000+" },
  { title: "Hair Straightening", price: "₹2,000+" },
];

const groomingServices = [
  { title: "Threading", price: "₹30+" },
  { title: "Full Body Waxing", price: "₹1,500+" },
  { title: "Arms & Legs Waxing", price: "₹300+" },
  { title: "Manicure", price: "₹300+" },
  { title: "Pedicure", price: "₹400+" },
  { title: "D-Tan Treatment", price: "₹500+" },
  { title: "Bleaching", price: "₹200+" },
  { title: "Clean-up", price: "₹300+" },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-maroon-dark text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <h1 className="font-display text-3xl md:text-5xl font-bold">All Services & Pricing</h1>
            <p className="mt-4 text-primary-foreground/80 font-body text-lg">Complete beauty care under one roof.</p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Hair */}
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <Scissors className="h-5 w-5 text-primary" />
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">Hair Services</h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-16">
            {hairServices.map((s, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <Card className="border-border hover:shadow-md transition-shadow">
                  <CardContent className="p-4 flex items-center justify-between">
                    <span className="font-body text-sm font-medium text-foreground">{s.title}</span>
                    <span className="font-body text-sm font-bold text-accent">{s.price}</span>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>

          {/* Waxing & Grooming */}
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-primary" />
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">Waxing & Grooming</h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {groomingServices.map((s, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <Card className="border-border hover:shadow-md transition-shadow">
                  <CardContent className="p-4 flex items-center justify-between">
                    <span className="font-body text-sm font-medium text-foreground">{s.title}</span>
                    <span className="font-body text-sm font-bold text-accent">{s.price}</span>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <div className="mt-12 text-center">
              <WhatsAppButton size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Book Any Service
              </WhatsAppButton>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
