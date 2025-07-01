
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-sage-800 mb-4">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I'd love to hear from you! Whether you have questions about my work, 
            want to discuss a custom project, or just want to say hello.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-white shadow-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-serif font-bold text-sage-800 mb-6">
                  Let's Connect
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-sage-700 mb-2">Email</h3>
                    <p className="text-gray-600">hello@cozycraftcreations.com</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sage-700 mb-2">Phone</h3>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sage-700 mb-2">Studio Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9am - 5pm<br />
                      Saturday: 10am - 3pm<br />
                      Sunday: By appointment
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-sage-50 to-cream-50 border-sage-200">
              <CardContent className="p-8">
                <h3 className="font-serif text-xl font-semibold text-sage-800 mb-4">
                  Follow My Work
                </h3>
                <p className="text-gray-700 mb-6">
                  Stay updated with my latest creations, behind-the-scenes glimpses, 
                  and design inspiration.
                </p>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="text-sage-600 hover:text-sage-700 transition-colors font-medium"
                  >
                    Instagram
                  </a>
                  <a 
                    href="#" 
                    className="text-sage-600 hover:text-sage-700 transition-colors font-medium"
                  >
                    Pinterest
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-rose-50 border-rose-200">
              <CardContent className="p-8">
                <h3 className="font-serif text-xl font-semibold text-sage-800 mb-4">
                  Newsletter
                </h3>
                <p className="text-gray-700 mb-6">
                  Subscribe to receive updates on new collections, design tips, 
                  and exclusive offers.
                </p>
                <div className="flex space-x-2">
                  <Input 
                    type="email" 
                    placeholder="Your email address"
                    className="flex-1"
                  />
                  <Button className="btn-primary">
                    Subscribe
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-sage-800">
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name *</Label>
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
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      className="mt-1"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      required
                      className="mt-1"
                      rows={6}
                      placeholder="Tell me about your project, ask a question, or just say hi!"
                    />
                  </div>

                  <Button type="submit" className="w-full btn-primary">
                    Send Message
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

export default Contact;
