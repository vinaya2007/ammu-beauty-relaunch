import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import StarRating from "@/components/StarRating";
import { Card, CardContent } from "@/components/ui/card";

const reviews = [
  { name: "Priya S.", rating: 5, text: "My bridal makeup was absolutely stunning! Everyone complimented me throughout the ceremony. Truly the best parlour in Moolapalayam.", category: "Bridal" },
  { name: "Kavitha R.", rating: 5, text: "The herbal facial gave my skin an incredible natural glow that lasted for days. Chemical-free and so relaxing! Will definitely come back.", category: "Herbal" },
  { name: "Meena D.", rating: 5, text: "Very clean and professional salon. The staff is so skilled and friendly. I've been coming here for years. Highly recommended!", category: "General" },
  { name: "Lakshmi V.", rating: 4, text: "Best bridal package in Erode. My engagement look was perfect. Worth every rupee! The hairstyling was exceptional.", category: "Bridal" },
  { name: "Deepa M.", rating: 5, text: "I tried their herbal acne treatment and the results are amazing. My skin has cleared up so much in just 3 sessions.", category: "Herbal" },
  { name: "Saranya K.", rating: 5, text: "The hair spa treatment was so relaxing and my hair felt incredible afterwards. The staff really knows what they're doing.", category: "Hair" },
  { name: "Anitha P.", rating: 5, text: "Reopened and even better than before! The salon looks beautiful and the services are top-notch. So happy they're back!", category: "General" },
  { name: "Revathi G.", rating: 4, text: "My daughter's reception makeup was absolutely gorgeous. Professional work and very patient with all our requests.", category: "Bridal" },
];

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-maroon-dark text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <h1 className="font-display text-3xl md:text-5xl font-bold">Customer Reviews</h1>
            <div className="mt-4 flex justify-center items-center gap-3">
              <StarRating rating={4.8} size={24} />
              <span className="text-primary-foreground/80 font-body">from 17 Reviews</span>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((r, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <Card className="h-full border-border hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <StarRating rating={r.rating} size={14} showText={false} />
                      <span className="text-xs font-body bg-secondary px-2 py-1 rounded-full text-muted-foreground">{r.category}</span>
                    </div>
                    <p className="text-muted-foreground font-body text-sm italic mb-4">"{r.text}"</p>
                    <p className="font-body font-semibold text-foreground text-sm">— {r.name}</p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;
