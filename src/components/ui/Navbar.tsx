import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./sheet";
import { Button } from "./button";
import { Menu } from "lucide-react";

export const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-semibold text-sky-600">
            DentalCare
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex space-x-8">
            <NavLink to="/" current={location.pathname === "/"}>
              Home
            </NavLink>
            <NavLink to="/about" current={location.pathname === "/about"}>
              About
            </NavLink>
            <NavLink to="/services" current={location.pathname === "/services"}>
              Services
            </NavLink>
            <NavLink to="/contact" current={location.pathname === "/contact"}>
              Contact
            </NavLink>
          </div>

          {/* Mobile Navigation */}
          <div className="sm:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[240px] sm:w-[540px]">
                <div className="flex flex-col space-y-4 mt-6">
                  <MobileNavLink to="/" current={location.pathname === "/"}>
                    Home
                  </MobileNavLink>
                  <MobileNavLink to="/about" current={location.pathname === "/about"}>
                    About
                  </MobileNavLink>
                  <MobileNavLink to="/services" current={location.pathname === "/services"}>
                    Services
                  </MobileNavLink>
                  <MobileNavLink to="/contact" current={location.pathname === "/contact"}>
                    Contact
                  </MobileNavLink>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, current, children }: { to: string; current: boolean; children: React.ReactNode }) => (
  <Link
    to={to}
    className={`${
      current
        ? "text-sky-600 border-b-2 border-sky-600"
        : "text-gray-600 hover:text-sky-600"
    } py-2 text-sm font-medium transition-colors`}
  >
    {children}
  </Link>
);

const MobileNavLink = ({ to, current, children }: { to: string; current: boolean; children: React.ReactNode }) => (
  <Link
    to={to}
    className={`${
      current
        ? "text-sky-600 font-semibold"
        : "text-gray-600 hover:text-sky-600"
    } py-2 text-lg font-medium transition-colors`}
  >
    {children}
  </Link>
);

export default Navbar;
