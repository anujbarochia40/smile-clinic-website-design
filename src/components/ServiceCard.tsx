
import { Button } from "./ui/button";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

export const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mb-4">
        <span className="text-sky-600 text-xl">{icon}</span>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Button variant="outline" className="w-full">
        Book Now
      </Button>
    </div>
  );
};

export default ServiceCard;
