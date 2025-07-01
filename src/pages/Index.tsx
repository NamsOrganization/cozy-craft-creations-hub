
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { SummerSalePopup } from "@/components/SummerSalePopup";

const Index = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Handwoven Throw Pillow",
      category: "Home Decor",
      price: "$45",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      name: "Custom Linen Dress",
      category: "Fashion",
      price: "$120",
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      name: "Ceramic Vase Set",
      category: "Home Decor",
      price: "$65",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen">
      <SummerSalePopup />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-cream-100 via-sage-50 to-rose-50">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-sage-800 mb-6 animate-fade-in">
            Handcrafted with
            <span className="text-gradient block">Love & Care</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 animate-slide-up">
            Discover unique home decor and custom-tailored fashion designs that bring 
            modern elegance and cozy comfort to every corner of your life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Link to="/shop">
              <Button className="btn-primary text-lg px-8 py-4">
                Shop Collection
              </Button>
            </Link>
            <Link to="/custom-designs">
              <Button variant="outline" className="btn-secondary text-lg px-8 py-4">
                Custom Orders
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-sage-800 mb-4">
              Featured Creations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Each piece is thoughtfully designed and carefully crafted to bring 
              beauty and comfort to your world.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group hover-lift cursor-pointer">
                <div className="aspect-square overflow-hidden rounded-t-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <p className="text-sm text-sage-600 font-medium mb-2">
                    {product.category}
                  </p>
                  <h3 className="text-xl font-serif font-semibold text-sage-800 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-2xl font-bold text-sage-700">
                    {product.price}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/shop">
              <Button className="btn-primary">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-gradient-to-r from-sage-50 to-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-sage-800 mb-6">
                Where Creativity Meets Craftsmanship
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Every piece tells a story of passion, creativity, and dedication to quality. 
                From the initial sketch to the final stitch, each creation is born from a 
                love for beautiful, functional design.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Whether you're looking to transform your space with unique home decor or 
                express your personal style with custom fashion, we're here to bring your 
                vision to life.
              </p>
              <Link to="/about">
                <Button className="btn-secondary">
                  Learn More About Us
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Design process"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-sage-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Ready to Create Something Beautiful?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's work together to design pieces that perfectly reflect your style and vision.
          </p>
          <Link to="/custom-designs">
            <Button className="bg-white text-sage-800 hover:bg-cream-100 text-lg px-8 py-4">
              Start Your Custom Order
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
