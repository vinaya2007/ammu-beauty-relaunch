import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Is Ammu Beauty Care reopened?", a: "Yes! We are now fully reopened and back with refreshed interiors, updated techniques, and the same dedication to quality that earned us a 4.8-star rating. We're excited to welcome you!" },
  { q: "How can I book an appointment?", a: "You can book easily via WhatsApp by clicking the 'Book on WhatsApp' button on our website. You can also call us directly or visit our parlour on Poondurai Main Road, Moolapalayam." },
  { q: "Do you offer bridal makeup packages?", a: "Yes! We offer comprehensive bridal packages starting from ₹7,000, including bridal makeup, engagement makeup, reception makeup, and hairstyling. We also offer personalized bridal consultations and trial sessions." },
  { q: "What makes your herbal facials different?", a: "Our herbal facials use 100% natural ingredients — no harsh chemicals. They're suitable for all skin types including sensitive skin, and provide a natural, lasting glow without side effects. Treatments range from 45–90 minutes." },
  { q: "Where is Ammu Beauty Care located?", a: "We're located at No. 217 A, Poondurai Main Road, Moolapalayam, Erode – 638002, near Jaycees Matriculation Higher Secondary School. Easy to find and well-connected by road." },
  { q: "What are your working hours?", a: "We are open from 9:00 AM to 8:00 PM, all days of the week. We recommend booking appointments in advance for bridal and facial services." },
  { q: "Do you use branded products?", a: "Yes, we use premium professional-grade products for all our services. For bridal makeup, we use long-lasting HD and airbrush products. For facials, we use certified herbal and natural formulations." },
  { q: "Can I get a bridal trial before my wedding?", a: "Absolutely! We encourage all brides to book a trial session before their big day. This helps us understand your preferences and ensure the perfect look on your wedding day." },
];

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-maroon-dark text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <h1 className="font-display text-3xl md:text-5xl font-bold">Frequently Asked Questions</h1>
            <p className="mt-4 text-primary-foreground/80 font-body text-lg">Everything you need to know about Ammu Beauty Care.</p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <AccordionItem value={`item-${i}`} className="border border-border rounded-lg px-4 bg-card">
                  <AccordionTrigger className="font-display text-base font-semibold text-foreground hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="font-body text-muted-foreground text-sm">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              </FadeIn>
            ))}
          </Accordion>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
