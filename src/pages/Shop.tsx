
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const products = [
    {
      id: 1,
      name: "Handwoven Throw Pillow",
      category: "home-decor",
      price: 45,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Soft, textured pillow made from organic cotton"
    },
    {
      id: 2,
      name: "Custom Linen Dress",
      category: "fashion",
      price: 120,
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Flowing linen dress perfect for any season"
    },
    {
      id: 3,
      name: "Ceramic Vase Set",
      category: "home-decor",
      price: 65,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Set of three handcrafted ceramic vases"
    },
    {
      id: 4,
      name: "Knit Sweater",
      category: "fashion",
      price: 85,
      image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Cozy hand-knit sweater in natural wool"
    },
    {
      id: 5,
      name: "Macrame Wall Hanging",
      category: "home-decor",
      price: 55,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Intricate macrame design in natural cotton"
    },
    {
      id: 6,
      name: "Silk Scarf",
      category: "fashion",
      price: 40,
      image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Hand-painted silk scarf with botanical motifs"
    }
  ];

  const categories = [
    { id: "all", name: "All Products" },
    { id: "home-decor", name: "Home Decor" },
    { id: "fashion", name: "Fashion" }
  ];

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-cream-25 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-sage-800 mb-4">
            Our Shop
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our collection of handcrafted home decor and fashion pieces, 
            each one designed with love and attention to detail.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-2 bg-white rounded-lg p-2 shadow-sm">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                variant={selectedCategory === category.id ? "default" : "ghost"}
                className={selectedCategory === category.id ? 
                  "bg-sage-600 text-white" : "text-sage-600 hover:bg-sage-50"}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="group hover-lift cursor-pointer bg-white">
              <div className="aspect-square overflow-hidden rounded-t-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold text-sage-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {product.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-sage-700">
                    ${product.price}
                  </span>
                  <Button className="btn-primary">
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-white rounded-lg shadow-sm">
          <h2 className="text-2xl font-serif font-bold text-sage-800 mb-4">
            Don't see exactly what you're looking for?
          </h2>
          <p className="text-gray-600 mb-6">
            We'd love to create something custom just for you.
          </p>
          <Button className="btn-secondary">
            Request Custom Design
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Shop;
