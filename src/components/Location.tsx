import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";

export const Location = () => {
  const address = "St Andrew's Street, Newcastle upon Tyne, NE1 5SE";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <section id="location" className="py-20 md:py-32 bg-card relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--accent)) 1px, transparent 0)',
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-4">
              Find Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-foreground">Visit or </span>
              <span className="bg-gradient-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent">
                Order Online
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Located in the heart of Newcastle upon Tyne
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Location Details */}
            <Card className="bg-background border-border hover:border-primary/50 transition-all duration-300 animate-fade-in-up">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 border-2 border-primary/20 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-foreground mb-2">Address</h3>
                    <p className="text-muted-foreground">
                      St Andrew's Street<br />
                      Newcastle upon Tyne<br />
                      NE1 5SE
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 border-2 border-accent/20 flex-shrink-0">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-foreground mb-2">Opening Hours</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Mon-Thu: 5:00 PM - 10:30 PM</p>
                      <p>Fri-Sat: 5:00 PM - 11:00 PM</p>
                      <p>Sunday: 5:00 PM - 10:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 border-2 border-primary/20 flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-foreground mb-2">Contact</h3>
                    <p className="text-muted-foreground">
                      Order via Uber Eats or Deliveroo<br />
                      <a href="https://autoreserve.com/en/restaurants/pRaBmwCtq3suDu8UN3kQ" 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="text-primary hover:underline">
                        Make a Reservation →
                      </a>
                    </p>
                  </div>
                </div>

                <Button 
                  className="w-full bg-primary hover:bg-primary-light text-primary-foreground shadow-medium hover:shadow-glow transition-all"
                  asChild
                >
                  <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                    <Navigation className="mr-2 w-5 h-5" />
                    Get Directions
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Order Online */}
            <Card className="bg-background border-border hover:border-accent/50 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-8 space-y-6 flex flex-col h-full">
                <div className="space-y-4 flex-grow">
                  <h3 className="font-display font-bold text-2xl text-foreground">
                    Order <span className="text-accent">Delivery</span>
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Get authentic Asian flavours delivered straight to your door. 
                    Order now through our delivery partners for quick and convenient service.
                  </p>
                </div>

                <div className="space-y-3">
                  <Button 
                    className="w-full bg-primary hover:bg-primary-light text-primary-foreground shadow-soft hover:shadow-medium transition-all"
                    size="lg"
                    asChild
                  >
                    <a 
                      href="https://www.ubereats.com/gb/store/stixs-asian-kitchen/S0ln4TDsXO62L7A0dAVCJA" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Order on Uber Eats
                    </a>
                  </Button>

                  <Button 
                    className="w-full border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground shadow-soft hover:shadow-medium transition-all"
                    size="lg"
                    variant="outline"
                    asChild
                  >
                    <a 
                      href="https://deliveroo.co.uk/menu/newcastle/newcastle-city-centre/stixs-asian-kitchen" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Order on Deliveroo
                    </a>
                  </Button>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground text-center">
                    Follow us on{" "}
                    <a 
                      href="https://www.instagram.com/stixsnewcastle/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-accent hover:underline font-semibold"
                    >
                      Instagram
                    </a>
                    {" "}and{" "}
                    <a 
                      href="https://www.facebook.com/p/Stixs-100041398282730/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline font-semibold"
                    >
                      Facebook
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
