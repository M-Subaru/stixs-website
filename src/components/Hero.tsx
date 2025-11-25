import { Button } from "@/components/ui/button";
import { ArrowRight, UtensilsCrossed } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-card">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 border-2 border-primary/20 mb-4">
            <UtensilsCrossed className="w-10 h-10 text-primary" />
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            <span className="block text-foreground mb-2">Authentic</span>
            <span className="block bg-gradient-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent">
              Asian Flavours
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Korean fried chicken, volcano ramen, katsudon & more.
            <span className="block mt-2 text-primary font-semibold">Fresh. Bold. Unforgettable.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-light text-primary-foreground shadow-medium hover:shadow-glow transition-all text-lg px-8 py-6 group"
              asChild
            >
              <a 
                href="https://www.ubereats.com/gb/store/stixs-asian-kitchen/S0ln4TDsXO62L7A0dAVCJA" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Order on Uber Eats
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground shadow-soft hover:shadow-medium transition-all text-lg px-8 py-6 group"
              asChild
            >
              <a 
                href="https://deliveroo.co.uk/menu/newcastle/newcastle-city-centre/stixs-asian-kitchen" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Order on Deliveroo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>

          {/* Secondary Actions */}
          <div className="flex flex-wrap gap-6 justify-center pt-4 text-sm text-muted-foreground">
            <Link to="/menu" className="hover:text-primary transition-colors flex items-center gap-2">
              <span>View Full Menu</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/allergies" className="hover:text-accent transition-colors flex items-center gap-2">
              <span>Allergy Information</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Location Badge */}
          <div className="pt-8">
            <p className="text-sm text-muted-foreground">
              📍 <span className="text-foreground font-semibold">St Andrew's Street, Newcastle upon Tyne</span>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path 
            d="M0 0L60 10C120 20 240 40 360 45C480 50 600 40 720 35C840 30 960 30 1080 35C1200 40 1320 50 1380 55L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" 
            fill="hsl(var(--card))"
            fillOpacity="0.3"
          />
        </svg>
      </div>
    </section>
  );
};
