
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-50 to-blue-100 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Your Perfect Smile</span>
            <span className="block text-sky-600">Begins Here</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Experience world-class dental care in a comfortable and modern
            environment. Our expert team is dedicated to your oral health.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <Button className="w-full px-8 py-3 text-base font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 md:py-4 md:text-lg md:px-10">
                Book Appointment
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
