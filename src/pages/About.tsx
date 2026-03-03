import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import StarRating from "@/components/StarRating";
import { Heart, Leaf, Award, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-maroon-dark text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <h1 className="font-display text-3xl md:text-5xl font-bold">About Ammu Beauty Care</h1>
            <p className="mt-4 text-primary-foreground/80 font-body text-lg max-w-2xl mx-auto">
              A story of passion, herbal beauty, and a community's love.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn>
            <div className="text-center mb-8">
              <StarRating rating={4.8} size={24} />
              <p className="text-muted-foreground font-body mt-1">4.8 Stars on JustDial · 17 Reviews</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="prose prose-lg mx-auto font-body text-muted-foreground space-y-6">
              <p>
                Ammu Beauty Care has been a beloved name in Moolapalayam, Erode, known for its exceptional beauty services and warm, personal touch. Located on Poondurai Main Road near Jaycees Matriculation Higher Secondary School, our parlour has earned the trust of women across the community.
              </p>
              <p>
                Our philosophy has always been rooted in <strong className="text-foreground">natural, herbal beauty care</strong>. We believe that true beauty comes from within, and our treatments are designed to nourish your skin and hair with the finest natural ingredients — free from harsh chemicals.
              </p>
              <p>
                With a 4.8-star rating on JustDial and 17 verified reviews, our reputation speaks for itself. From premium bridal makeup that makes your special day unforgettable, to soothing herbal facials that give you a natural glow, every service is delivered with skill, care, and attention to detail.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-12 bg-secondary rounded-2xl p-8 text-center">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">Back & Better Than Ever</h2>
              <p className="text-muted-foreground font-body max-w-xl mx-auto">
                After a brief pause, Ammu Beauty Care has reopened with refreshed interiors, updated techniques, and the same dedication to making every woman feel beautiful. We're excited to welcome you back!
              </p>
            </div>
          </FadeIn>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Heart, label: "Passion for Beauty" },
              { icon: Leaf, label: "Herbal & Natural" },
              { icon: Award, label: "4.8-Star Rated" },
              { icon: Users, label: "Community Trusted" },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-secondary flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-accent" />
                  </div>
                  <p className="font-body text-sm font-medium text-foreground">{item.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
