import { Link } from "react-router-dom";
import { MapPin, Clock, Phone, Mail, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-3">
              Ammu <span className="text-accent">Beauty</span> Care
            </h3>
            <p className="text-primary-foreground/80 text-sm font-body leading-relaxed">
              Moolapalayam's trusted 4.8-star rated ladies parlour. Premium bridal makeup, herbal facials & expert beauty care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 font-body text-sm">
              {[
                { to: "/about", label: "About Us" },
                { to: "/bridal-makeup", label: "Bridal Makeup" },
                { to: "/herbal-facials", label: "Herbal Facials" },
                { to: "/services", label: "All Services" },
                { to: "/gallery", label: "Gallery" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-primary-foreground/80 hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-3">Contact</h4>
            <ul className="space-y-3 font-body text-sm text-primary-foreground/80">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
                <span>No. 217 A, Poondurai Main Road, Moolapalayam, Erode – 638002</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                <a href="tel:+919876543210" className="hover:text-accent transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0 text-accent" />
                <span>9:00 AM – 8:00 PM (All Days)</span>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-3">Find Us</h4>
            <div className="rounded-lg overflow-hidden">
              <iframe
                title="Ammu Beauty Care Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.5!2d77.73!3d11.34!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMoolapalayam%2C%20Erode!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="150"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-primary-foreground/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/60 font-body">
            © {new Date().getFullYear()} Ammu Beauty Care. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors" aria-label="Facebook">
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
