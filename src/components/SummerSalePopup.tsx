
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export const SummerSalePopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Show popup after a short delay when component mounts
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleShopNow = () => {
    setIsOpen(false);
    navigate('/shop');
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-md mx-auto bg-gradient-to-br from-rose-50 to-orange-50 border-2 border-rose-200">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>
        
        <DialogHeader className="text-center pt-4">
          <DialogTitle className="text-3xl font-serif font-bold text-rose-700 mb-2">
            ☀️ Summer Sale!
          </DialogTitle>
          <div className="space-y-4">
            <div className="text-6xl font-bold text-orange-600">
              50% OFF
            </div>
            <p className="text-lg text-gray-700">
              Transform your space with our handcrafted home decor and custom fashion designs
            </p>
            <p className="text-sm text-gray-600">
              Limited time offer on selected items
            </p>
          </div>
        </DialogHeader>
        
        <div className="flex flex-col gap-3 mt-6">
          <Button 
            className="bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-semibold py-3"
            onClick={handleShopNow}
          >
            Shop Now & Save!
          </Button>
          <Button 
            variant="outline" 
            className="border-rose-300 text-rose-700 hover:bg-rose-50"
            onClick={() => setIsOpen(false)}
          >
            Maybe Later
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
