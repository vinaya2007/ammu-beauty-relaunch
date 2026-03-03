import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { Crown, Sparkles, Heart, Star } from "lucide-react";

const bridalServices = [
  { title: "Bridal Makeup", price: "₹7,000 – ₹70,000+", desc: "Complete bridal look with HD/airbrush makeup, hairstyling, draping and jewellery setting. Traditional, modern or fusion styles.", icon: Crown },
  { title: "Engagement Makeup", price: "₹3,000+", desc: "Elegant, camera-ready look for your engagement ceremony. Light yet stunning.", icon: Sparkles },
  { title: "Reception Makeup", price: "₹4,000+", desc: "Glamorous evening look designed to stand out at your reception celebration.", icon: Star },
  { title: "Bridal Hairstyling", price: "₹1,500+", desc: "Intricate braids, buns, curls or modern styles to complement your bridal look perfectly.", icon: Heart },
];

const BridalMakeup = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-maroon-dark text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <Crown className="h-12 w-12 mx-auto mb-4 text-accent" />
            <h1 className="font-display text-3xl md:text-5xl font-bold">Premium Bridal Makeup</h1>
            <p className="mt-4 text-primary-foreground/80 font-body text-lg max-w-2xl mx-auto">
              Make your special day truly unforgettable with Moolapalayam's most trusted bridal makeup artists.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {bridalServices.map((s, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <Card className="h-full hover:shadow-lg transition-shadow border-border">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-4">
                      <s.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground">{s.title}</h3>
                    <p className="text-accent font-body font-bold text-lg mt-1">{s.price}</p>
                    <p className="text-muted-foreground font-body text-sm mt-2">{s.desc}</p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <div className="mt-16 bg-secondary rounded-2xl p-8 md:p-12 max-w-3xl mx-auto text-center">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">Why Choose Us for Your Big Day?</h2>
              <ul className="space-y-3 font-body text-muted-foreground text-left max-w-xl mx-auto">
                <li>✨ Long-lasting professional HD & airbrush products</li>
                <li>✨ Personalized one-on-one bridal consultation</li>
                <li>✨ Traditional South Indian & modern fusion looks</li>
                <li>✨ 4.8-star rated by brides across Erode</li>
                <li>✨ Trial session available before your big day</li>
              </ul>
              <div className="mt-8">
                <WhatsAppButton message="Hi, I'd like to book a Bridal Makeup consultation at Ammu Beauty Care." size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Book Bridal Appointment
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

export default BridalMakeup;
