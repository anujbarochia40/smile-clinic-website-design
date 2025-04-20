
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-semibold text-sky-600">
            DentalCare
          </Link>
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

export default Navbar;
