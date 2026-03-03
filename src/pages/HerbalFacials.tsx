import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Sparkles, Shield, Sun } from "lucide-react";

const facials = [
  { title: "Herbal Glow Facial", price: "₹600+", duration: "60 mins", desc: "Our signature facial using pure herbal extracts for an instant natural glow. Perfect for all skin types.", icon: Sparkles },
  { title: "Anti-aging Herbal Facial", price: "₹900+", duration: "75 mins", desc: "Natural ingredients that fight fine lines and wrinkles while nourishing mature skin deeply.", icon: Shield },
  { title: "Herbal Acne Treatment", price: "₹700+", duration: "60 mins", desc: "Gentle herbal formulation targeting acne and blemishes without harsh chemicals.", icon: Leaf },
  { title: "Natural Brightening Facial", price: "₹800+", duration: "90 mins", desc: "Premium brightening treatment using turmeric, saffron and natural extracts for radiant skin.", icon: Sun },
];

const HerbalFacials = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-maroon-dark text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <Leaf className="h-12 w-12 mx-auto mb-4 text-accent" />
            <h1 className="font-display text-3xl md:text-5xl font-bold">Natural Herbal Facials</h1>
            <p className="mt-4 text-primary-foreground/80 font-body text-lg max-w-2xl mx-auto">
              100% chemical-free facials using pure herbal ingredients for a natural, lasting glow.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {facials.map((f, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <Card className="h-full hover:shadow-lg transition-shadow border-border">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                        <f.icon className="h-6 w-6 text-accent" />
                      </div>
                      <span className="text-xs font-body bg-secondary px-3 py-1 rounded-full text-muted-foreground">{f.duration}</span>
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground">{f.title}</h3>
                    <p className="text-accent font-body font-bold text-lg mt-1">{f.price}</p>
                    <p className="text-muted-foreground font-body text-sm mt-2">{f.desc}</p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <div className="mt-16 bg-secondary rounded-2xl p-8 md:p-12 max-w-3xl mx-auto">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">Herbal vs Chemical Facials</h2>
              <div className="grid md:grid-cols-2 gap-6 font-body text-sm">
                <div>
                  <h4 className="font-semibold text-accent mb-2">✅ Herbal Facials</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Natural ingredients, no side effects</li>
                    <li>• Suitable for sensitive skin</li>
                    <li>• Long-term skin health improvement</li>
                    <li>• Gentle, nourishing treatment</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-destructive mb-2">⚠️ Chemical Facials</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Synthetic ingredients may cause reactions</li>
                    <li>• Not ideal for sensitive skin</li>
                    <li>• Temporary results, potential damage</li>
                    <li>• Can strip natural oils</li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 text-center">
                <WhatsAppButton message="Hi, I'd like to book a Herbal Facial at Ammu Beauty Care." size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Book Herbal Consultation
                </WhatsAppButton>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HerbalFacials;
