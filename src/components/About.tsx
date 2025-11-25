import { Card } from "@/components/ui/card";
import { Flame, Heart, Award, Users } from "lucide-react";

const features = [
  {
    icon: Flame,
    title: "Authentic Flavours",
    description: "Traditional Korean, Japanese, and Asian fusion recipes crafted with passion"
  },
  {
    icon: Heart,
    title: "Fresh Ingredients",
    description: "Only the finest, freshest ingredients sourced daily for maximum quality"
  },
  {
    icon: Award,
    title: "Award Winning",
    description: "Recognized by locals and critics alike for exceptional Asian cuisine"
  },
  {
    icon: Users,
    title: "Community Loved",
    description: "Proud to serve Newcastle with bold, unforgettable Asian dishes"
  }
];

export const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="space-y-6 animate-fade-in-up">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold">
              About Us
            </span>
            
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-foreground">Bringing Authentic</span>
              <span className="block bg-gradient-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent mt-2">
                Asian Cuisine
              </span>
              <span className="block text-foreground mt-2">to Newcastle</span>
            </h2>

            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Located in the heart of Newcastle on <span className="text-foreground font-semibold">117 Newgate Street</span>, 
                Stixs brings you an exciting fusion of <span className="text-primary font-semibold">authentic Korean, Japanese and Taiwanese flavours</span>. 
                Our open-kitchen restaurant specialises in Korean fried chicken, 18-hour tonkotsu broth and street-food favourites.
              </p>
              
              <p>
                From crispy wings to volcano tonkotsu ramen and galbi kimchi rice bowls, every dish is 
                crafted with passion and fresh ingredients. Experience authentic Asian flavours in the heart of Newcastle.
              </p>

              <p className="text-primary font-semibold">
                Book a table, call for collection, or order delivery today!
              </p>
            </div>
          </div>

          {/* Right: Restaurant Image */}
          <div className="relative animate-fade-in-up">
            <div className="relative overflow-hidden rounded-2xl shadow-glow">
              <img 
                src={`${import.meta.env.BASE_URL}images/stixs-interior.jpg`}
                alt="Stixs Asian Kitchen Interior" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            
            {/* Features Grid Overlay */}
            <div className="absolute bottom-6 right-6 grid grid-cols-2 gap-4 max-w-sm">
              {features.slice(0, 2).map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card 
                    key={index}
                    className="p-4 bg-card/95 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-soft group"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 border border-primary/20">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-display font-bold text-sm text-foreground">
                        {feature.title}
                      </h3>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
