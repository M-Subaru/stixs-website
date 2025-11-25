import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Flame } from "lucide-react";
import { motion } from "framer-motion";

const menuSections = [
  {
    title: "Korean Fried Chicken 地道韓式炸雞",
    items: [
      { name: "Chicken wings 5 pieces 韓式雞翼 5隻", description: "Crispy fried wings with Korean glaze choice", price: "£7.80", popular: true, image: `${import.meta.env.BASE_URL}images/menu/korean-fried-chicken-wings-5piece.jpg` },
      { name: "Chicken wings 7 pieces 韓式雞翼 7隻", description: "Larger portion – same great glaze choice", price: "£9.50", popular: true, image: `${import.meta.env.BASE_URL}images/menu/korean-fried-chicken-wings-7piece.jpg` },
      { name: "Chicken wings 16 pieces 韓式雞翼 16隻", description: "Party size wings", price: "£20.80" },
      { name: "Chicken pieces 3 韓式雞塊 3塊", description: "Boneless bites – Popular", price: "£8.50" },
      { name: "Chicken pieces 5 韓式雞塊 5塊", description: "Boneless bites – bigger portion", price: "£12.00", popular: true, image: `${import.meta.env.BASE_URL}images/menu/korean-fried-chicken-5piece.jpg` },
      { name: "Chicken pieces 10 韓式雞塊 10塊", description: "Party size boneless bites", price: "£23.00" },
    ]
  },
  {
    title: "Bao Buns & Dumplings (2 Pieces) 刈包(2 件）",
    items: [
      { name: "Traditional Taiwanese Bao Buns 傳統台式刈包", description: "Slow-cooked belly pork, pickled mustard, crushed peanuts", price: "£9.50", popular: true },
      { name: "Katsu Chicken Bao Buns 日式吉列刈包", description: "Panko katsu, sriracha mayo, lettuce", price: "£9.50" },
      { name: "Korean Fried Chicken Bao Buns 韓式炸雞扒刈包", description: "Sweet & spicy Korean hot sauce, lettuce", price: "£10.00", spicy: true },
      { name: "Kimchi & Pulled Pork Bao Buns 韓式泡菜豬肉刈包", description: "House kimchi, pulled pork, gochujang mayo", price: "£10.00", spicy: true },
      { name: "Teriyaki Chicken Bao Bun 日式照燒雞刈包", description: "Grilled teriyaki chicken, lettuce, sesame", price: "£10.50" },
      { name: "Pan Fried Kimchi Pork Dumplings (6) 韓式泡菜豬肉煎餃子", description: "Crispy bottom, spicy kimchi & pork filling", price: "£8.50", spicy: true },
    ]
  },
  {
    title: "Small Plate 前菜",
    items: [
      { name: "Tteokbokki 韓式辣炒年糕", description: "Spicy stir-fried rice cake with cabbage & fish cake", price: "£8.00", spicy: true, popular: true },
      { name: "Takoyaki 日本章魚燒", description: "Octopus balls with aonori, tafuku sauce & mayo", price: "£7.80", image: `${import.meta.env.BASE_URL}images/menu/takoyaki-plate.jpg` },
      { name: "Prawn Toast with Salted Duck Egg 金沙咸蛋蝦多士", description: "Golden prawn toast tossed in salted egg crumble", price: "£9.50" },
      { name: "Korean Com Cheese 韓式烤芝士粟米", description: "Mozzarella on sweetcorn, gochujang, spring onion", price: "£8.50" },
      { name: "Chicken & Cheese Spring Roll (3) 雞柳芝士春卷", description: "Crispy rolls filled with chicken & mozzarella", price: "£7.50" },
      { name: "Deep Fried Chicken Wings (7) 金沙咸蛋雞翅膀", description: "Wings tossed with salted duck egg yolk crumble", price: "£12.00" },
    ]
  },
  {
    title: "Taiwanese Noodle / Rice 台式麵飯",
    items: [
      { name: "Braised Mixed Spice Pork Belly Rice 台灣滷肉飯", description: "Lu-rou: slow-braised pork belly on rice with pickled radish", price: "£11.80", popular: true },
      { name: "Taiwanese Beef Noodle Soup 台灣牛肉麵", description: "Tender beef, handmade noodles, bok choy, pickled mustard in rich broth", price: "£14.00", image: `${import.meta.env.BASE_URL}images/menu/taiwanese-beef-broth.jpg` },
    ]
  },
  {
    title: "Korean Rice / Noodles & Meat 韓式炒飯,拌飯, 肉類",
    items: [
      { name: "Galbi with Kimchi Rice Bowl 韓式烤牛小排泡菜飯", description: "Grilled beef short ribs on kimchi fried rice, sesame, spring onion", price: "£14.00", spicy: true, popular: true, image: `${import.meta.env.BASE_URL}images/menu/galbi-kimchi-rice-bowl.jpg` },
      { name: "Kimchi Fried Rice with Fried Egg 韓式泡菜炒飯", description: "Spicy kimchi rice topped with sunny-side-up egg", price: "£10.80", spicy: true, popular: true, image: `${import.meta.env.BASE_URL}images/menu/kimchi-fried-rice.jpg` },
      { name: "Kimchi Fried Rice with Bacon & Fried Egg 韓式泡菜豬肉炒飯", description: "House kimchi, bacon lardons, fried egg", price: "£11.80", spicy: true },
      { name: "Kimchi Jjigae 韓式辣泡菜燉五花腩", description: "Kimchi stew with belly pork & tofu, served with rice", price: "£13.50", spicy: true },
      { name: "Japchae 韓式蔬菜拌冬粉", description: "Glass noodles stir-fried with mixed vegetables & sesame", price: "£10.90" },
      { name: "Ojingeo-bokkeum 辣炒魷魚", description: "Korean spicy stir-fried squid with vegetables", price: "£15.00", spicy: true },
      { name: "Soegogi-muguk 韓式牛肋骨湯", description: "Beef ribs & radish soup", price: "£10.90" },
    ]
  },
  {
    title: "Vietnamese Beef Pho 越南牛肉湯河粉",
    subtitle: "Flat rice noodles with mint leaves, beansprout, chilli, coriander, lime & fish sauce",
    items: [
      { name: "Slow Cooked Beef Shin Pho 慢煮牛腱", description: "Tender slow-cooked beef shin in rich broth", price: "£14.50" },
      { name: "Raw Sliced Beef Pho 生牛肉", description: "Rare beef slices poached in hot broth at table", price: "£13.00" },
    ]
  },
  {
    title: "Ramen 拉麵",
    items: [
      { name: "Tonkotsu Ramen Broth 日式豬骨湯拉麵", description: "BBQ pork belly on top of ramen in a rich 18-hour pork broth topped with ajitsuke tamago, kikurage, mushrooms, spring onions, sesame and nori seaweed", price: "£12.50", popular: true, image: `${import.meta.env.BASE_URL}images/menu/tonkotsu-ramen-broth.jpg` },
      { name: "Volcano Tonkotsu Ramen Broth 火焰日式豬骨湯拉麵", description: "BBQ pork belly on top of ramen in super-spicy pork broth topped with ajitsuke tamago, kikurage, mushrooms, spring onions, sesame and nori seaweed", price: "£13.00", spicy: true, popular: true, image: `${import.meta.env.BASE_URL}images/menu/volcano-tonkotsu-ramen-broth.jpg` },
      { name: "Shoyu Soy Ramen Broth 日式醬油拉麵", description: "Chicken karaage on top of ramen in chicken broth topped with ajitsuke tamago, kikurage, mushrooms, spring onions, sesame and nori seaweed", price: "£12.50" },
      { name: "Miso Soybean Ramen Broth with Marinated Grilled Miso Salmon 日式味噌拉麵配烤味噌三文魚扒", description: "Miso marinated salmon on top of ramen in chicken broth topped with ajitsuke tamago, kikurage, mushrooms, spring onions, sesame and nori seaweed", price: "£15.50" },
      { name: "Vegan Miso Ramen Topped with Bean Curd 蔬菜味噌拉麵配豆腐", description: "Bean curd topped with kikurage, mushrooms, spring onions, sesame and nori seaweed", price: "£12.50" },
      { name: "Shoyu Ramen Topped with Vegetable Dumplings 醬油拉麵配蔬菜餃子", description: "Vegetable dumplings, topped with kikurage, mushrooms, spring onions, sesame and nori seaweed", price: "£12.50" },
    ]
  },
  {
    title: "Donburi (Japanese Rice Bowl) 日式丼飯",
    items: [
      { name: "Gyudon Sliced Beef Rice Bowl 日式牛丼飯", description: "Thinly sliced beef & onion simmered in dashi-soy sauce on rice", price: "£11.80", popular: true },
      { name: "Katsu Chicken Curry 日式咖喱吉列雞扒飯", description: "Deep-fried panko chicken, Japanese curry sauce, rice, pickles", price: "£11.80" },
      { name: "Katsudon with Katsu Chicken 日式洋蔥滑蛋吉列雞扒飯", description: "Panko chicken, onions & egg simmered in sweet-savoury sauce on rice", price: "£12.50" },
      { name: "Teriyaki Chicken Rice Bowl 日式照燒雞扒飯", description: "Grilled teriyaki chicken thigh, steamed rice, sesame, spring onion", price: "£11.80", popular: true },
      { name: "Slow-braised Belly Pork 日式叉燒飯", description: "House chashu slices, rice, pickles, spring onion", price: "£11.80" },
      { name: "Katsudon with Tonkotsu (Pork) 日式洋蔥滑蛋吉列豬扒飯", description: "Panko pork cutlet, onions & egg simmered in sweet-savoury sauce on rice", price: "£12.50", popular: true, image: `${import.meta.env.BASE_URL}images/menu/katsudon-with-tonkotsu.jpg` },
      { name: "Tonkatsu 日式吉列豬扒飯", description: "Panko pork loin, cabbage slaw, tonkatsu fruit sauce, rice", price: "£11.80" },
      { name: "Katsu Pork Loin Curry 日式咖喱吉列豬扒飯", description: "Deep-fried panko pork, Japanese curry sauce, rice", price: "£12.50" },
    ]
  },
  {
    title: "Sides 小菜",
    items: [
      { name: "Shichimi Spiced Fries 七味粉薯條", description: "Crispy fries tossed with Japanese seven-spice", price: "£5.00", spicy: true },
      { name: "French Fries 薯條", description: "Classic crispy fries", price: "£4.50" },
      { name: "Sushi Rice 壽司飯", description: "Seasoned short-grain rice", price: "£3.90" },
      { name: "Edamame 毛豆", description: "Steamed green soybeans with sea salt", price: "£5.90" },
      { name: "Shichimi Spiced Edamame 七味粉毛豆", description: "Steamed edamame tossed with seven-spice", price: "£6.50", spicy: true },
    ]
  },
  {
    title: "Cold Side Dish 冷盤",
    items: [
      { name: "Pickled Cucumber 酸辣黄瓜", description: "Sliced cucumber in spicy garlic tangy sauce", price: "£4.50", spicy: true },
      { name: "Sweet White Radish 酸甜醃蘿蔔", description: "Daikon pickles, sweet & sour", price: "£4.50" },
      { name: "Kimchi (cabbage) 韓國泡菜", description: "Fermented napa cabbage & chilli", price: "£4.50", spicy: true },
      { name: "Bean sprout with sesame oil 韓式麻油涼拌芽菜", description: "Blanched bean sprouts, sesame oil, spring onion", price: "£4.50" },
    ]
  },
  {
    title: "Non-Alcohol 無酒精飲料",
    items: [
      { name: "Korean Milkis 牛奶碳酸飲料", description: "Korean carbonated milk drink", price: "£4.20" },
      { name: "Korean Sparkling Watermelon 西瓜有汽水", description: "Watermelon flavoured sparkling drink", price: "£3.50" },
      { name: "Korean Sparkling Mango 芒果有汽水", description: "Mango flavoured sparkling drink", price: "£3.50" },
      { name: "Coca Cola bottle 可樂/瓶", description: "Glass bottle", price: "£3.30" },
      { name: "Diet Coke bottle 健怡可樂/瓶", description: "Glass bottle", price: "£3.30" },
      { name: "Still Mineral Water 水/瓶", description: "Still water", price: "£1.95" },
      { name: "Aloe Vera original 蘆薈汁原味", description: "Korean aloe drink with pulp", price: "£4.20" },
      { name: "Rice milk 韓國米奶", description: "Korean rice milk drink", price: "£4.20" },
      { name: "Korean plum drinks 梅子飲料", description: "Sweet plum tea drink", price: "£4.20" },
    ]
  },
];

