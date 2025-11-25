import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Flame, Sparkles, ChefHat } from "lucide-react";
import { Link } from "react-router-dom";

const featuredDishes = [
  {
    id: 1,
    name: "Korean Fried Chicken",
    description: "Crispy, golden chicken with your choice of sauce: Sweet Chili, Soy Garlic, or Spicy Yangnyeom",
    price: "£12.00",
    icon: ChefHat,
    highlight: "Customer Favourite",
    image: "/images/menu/korean-fried-chicken-5piece.jpg"
  },
  {
    id: 2,
    name: "Volcano Tonkotsu Ramen",
    description: "Rich pork bone broth with noodles, chashu pork, soft-boiled egg, and fiery chili oil",
    price: "£13.00",
    icon: Flame,
    highlight: "Spicy Special",
    image: "/images/menu/volcano-tonkotsu-ramen-broth.jpg"
  },
  {
    id: 3,
    name: "Katsudon with Tonkotsu",
    description: "Breaded pork cutlet on rice with egg, onions, and savory sauce",
    price: "£12.50",
    icon: Sparkles,
    highlight: "Classic Comfort",
    image: "/images/menu/katsudon-with-tonkotsu.jpg"
  },
  {
    id: 4,
    name: "Kimchi Fried Rice",
    description: "Spicy fermented kimchi with rice, vegetables, and topped with a fried egg",
    price: "£10.80",
    icon: Flame,
    highlight: "Bold & Tangy",
    image: "/images/menu/kimchi-fried-rice.jpg"
  }
];

export const FeaturedMenu = () => {
  return (
    <section id="featured-menu" className="py-20 md:py-32 bg-card relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-4">
            Our Signature Dishes
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">Featured </span>
            <span className="bg-gradient-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent">
              Menu
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Handcrafted with authentic Asian flavours and the freshest ingredients
          </p>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredDishes.map((dish, index) => {
            const Icon = dish.icon;
            return (
              <Card 
                key={dish.id} 
                className="group bg-background border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={dish.image} 
                      alt={dish.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Highlight Badge */}
                    <div className="absolute top-3 right-3">
                      <span className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-bold shadow-medium">
                        {dish.highlight}
                      </span>
                    </div>
                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-5 space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-display font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                        {dish.name}
                      </h3>
                      <span className="text-primary font-bold text-lg flex-shrink-0">
                        {dish.price}
                      </span>
                    </div>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {dish.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary-light text-primary-foreground shadow-medium hover:shadow-glow transition-all text-lg px-8 py-6"
            asChild
          >
            <Link to="/menu">
              View Full Menu
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
