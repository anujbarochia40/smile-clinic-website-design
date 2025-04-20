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
            <img
              src="https://images.unsplash.com/photo-1667133295352-ef4c83620e8e?q=80&w=1458&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Dental clinic history"
              className="w-full h-64 md:h-96 object-cover rounded-lg"
            />
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
              name="Dr. Neel Shetty"
              role="Lead Dentist"
              image="https://images.unsplash.com/photo-1667133295308-9ef24f71952e?q=80&w=1514&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              description="Dr. Neel has over 15 years of experience in general and cosmetic dentistry."
            />
            <TeamMember
              name="Dr. Sara Oberoi"
              role="Orthodontist"
              image="https://images.unsplash.com/photo-1642977195740-1204d9c401b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGVudGlzdCUyMGxhZHl8ZW58MHx8MHx8fDA%3D"
              description="Specializing in orthodontics, Dr. Sara is passionate about creating beautiful smiles."
            />
            <TeamMember
              name="Dr. Harshal Patel"
              role="Periodontist"
              image="data:image/jpeg;base64,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"
              description="Dr. Harshal is an expert in gum care and dental implant procedures."
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
              <img 
                src="https://images.unsplash.com/photo-1722586663955-2f96a4c1f255?q=80&w=1371&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Modern dental equipment"
                className="h-48 w-full object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Modern Equipment</h3>
              <p className="text-gray-600">
                State-of-the-art dental technology for precise and comfortable
                treatments.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Comfortable clinic environment"
                className="h-48 w-full object-cover rounded-lg mb-4"
              />
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
