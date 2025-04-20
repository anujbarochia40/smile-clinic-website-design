
interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  description: string;
}

export const TeamMember = ({ name, role, image, description }: TeamMemberProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="aspect-square mb-4 overflow-hidden rounded-full">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
      <p className="text-sky-600 mb-2">{role}</p>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default TeamMember;
