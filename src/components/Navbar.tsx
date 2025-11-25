import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "./NavLink";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/#about", label: "About" },
    { to: "/menu", label: "Menu" },
    { to: "/allergies", label: "Allergies" },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md shadow-medium border-b border-primary/20" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-3 group"
          >
            <div className="flex items-center justify-center w-20 h-20 overflow-hidden">
              <img 
                src="/images/stixs-logo.png" 
                alt="Stixs Asian Kitchen Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                Stixs
              </span>
              <span className="text-xs text-accent font-semibold tracking-wider">
                ASIAN KITCHEN
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to}>
                {link.label}
              </NavLink>
            ))}
            
            <Button 
              size="sm"
              className="bg-primary hover:bg-primary-light text-primary-foreground shadow-soft hover:shadow-medium transition-all"
              asChild
            >
              <a 
                href="https://www.ubereats.com/gb/store/stixs-asian-kitchen/S0ln4TDsXO62L7A0dAVCJA" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Order Now
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-primary/20 bg-background/95 backdrop-blur-md animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-lg text-foreground hover:text-primary transition-colors py-2"
                >
                  {link.label}
                </Link>
              ))}
              <Button 
                className="bg-primary hover:bg-primary-light text-primary-foreground w-full mt-2"
                asChild
              >
                <a 
                  href="https://www.ubereats.com/gb/store/stixs-asian-kitchen/S0ln4TDsXO62L7A0dAVCJA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Order Now
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
