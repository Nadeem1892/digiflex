import React from "react";

const teamMembers = [
  {
    name: "Tuhinanshu Jain",
    position: "Managing Director",
    imgSrc: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:images/digiflex/ttj3.png",
    type: "leader",
  },
  {
    name: "Hemraj Prajapat",
    position: "Marketing Manager",
    imgSrc: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:images/digiflex/hemusir111.png",
  },
  {
    name: "Tanish Sharma",
    position: "Project Manager",
    imgSrc: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:images/digiflex/tanishsir.jpeg",
  },
  {
    name: "Sunil Patel",
    position: "Business Development Manager",
    imgSrc: "https://sin1.contabostorage.com/d1fa3867924f4c149226431ef8cbe8ee:images/digiflex/sunilsir1111.png",
  },
];

const TeamCard = ({ member }) => {
  return (
    <div
      className={`bg-white p-6 rounded-xl shadow-lg text-center transition-transform transform hover:scale-105 ${
        member.type === "leader" ? "border-4 border-yellow-500" : ""
      }`}
    >
      <img
        src={member.imgSrc}
        alt={member.name}
        className="w-32 h-32 mx-auto rounded-full border-4 border-gray-200"
      />
      <h3 className="text-xl font-bold mt-4 text-gray-800">{member.name}</h3>
      <p className="text-gray-600">{member.position}</p>
    </div>
  );
};

const MeetOurTeam = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-yellow-600">
          Meet Our Team
        </h2>
        <p className="text-gray-600 text-center mt-3 mb-10">
          We take great satisfaction in offering our clients the best solutions available and in fostering an enjoyable environment that allows our tribe to continue growing enormously.
        </p>

        {/* Managing Director Section */}
        <div className="flex justify-center mb-10">
          <TeamCard member={teamMembers[0]} />
        </div>

        {/* Core Team Section */}
        <h3 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Core Team
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.slice(1).map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetOurTeam;
