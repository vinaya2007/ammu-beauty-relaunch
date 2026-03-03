import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import { Crown, Leaf, Scissors, Building2 } from "lucide-react";

const categories = ["All", "Bridal", "Herbal", "Hair", "Salon"];

const galleryItems = [
  { category: "Bridal", label: "Bridal Look 1", icon: Crown },
  { category: "Bridal", label: "Bridal Look 2", icon: Crown },
  { category: "Bridal", label: "Engagement Makeup", icon: Crown },
  { category: "Herbal", label: "Herbal Glow Facial", icon: Leaf },
  { category: "Herbal", label: "Brightening Treatment", icon: Leaf },
  { category: "Herbal", label: "Anti-aging Facial", icon: Leaf },
  { category: "Hair", label: "Bridal Hairstyle", icon: Scissors },
  { category: "Hair", label: "Hair Coloring", icon: Scissors },
  { category: "Salon", label: "Salon Interior", icon: Building2 },
  { category: "Salon", label: "Treatment Room", icon: Building2 },
  { category: "Bridal", label: "Reception Look", icon: Crown },
  { category: "Hair", label: "Hair Spa Session", icon: Scissors },
];

const Gallery = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? galleryItems : galleryItems.filter((g) => g.category === active);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-maroon-dark text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <h1 className="font-display text-3xl md:text-5xl font-bold">Our Gallery</h1>
            <p className="mt-4 text-primary-foreground/80 font-body text-lg">See our beauty transformations.</p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-full text-sm font-body font-medium transition-colors ${
                  active === cat ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:bg-muted"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((item, i) => (
              <FadeIn key={`${item.label}-${i}`} delay={i * 0.05}>
                <div className="relative rounded-xl overflow-hidden h-48 md:h-56 bg-gradient-to-br from-primary/10 to-accent/10 flex flex-col items-center justify-center gap-2 hover:shadow-lg transition-shadow">
                  <item.icon className="h-10 w-10 text-primary/30" />
                  <span className="font-body text-xs text-muted-foreground">{item.label}</span>
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

export default Gallery;
