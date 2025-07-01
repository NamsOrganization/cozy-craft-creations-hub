
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-cream-25 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-sage-800 mb-4">
            About Cozy Craft Creations
          </h1>
          <p className="text-xl text-gray-600">
            Where passion meets craftsmanship, and every piece tells a story.
          </p>
        </div>

        {/* Main Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-sage-800">
              My Creative Journey
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Welcome to my world of handcrafted beauty. I'm passionate about creating 
              pieces that don't just fill a space or complete an outfit, but that 
              bring joy, comfort, and a sense of home wherever they go.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              What started as a hobby in my living room has blossomed into a full 
              creative practice. Every piece I create is born from a love of natural 
              materials, thoughtful design, and the belief that handmade items carry 
              a special kind of warmth that mass-produced goods simply cannot match.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether I'm weaving a throw pillow, tailoring a custom dress, or 
              crafting a ceramic vase, my goal is always the same: to create 
              something beautiful, functional, and uniquely yours.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Crafting process"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-sage-800 text-center mb-12">
            What Drives My Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-sm hover-lift">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-8 h-8 bg-sage-500 rounded-full"></div>
                </div>
                <h3 className="text-xl font-serif font-semibold text-sage-800 mb-4">
                  Sustainability
                </h3>
                <p className="text-gray-600">
                  I source natural, eco-friendly materials and use traditional 
                  techniques that honor both craft and environment.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-sm hover-lift">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-8 h-8 bg-rose-400 rounded-full"></div>
                </div>
                <h3 className="text-xl font-serif font-semibold text-sage-800 mb-4">
                  Quality
                </h3>
                <p className="text-gray-600">
                  Every piece is meticulously crafted to last, using time-honored 
                  techniques and the finest materials available.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-sm hover-lift">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-cream-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-8 h-8 bg-cream-500 rounded-full"></div>
                </div>
                <h3 className="text-xl font-serif font-semibold text-sage-800 mb-4">
                  Personal Touch
                </h3>
                <p className="text-gray-600">
                  Each creation is made with intention and care, designed to 
                  reflect your unique style and bring joy to your daily life.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Process */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-16">
          <h2 className="text-3xl font-serif font-bold text-sage-800 text-center mb-8">
            Behind the Scenes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-serif font-semibold text-sage-800 mb-4">
                Design Philosophy
              </h3>
              <p className="text-gray-700 mb-4">
                I believe that the best designs are both beautiful and functional. 
                Every piece begins with careful consideration of how it will be used, 
                where it will live, and how it can enhance the daily experience of 
                its owner.
              </p>
              <p className="text-gray-700">
                My aesthetic draws inspiration from nature's textures, the warmth 
                of traditional crafts, and the clean lines of modern design.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-serif font-semibold text-sage-800 mb-4">
                Crafting Process
              </h3>
              <p className="text-gray-700 mb-4">
                Each piece is created in small batches or as one-of-a-kind custom 
                orders. I work primarily with natural fibers, sustainable woods, 
                and ethically sourced materials.
              </p>
              <p className="text-gray-700">
                From initial sketch to final finish, every step is done by hand 
                with careful attention to detail and quality.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-sage-50 to-cream-50 rounded-lg p-12">
          <h2 className="text-3xl font-serif font-bold text-sage-800 mb-4">
            Let's Create Together
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            I'd love to hear about your vision and help bring it to life. 
            Whether you're looking for something from my current collection 
            or dreaming of a custom piece, let's start the conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/shop" 
              className="inline-flex items-center justify-center btn-primary"
            >
              Browse Collection
            </a>
            <a 
              href="/custom-designs" 
              className="inline-flex items-center justify-center btn-secondary"
            >
              Commission Custom Work
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
