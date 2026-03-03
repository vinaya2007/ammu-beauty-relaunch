import { Link } from "react-router-dom";
import { Crown, Leaf, Scissors, Sparkles, Heart, Star, MapPin, Users, Award, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StarRating from "@/components/StarRating";
import WhatsAppButton from "@/components/WhatsAppButton";
import FadeIn from "@/components/FadeIn";

const services = [
  { icon: Crown, title: "Premium Bridal Makeup", desc: "Stunning bridal looks with long-lasting professional products. Traditional & modern styles.", link: "/bridal-makeup" },
  { icon: Leaf, title: "Herbal Facials", desc: "Chemical-free, natural glow facials using pure herbal ingredients for all skin types.", link: "/herbal-facials" },
  { icon: Scissors, title: "Hair Styling & Treatments", desc: "Expert haircuts, spa treatments, rebonding, coloring & more.", link: "/services" },
  { icon: Sparkles, title: "Waxing & Hair Removal", desc: "Gentle, thorough waxing and threading for smooth, radiant skin.", link: "/services" },
  { icon: Heart, title: "Skin Care & Grooming", desc: "D-Tan, bleaching, manicure, pedicure & complete grooming packages.", link: "/services" },
];

const trustItems = [
  { icon: Star, label: "4.8 Star Rating" },
  { icon: Users, label: "17 Verified Reviews" },
  { icon: Crown, label: "Premium Bridal" },
  { icon: Leaf, label: "Herbal Treatments" },
  { icon: MapPin, label: "Poondurai Main Road" },
];

const testimonials = [
  { name: "Priya S.", text: "My bridal makeup was absolutely stunning! Everyone complimented me. Truly the best parlour in Moolapalayam.", rating: 5 },
  { name: "Kavitha R.", text: "The herbal facial gave my skin an incredible natural glow. Chemical-free and so relaxing!", rating: 5 },
  { name: "Meena D.", text: "Very clean and professional salon. The staff is so skilled and friendly. Highly recommended!", rating: 5 },
  { name: "Lakshmi V.", text: "Best bridal package in Erode. My engagement look was perfect. Worth every rupee!", rating: 4 },
];

const galleryItems = [
  { label: "Bridal Makeup", color: "from-primary/60" },
  { label: "Herbal Facials", color: "from-accent/60" },
  { label: "Salon Interior", color: "from-maroon-light/60" },
  { label: "Hair Styling", color: "from-primary/60" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-maroon-dark to-primary min-h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 py-20 relative z-10 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent border border-accent/30 px-4 py-1.5 rounded-full text-sm font-body font-semibold mb-6">
              <Sparkles className="h-4 w-4" /> Now Reopened!
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight max-w-4xl mx-auto">
              Moolapalayam's 4.8-Star Rated Ladies Parlour is <span className="text-accent">Back</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 font-body max-w-2xl mx-auto">
              Premium Bridal Makeup, Natural Herbal Facials & Expert Beauty Care on Poondurai Main Road.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="mt-4 flex justify-center">
              <StarRating rating={4.8} size={22} />
              <span className="ml-2 text-primary-foreground/70 text-sm font-body">from 17 Reviews</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppButton size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-base font-semibold px-8">
                Book Appointment on WhatsApp
              </WhatsAppButton>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base px-8">
                <Link to="/herbal-facials">Explore Herbal Facials</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {trustItems.map((item, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="flex items-center gap-2 text-muted-foreground font-body text-sm">
                  <item.icon className="h-5 w-5 text-accent" />
                  <span>{item.label}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Our Premium Services</h2>
              <p className="mt-3 text-muted-foreground font-body max-w-xl mx-auto">Expert beauty care designed to make you look and feel your absolute best.</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border bg-card">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                      <s.icon className="h-7 w-7 text-primary group-hover:text-accent transition-colors" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">{s.title}</h3>
                    <p className="text-muted-foreground font-body text-sm mb-4">{s.desc}</p>
                    <Button asChild variant="ghost" size="sm" className="text-primary hover:text-accent">
                      <Link to={s.link}>View Details →</Link>
                    </Button>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Herbal Facial Spotlight */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <FadeIn direction="left">
              <div className="bg-gradient-to-br from-accent/20 to-primary/10 rounded-2xl h-72 md:h-96 flex items-center justify-center">
                <Leaf className="h-24 w-24 text-accent/40" />
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div>
                <span className="text-accent font-body font-semibold text-sm uppercase tracking-wider">Our Speciality</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Natural Herbal Facials</h2>
                <ul className="space-y-3 font-body text-muted-foreground">
                  <li className="flex items-start gap-2"><Leaf className="h-5 w-5 text-accent shrink-0 mt-0.5" /> 100% natural herbal ingredients — no harsh chemicals</li>
                  <li className="flex items-start gap-2"><Sparkles className="h-5 w-5 text-accent shrink-0 mt-0.5" /> Visible natural glow after every session</li>
                  <li className="flex items-start gap-2"><Heart className="h-5 w-5 text-accent shrink-0 mt-0.5" /> Suitable for all skin types including sensitive skin</li>
                  <li className="flex items-start gap-2"><Star className="h-5 w-5 text-accent shrink-0 mt-0.5" /> Highly rated by our loyal customers</li>
                </ul>
                <div className="mt-6">
                  <WhatsAppButton message="Hi, I'd like to book a Herbal Facial at Ammu Beauty Care." className="bg-accent text-accent-foreground hover:bg-accent/90">
                    Book Herbal Facial Now
                  </WhatsAppButton>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Bridal Portfolio */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <FadeIn>
              <div>
                <span className="text-accent font-body font-semibold text-sm uppercase tracking-wider">Premium Service</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Bridal Makeup Excellence</h2>
                <p className="text-muted-foreground font-body mb-4">
                  Make your special day truly unforgettable with our premium bridal makeup services. We blend traditional elegance with modern trends for a look that's uniquely yours.
                </p>
                <p className="text-foreground font-body font-semibold text-lg mb-6">
                  Starting from <span className="text-accent">₹7,000+</span>
                </p>
                <WhatsAppButton message="Hi, I'd like to book a Bridal Makeup consultation at Ammu Beauty Care." className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Book Bridal Consultation
                </WhatsAppButton>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-gradient-to-br from-primary/20 to-accent/10 rounded-xl h-40 flex items-center justify-center">
                    <Crown className="h-10 w-10 text-primary/30" />
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">What Our Clients Say</h2>
              <div className="mt-3 flex justify-center items-center gap-2">
                <StarRating rating={4.8} size={20} />
                <span className="text-muted-foreground font-body text-sm">from 17 Reviews on JustDial</span>
              </div>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <Card className="bg-card border-border h-full">
                  <CardContent className="p-6">
                    <StarRating rating={t.rating} size={14} showText={false} />
                    <p className="mt-3 text-muted-foreground font-body text-sm italic">"{t.text}"</p>
                    <p className="mt-4 font-body font-semibold text-foreground text-sm">— {t.name}</p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Our Work</h2>
              <p className="mt-3 text-muted-foreground font-body">A glimpse of beauty transformations at Ammu Beauty Care.</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryItems.map((item, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="relative rounded-xl overflow-hidden h-48 md:h-64 bg-gradient-to-br from-primary/15 to-accent/10 flex items-end">
                  <div className={`absolute inset-0 bg-gradient-to-t ${item.color} to-transparent opacity-60`} />
                  <span className="relative z-10 p-4 font-display text-sm font-semibold text-foreground">{item.label}</span>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.3}>
            <div className="text-center mt-8">
              <Button asChild variant="outline" size="lg">
                <Link to="/gallery">View Full Gallery</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Relaunch CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-primary to-maroon-dark text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Ammu Beauty Care is Back</h2>
            <p className="font-body text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
              Book your appointment today and experience premium beauty care in Moolapalayam.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppButton size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-base font-semibold px-8">
                WhatsApp Booking
              </WhatsAppButton>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base px-8" asChild>
                <a href="tel:+919876543210">
                  <Phone className="mr-2 h-5 w-5" /> Call Now
                </a>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