const Menu = () => {
  const handleDownloadMenu = () => {
    window.open("https://www.ubereats.com/gb/store/stixs-asian-kitchen/S0ln4TDsXO62L7A0dAVCJA", "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4 py-12 text-center"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-4">
            Our Full Menu
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">Authentic </span>
            <span className="bg-gradient-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent">
              Asian Cuisine
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Korean, Japanese & Taiwanese flavours crafted with passion. All dishes prepared fresh daily.
          </p>
          
          <Button 
            size="lg"
            onClick={handleDownloadMenu}
            className="bg-primary hover:bg-primary-light text-primary-foreground shadow-medium hover:shadow-glow transition-all"
          >
            Order on Uber Eats
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.section>

        {/* Menu Sections */}
        <div className="container mx-auto px-4">
          {menuSections.map((section, sectionIndex) => (
            <motion.section
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
              className="mb-16"
            >
              <div className="mb-8">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2 border-l-4 border-primary pl-4">
                  {section.title}
                </h2>
                {section.subtitle && (
                  <p className="text-muted-foreground pl-6">{section.subtitle}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.items.map((item, itemIndex) => (
                  <motion.div
                    key={`${item.name}-${itemIndex}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: itemIndex * 0.05 }}
                  >
                    <Card className="h-full bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-soft group overflow-hidden">
                      {/* Image or Placeholder */}
                      {item.image ? (
                        <div className="relative w-full h-48 overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ) : (
                        <div className="relative w-full h-48 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                          <span className="text-muted-foreground/50 text-sm">Image coming soon</span>
                        </div>
                      )}
                      
                      <div className="p-6">
                        <div className="flex items-start justify-between gap-2 mb-3">
                          <h3 className="font-display font-bold text-lg text-foreground group-hover:text-primary transition-colors leading-tight">
                            {item.name}
                          </h3>
                          <span className="text-primary font-bold text-lg flex-shrink-0">
                            {item.price}
                          </span>
                        </div>
                        
                        {item.description && (
                          <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                            {item.description}
                          </p>
                        )}

                        <div className="flex flex-wrap gap-2 mt-auto">
                          {item.popular && (
                            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-accent/20 text-accent text-xs font-semibold">
                              <Flame className="w-3 h-3" />
                              Popular
                            </span>
                          )}
                          {item.spicy && (
                            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-red-500/20 text-red-500 text-xs font-semibold">
                              🌶️ Spicy
                            </span>
                          )}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>

        {/* Ready to Order Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 py-16 text-center"
        >
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Ready to Order?
            </h2>
            <p className="text-lg text-muted-foreground">
              Get authentic Asian flavours delivered to your door or visit us in Newcastle city centre
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary-light text-primary-foreground shadow-medium hover:shadow-glow transition-all w-full sm:w-auto"
                asChild
              >
                <a 
                  href="https://www.ubereats.com/gb/store/stixs-asian-kitchen/S0ln4TDsXO62L7A0dAVCJA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Order on Uber Eats
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground shadow-soft hover:shadow-medium transition-all w-full sm:w-auto"
                asChild
              >
                <a 
                  href="https://deliveroo.co.uk/menu/newcastle/newcastle-city-centre/stixs-asian-kitchen" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Order on Deliveroo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
};

export default Menu;
