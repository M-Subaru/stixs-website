import { Link } from "react-router-dom";
import { Facebook, Instagram, UtensilsCrossed } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-primary/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 border-2 border-primary/30 group-hover:border-primary transition-all">
                <UtensilsCrossed className="w-6 h-6 text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  Stixs
                </span>
                <span className="text-xs text-accent font-semibold tracking-wider">
                  ASIAN KITCHEN
                </span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground">
              Authentic Asian flavours in the heart of Newcastle upon Tyne.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-muted-foreground hover:text-primary transition-colors">
                  Full Menu
                </Link>
              </li>
              <li>
                <Link to="/allergies" className="text-muted-foreground hover:text-primary transition-colors">
                  Allergy Information
                </Link>
              </li>
              <li>
                <a 
                  href="https://autoreserve.com/en/restaurants/pRaBmwCtq3suDu8UN3kQ" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Make a Reservation
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-display font-bold text-foreground mb-4">Connect With Us</h3>
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">
                📍 St Andrew's Street<br />
                Newcastle upon Tyne, NE1 5SE
              </p>
              
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/p/Stixs-100041398282730/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 border-2 border-primary/20 hover:border-primary hover:bg-primary/20 transition-all"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-primary" />
                </a>
                <a
                  href="https://www.instagram.com/stixsnewcastle/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 border-2 border-accent/20 hover:border-accent hover:bg-accent/20 transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-accent" />
                </a>
              </div>

              <div className="pt-4 space-y-2">
                <a 
                  href="https://www.ubereats.com/gb/store/stixs-asian-kitchen/S0ln4TDsXO62L7A0dAVCJA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-sm text-primary hover:underline"
                >
                  Order on Uber Eats →
                </a>
                <a 
                  href="https://deliveroo.co.uk/menu/newcastle/newcastle-city-centre/stixs-asian-kitchen" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-sm text-accent hover:underline"
                >
                  Order on Deliveroo →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Stixs Asian Kitchen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
