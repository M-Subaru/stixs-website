import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";

export const Location = () => {
  const address = "117 Newgate Street, Newcastle upon Tyne, NE1 5RZ";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  const reservationUrl = "https://autoreserve.com/en/restaurants/pRaBmwCtq3suDu8UN3kQ";

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
              <span className="text-foreground">Find </span>
              <span className="bg-gradient-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent">
                Us
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
                      117 Newgate Street<br />
                      Newcastle upon Tyne<br />
                      NE1 5RZ
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
                      <p><strong>Monday:</strong> Closed</p>
                      <p><strong>Tue-Sun:</strong> 11:00 AM - 9:00 PM</p>
                      <p className="text-sm pt-1">Last orders: 8:30 PM</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 border-2 border-primary/20 flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-foreground mb-2">Contact</h3>
                    <div className="text-muted-foreground space-y-2">
                      <p>
                        <a href="tel:+447860363158" className="text-primary hover:underline font-semibold">
                          +44 7860 363158
                        </a>
                      </p>
                      <p>
                        <a href="mailto:Stixs828@gmail.com" className="text-primary hover:underline">
                          Stixs828@gmail.com
                        </a>
                      </p>
                      <p className="text-sm pt-1">
                        Collection available - call to order!
                      </p>
                    </div>
                  </div>
                </div>

                <Button 
                  className="w-full bg-primary hover:bg-primary-light text-primary-foreground shadow-medium hover:shadow-glow transition-all"
                  asChild
                >
                  <a href="https://www.google.com/maps/place/Stixs/@54.9732116,-1.6183628,20.34z/data=!4m6!3m5!1s0x487e71368ed66d79:0xc3ab42175f476a00!8m2!3d54.9732586!4d-1.618627!16s%2Fg%2F11svmm9xft?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
                    <Navigation className="mr-2 w-5 h-5" />
                    Get Directions
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Interactive Google Map */}
            <Card className="bg-background border-border overflow-hidden animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="relative h-[400px] md:h-full min-h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2290.8877856947545!2d-1.6169!3d54.9733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487e71368ed66d79%3A0xc3ab42175f476a00!2sStixs!5e0!3m2!1sen!2suk!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Stixs Asian Kitchen Location"
                  className="w-full h-full"
                />
              </div>
            </Card>

            {/* Reservations & Orders */}
            <Card className="bg-background border-border hover:border-accent/50 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-8 space-y-6 flex flex-col h-full">
                <div className="space-y-4 flex-grow">
                  <h3 className="font-display font-bold text-2xl text-foreground">
                    Reserve <span className="text-accent">&</span> Order
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Book your table, order collection by phone, or get delivery straight to your door.
                  </p>
                </div>

                <div className="space-y-3">
                  <Button 
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-medium hover:shadow-glow transition-all text-lg"
                    size="lg"
                    asChild
                  >
                    <a 
                      href={reservationUrl}
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Make a Reservation
                    </a>
                  </Button>

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
                      Delivery - Uber Eats
                    </a>
                  </Button>

                  <Button 
                    className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-soft hover:shadow-medium transition-all"
                    size="lg"
                    variant="outline"
                    asChild
                  >
                    <a 
                      href="https://deliveroo.co.uk/menu/newcastle/newcastle-city-centre/stixs-asian-kitchen" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Delivery - Deliveroo
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
