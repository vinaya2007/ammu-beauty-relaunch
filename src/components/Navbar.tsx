import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/bridal-makeup", label: "Bridal Makeup" },
  { to: "/herbal-facials", label: "Herbal Facials" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/testimonials", label: "Reviews" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Reopening Banner */}
      <div className="bg-primary text-white text-center text-sm py-2 px-4 font-body tracking-wide">
        ✨ <span className="font-semibold">Now Reopened!</span> Ammu Beauty Care is back & better than ever — Book your appointment today! ✨
      </div>

      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-display text-xl md:text-2xl font-bold text-primary">
              Ammu <span className="text-accent">Beauty</span> Care
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 rounded-md text-sm font-medium font-body transition-colors hover:text-primary hover:bg-secondary ${
                  location.pathname === link.to ? "text-primary bg-secondary" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <Button variant="outline" size="sm" asChild>
              <a href="tel:+919876543210">
                <Phone className="h-4 w-4 mr-1" /> Call Now
              </a>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile nav */}
        {open && (
          <nav className="lg:hidden border-t border-border bg-card px-4 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={`block px-3 py-2.5 rounded-md text-sm font-medium font-body transition-colors hover:text-primary hover:bg-secondary ${
                  location.pathname === link.to ? "text-primary bg-secondary" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 flex gap-2">
              <Button variant="outline" size="sm" className="flex-1" asChild>
                <a href="tel:+919876543210">
                  <Phone className="h-4 w-4 mr-1" /> Call
                </a>
              </Button>
            </div>
          </nav>
        )}
      </header>
    </>
  );
};

export default Navbar;
