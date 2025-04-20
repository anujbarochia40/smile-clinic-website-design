
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-sky-600 mr-2" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-sky-600 mr-2" />
                <span>contact@dentalcare.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-sky-600 mr-2" />
                <span>123 Dental Street, City, State 12345</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Hours</h3>
            <div className="space-y-2">
              <p>Monday - Friday: 9am - 6pm</p>
              <p>Saturday: 10am - 4pm</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-sky-600">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-sky-600">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-sky-600">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-gray-400">
          <p>&copy; 2024 DentalCare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
