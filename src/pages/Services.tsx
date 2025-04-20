
import { Button } from "@/components/ui/button";


const Services = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-blue-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive dental care tailored to your needs with the latest
            technology and experienced professionals.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md flex flex-col md:flex-row items-center md:items-start gap-8"
              >
                <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sky-600 text-2xl">{service.icon}</span>
                </div>
                <div className="flex-grow text-center md:text-left">
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Button className="bg-sky-600 hover:bg-sky-700">
                    Book Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const services = [
  {
    icon: "🦷",
    title: "General Dentistry",
    description:
      "Comprehensive dental care including regular check-ups, cleanings, fillings, and preventive treatments to maintain your oral health.",
  },
  {
    icon: "👄",
    title: "Cosmetic Dentistry",
    description:
      "Transform your smile with our range of cosmetic services including teeth whitening, veneers, and bonding procedures.",
  },
  {
    icon: "🦿",
    title: "Dental Implants",
    description:
      "Replace missing teeth with permanent, natural-looking dental implants that restore both function and appearance.",
  },
  {
    icon: "🎯",
    title: "Orthodontics",
    description:
      "Straighten your teeth and correct bite issues with modern orthodontic treatments including traditional braces and clear aligners.",
  },
  {
    icon: "🏥",
    title: "Emergency Dental Care",
    description:
      "Immediate care for dental emergencies including severe pain, broken teeth, or lost fillings.",
  },
];

export default Services;
