
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-sage-50 border-t border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-sage-500 to-rose-400 rounded-full"></div>
              <span className="font-serif text-xl font-semibold text-sage-800">
                Cozy Craft Creations
              </span>
            </div>
            <p className="text-gray-600 mb-4">
              Handcrafted home decor and custom-tailored fashion designs that bring 
              modern elegance and cozy comfort to your space and style.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-sage-600 hover:text-sage-700 transition-colors">
                Instagram
              </a>
              <a href="#" className="text-sage-600 hover:text-sage-700 transition-colors">
                Pinterest
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-sage-800 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shop" className="text-gray-600 hover:text-sage-600 transition-colors">
                  Shop All
                </Link>
              </li>
              <li>
                <Link to="/custom-designs" className="text-gray-600 hover:text-sage-600 transition-colors">
                  Custom Orders
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-sage-600 transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-sage-800 mb-4">
              Stay Updated
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Subscribe for design tips and new collections.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 border border-cream-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent"
              />
              <button className="bg-sage-600 text-white px-4 py-2 rounded-r-lg hover:bg-sage-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-cream-200 mt-8 pt-8 text-center text-gray-600 text-sm">
          <p>&copy; 2024 Cozy Craft Creations. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
