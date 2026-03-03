import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "We'll get back to you soon. Thank you!" });
    setForm({ name: "", phone: "", service: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-maroon-dark text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <h1 className="font-display text-3xl md:text-5xl font-bold">Contact Us</h1>
            <p className="mt-4 text-primary-foreground/80 font-body text-lg">We'd love to hear from you. Book your appointment today!</p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <FadeIn direction="left">
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">Get In Touch</h2>
                <div className="space-y-5 font-body">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Address</p>
                      <p className="text-muted-foreground text-sm">No. 217 A, Poondurai Main Road, Moolapalayam, Erode – 638002 (Near Jaycees Matriculation Higher Secondary School)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Phone</p>
                      <a href="tel:+919876543210" className="text-muted-foreground text-sm hover:text-accent transition-colors">+91 98765 43210</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Working Hours</p>
                      <p className="text-muted-foreground text-sm">9:00 AM – 8:00 PM (All Days)</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex gap-3">
                  <WhatsAppButton className="bg-accent text-accent-foreground hover:bg-accent/90">Book on WhatsApp</WhatsAppButton>
                  <Button variant="outline" asChild>
                    <a href="tel:+919876543210"><Phone className="h-4 w-4 mr-1" /> Call Now</a>
                  </Button>
                </div>

                <div className="mt-8 rounded-xl overflow-hidden">
                  <iframe
                    title="Ammu Beauty Care Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.5!2d77.73!3d11.34!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMoolapalayam%2C%20Erode!5e0!3m2!1sen!2sin!4v1"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </FadeIn>

            {/* Contact Form */}
            <FadeIn direction="right">
              <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="font-body text-sm font-medium text-foreground mb-1 block">Name</label>
                    <Input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="font-body text-sm font-medium text-foreground mb-1 block">Phone</label>
                    <Input
                      required
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label className="font-body text-sm font-medium text-foreground mb-1 block">Service Interest</label>
                    <Select value={form.service} onValueChange={(v) => setForm({ ...form, service: v })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bridal">Bridal Makeup</SelectItem>
                        <SelectItem value="herbal">Herbal Facial</SelectItem>
                        <SelectItem value="hair">Hair Services</SelectItem>
                        <SelectItem value="waxing">Waxing & Grooming</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="font-body text-sm font-medium text-foreground mb-1 block">Message</label>
                    <Textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Your message..."
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Send Message
                  </Button>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
