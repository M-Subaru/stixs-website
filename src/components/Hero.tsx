import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

export const Hero = () => {
  const reservationUrl = "https://autoreserve.com/en/restaurants/pRaBmwCtq3suDu8UN3kQ";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/stixs-hero.jpg" 
          alt="Stixs Asian Kitchen Newcastle storefront"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in-up">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Tagline */}
          <div className="inline-block px-6 py-3 rounded-full bg-primary/10 border-2 border-primary/30 backdrop-blur-sm">
            <span className="text-primary font-bold text-sm md:text-base tracking-wide">
              Authentic Korean, Japanese & Taiwanese Flavours in Newcastle
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            <span className="text-foreground">Stixs </span>
            <span className="bg-gradient-to-r from-primary via-accent to-primary-light bg-clip-text text-transparent">
              Asian Kitchen
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Located in the heart of Newcastle on Newgate Street
          </p>

          {/* CTA Buttons - Reservations Featured */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow hover:shadow-glow-lg transition-all text-lg px-10 py-7 h-auto font-bold"
              asChild
            >
              <a href={reservationUrl} target="_blank" rel="noopener noreferrer">
                <Calendar className="mr-2 w-6 h-6" />
                Reserve a Table
              </a>
            </Button>
            
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary-light text-primary-foreground shadow-medium hover:shadow-glow transition-all text-lg px-8 py-7 h-auto"
              asChild
            >
              <a href="https://www.ubereats.com/gb/store/stixs-asian-kitchen/S0ln4TDsXO62L7A0dAVCJA" target="_blank" rel="noopener noreferrer">
                Order Delivery
              </a>
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-foreground/20 text-foreground hover:bg-foreground/10 shadow-soft hover:shadow-medium transition-all text-lg px-8 py-7 h-auto backdrop-blur-sm"
              onClick={() => {
                const menuSection = document.getElementById('menu');
                if (menuSection) {
                  menuSection.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.href = '/menu';
                }
              }}
            >
              View Menu
            </Button>
          </div>

          {/* Quick Info */}
          <div className="pt-6 space-y-2 mb-16">
            <p className="text-muted-foreground">
              <a href="tel:+447860363158" className="hover:text-primary transition-colors">
                📞 +44 7860 363158
              </a>
              {" • "}
              <span>Collection Available</span>
            </p>
            <a 
              href="#location" 
              className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2 group"
            >
              <span>117 Newgate Street, Newcastle upon Tyne NE1 5RZ</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </div>

    </section>
  );
};
