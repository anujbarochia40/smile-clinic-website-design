
interface TestimonialCardProps {
  name: string;
  testimonial: string;
  image?: string;
}

export const TestimonialCard = ({ name, testimonial, image }: TestimonialCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <div className="h-12 w-12 rounded-full bg-sky-100 flex items-center justify-center">
          {image ? (
            <img
              src={image}
              alt={name}
              className="h-10 w-10 rounded-full object-cover"
            />
          ) : (
            <span className="text-sky-600 text-xl">👤</span>
          )}
        </div>
        <div className="ml-4">
          <h4 className="text-lg font-semibold">{name}</h4>
        </div>
      </div>
      <p className="text-gray-600 italic">{testimonial}</p>
    </div>
  );
};

export default TestimonialCard;
