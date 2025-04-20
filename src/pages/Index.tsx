

import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Welcome to DentalCare</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              We are committed to providing exceptional dental care in a comfortable
              and modern environment. Your smile is our priority.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon="🦷"
              title="General Dentistry"
              description="Comprehensive dental care for your entire family, including cleanings, fillings, and preventive care."
            />
            <ServiceCard
              icon="👄"
              title="Cosmetic Dentistry"
              description="Transform your smile with our advanced cosmetic procedures, including whitening and veneers."
            />
            <ServiceCard
              icon="🦿"
              title="Dental Implants"
              description="Restore your smile with permanent, natural-looking dental implants."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Patient Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              name="Priyansh Shah"
              testimonial="The best dental experience I've ever had. The staff is incredibly professional and caring."
            />
            <TestimonialCard
              name="Dhruv Patel"
              testimonial="I was nervous about my dental implant, but the team made me feel comfortable throughout the entire process."
            />
            <TestimonialCard
              name="Aarav Mehta"
              testimonial="My teeth have never looked better! Thank you DentalCare for giving me my confidence back."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
