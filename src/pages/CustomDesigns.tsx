
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const CustomDesigns = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    designType: "",
    description: "",
    budget: "",
    timeline: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-cream-25 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-sage-800 mb-4">
            Custom Designs
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Let's create something uniquely yours. Whether it's home decor or fashion, 
            we'll work together to bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Process Overview */}
          <div>
            <h2 className="text-2xl font-serif font-bold text-sage-800 mb-6">
              How It Works
            </h2>
            
            <div className="space-y-6">
              <Card className="border-l-4 border-l-sage-500">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-sage-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-sage-800 mb-2">Consultation</h3>
                      <p className="text-gray-600">
                        We'll discuss your vision, style preferences, and requirements 
                        during a detailed consultation call.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-rose-400">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-rose-400 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-sage-800 mb-2">Design & Approval</h3>
                      <p className="text-gray-600">
                        I'll create initial sketches and concepts for your approval 
                        before beginning the crafting process.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-cream-500">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-cream-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-sage-800 mb-2">Creation & Delivery</h3>
                      <p className="text-gray-600">
                        Your custom piece will be carefully handcrafted and delivered 
                        within the agreed timeline.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-8 bg-sage-50 border-sage-200">
              <CardContent className="p-6">
                <h3 className="font-serif text-lg font-semibold text-sage-800 mb-4">
                  What to Expect
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-sage-500 rounded-full"></div>
                    <span>Personalized design consultation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-sage-500 rounded-full"></div>
                    <span>High-quality, sustainable materials</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-sage-500 rounded-full"></div>
                    <span>Regular updates on progress</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-sage-500 rounded-full"></div>
                    <span>Satisfaction guarantee</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-sage-800">
                  Start Your Custom Order
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label className="text-base font-medium">What type of design are you interested in? *</Label>
                    <RadioGroup
                      value={formData.designType}
                      onValueChange={(value) => handleInputChange("designType", value)}
                      className="mt-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="home-decor" id="home-decor" />
                        <Label htmlFor="home-decor">Home Decor</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="fashion" id="fashion" />
                        <Label htmlFor="fashion">Fashion</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="both" id="both" />
                        <Label htmlFor="both">Both</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label htmlFor="description">Project Description *</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                      required
                      className="mt-1"
                      rows={4}
                      placeholder="Tell us about your vision, style preferences, colors, materials, or any specific requirements..."
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="budget">Budget Range</Label>
                      <Input
                        id="budget"
                        type="text"
                        value={formData.budget}
                        onChange={(e) => handleInputChange("budget", e.target.value)}
                        className="mt-1"
                        placeholder="e.g., $100-200"
                      />
                    </div>
                    <div>
                      <Label htmlFor="timeline">Desired Timeline</Label>
                      <Input
                        id="timeline"
                        type="text"
                        value={formData.timeline}
                        onChange={(e) => handleInputChange("timeline", e.target.value)}
                        className="mt-1"
                        placeholder="e.g., 2-3 weeks"
                      />
                    </div>
                  </div>

                  <Button type="submit" className="w-full btn-primary">
                    Submit Custom Design Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomDesigns;
