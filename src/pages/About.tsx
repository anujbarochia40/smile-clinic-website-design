
import TeamMember from "@/components/TeamMember";

const About = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-blue-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Leading the way in modern dentistry with compassionate care and
            cutting-edge technology.
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our History</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2000, DentalCare has been at the forefront of dental
                innovation, providing exceptional care to our community for over two
                decades.
              </p>
              <p className="text-gray-600">
                Our commitment to utilizing the latest technology and techniques,
                combined with our patient-first approach, has made us a trusted name
                in dental care.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg h-64 md:h-96"></div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TeamMember
              name="Dr. John Smith"
              role="Lead Dentist"
              image="https://source.unsplash.com/random/400x400/?dentist"
              description="Dr. Smith has over 15 years of experience in general and cosmetic dentistry."
            />
            <TeamMember
              name="Dr. Sarah Wilson"
              role="Orthodontist"
              image="https://source.unsplash.com/random/400x400/?doctor"
              description="Specializing in orthodontics, Dr. Wilson is passionate about creating beautiful smiles."
            />
            <TeamMember
              name="Dr. Michael Lee"
              role="Periodontist"
              image="https://source.unsplash.com/random/400x400/?medical"
              description="Dr. Lee is an expert in gum care and dental implant procedures."
            />
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Facilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-gray-100 h-48 rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Modern Equipment</h3>
              <p className="text-gray-600">
                State-of-the-art dental technology for precise and comfortable
                treatments.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-gray-100 h-48 rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Comfortable Environment</h3>
              <p className="text-gray-600">
                Designed for your comfort with modern amenities and relaxing
                atmosphere.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
