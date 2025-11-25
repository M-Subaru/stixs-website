import { Card, CardContent } from "@/components/ui/card";
import { Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const reviews = [
  {
    id: 1,
    name: "Local Guide",
    rating: 5,
    text: "This Korean-Japanese restaurant is such a great deal! The portions are huge, the flavors are delicious, and you definitely leave feeling full and satisfied. Totally worth a visit if you're hungry and love tasty food!",
    subtitle: "119 reviews",
    images: [
      "/images/reviews/localguide-review-image1.jpg",
      "/images/reviews/localguide-review-image2.jpg",
      "/images/reviews/localguide-review-image3.jpg"
    ]
  },
  {
    id: 2,
    name: "Cerys.G",
    rating: 5,
    text: "ABSOLUTELY AMAZING ASIAN FOOD! My friend and I had the Tteokbokki (no cheese), 3 Piece Fried chicken, Kimchi, Teriyaki Chicken Donburi, and Slow Braised Pork Donburi. The portions are big and well worth the price.",
    subtitle: "12 reviews",
    images: ["/images/reviews/carys-review-image.jpg"]
  },
  {
    id: 3,
    name: "Alejandra",
    rating: 5,
    text: "Really nice restaurant. The portions are large and very tasty. Their kimchi is delicious and the staff is very friendly. Highly recommend!",
    subtitle: "3 reviews",
    images: [
      "/images/reviews/alejandra-review-image1.jpg",
      "/images/reviews/alejandra-review-image2.jpg"
    ]
  }
];

export const Reviews = () => {
  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(hsl(var(--accent)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--accent)) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-4">
            Customer Reviews
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">What Our </span>
            <span className="bg-gradient-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent">
              Customers Say
            </span>
          </h2>
          <div className="flex items-center justify-center gap-4 text-lg text-muted-foreground">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 fill-accent text-accent" />
              <span className="font-bold text-foreground">4.4</span>
              <span>on Google</span>
            </div>
            <span>•</span>
            <span>136 reviews</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reviews.map((review, index) => (
            <Card 
              key={review.id} 
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow animate-fade-in-up flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 space-y-4 flex flex-col h-full">
                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-muted-foreground leading-relaxed italic min-h-[140px]">
                  "{review.text}"
                </p>

                {/* Reviewer Info */}
                <div>
                  <p className="font-bold text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.subtitle}</p>
                </div>

                {/* Review Images */}
                {review.images.length > 0 && (
                  <div className={review.images.length === 1 ? 'flex justify-center' : 'grid grid-cols-2 gap-2'}>
                    {review.images.map((image, idx) => (
                      <div 
                        key={idx} 
                        className={`relative aspect-square rounded-lg overflow-hidden ${review.images.length === 1 ? 'w-2/3' : ''}`}
                      >
                        <img 
                          src={image} 
                          alt={`Review by ${review.name}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary-light text-primary-foreground shadow-medium hover:shadow-glow transition-all text-lg px-8 py-6"
            asChild
          >
            <a 
              href="https://www.google.com/search?q=stixs+newcastle+reviews" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Read More Google Reviews
              <ExternalLink className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
