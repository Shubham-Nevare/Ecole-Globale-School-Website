import Link from "next/link";
import Image from "next/image";

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Ms. Kanchan Khandke",
      role: "Principal",
      image:
        "https://www.ecoleglobale.com/wp-content/uploads/2024/12/Kanchan-Khandke-1.png",
      link: "https://www.ecoleglobale.com/team/ms-kanchan-khandke",
    },
    {
      name: "Ms. Puja Pant",
      role: "Vice Principal",
      image:
        "https://www.ecoleglobale.com/wp-content/uploads/2024/12/puja-pant-1.png",
      link: "https://www.ecoleglobale.com/team/ms-puja-pant",
    },
    {
      name: "Ms. Sohni Juneja",
      role: "Head Finishing School",
      image:
        "https://www.ecoleglobale.com/wp-content/uploads/2025/11/Sohni-Juneja.jpg",
      link: "https://www.ecoleglobale.com/team/ms-sohni-juneja",
    },
    {
      name: "Mr. Varun Kumar",
      role: "Academic Head",
      image:
        "https://www.ecoleglobale.com/wp-content/uploads/2024/12/Varun-Kumar-1.png",
      link: "https://www.ecoleglobale.com/team/mr-varun-kumar",
    },
    {
      name: "Mr. Virender Singh",
      role: "Outreach & Operations Manager",
      image:
        "https://www.ecoleglobale.com/wp-content/uploads/2024/12/mr.virender-1.jpg",
      link: "https://www.ecoleglobale.com/team/mr-virender-singh",
    },
    {
      name: "Ms. Toral Sharan",
      role: "Career Counsellor",
      image:
        "https://www.ecoleglobale.com/wp-content/uploads/2019/10/toral-sahran.jpg",
      link: "https://www.ecoleglobale.com/team/ms-toral-sharan",
    },
  ];

  return (
  <section className="py-14 bg-gradient-to-b from-white to-blue-50/40">
  <div className="container mx-auto px-4 max-w-4xl">

    <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-gray-900">
      Our Leadership Team
    </h2>

    <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
      Guiding young minds with vision, experience, and dedication.
    </p>

    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
      {teamMembers.map((member, idx) => (
        <div
          key={idx}
          className="
            bg-white rounded-xl shadow-sm border border-gray-100
            text-center p-4 md:p-5 flex flex-col
            hover:shadow-lg hover:-translate-y-0.5 hover:border-blue-200
            transition-all duration-300 group
          "
        >
          <div className="relative w-28 h-28 md:w-28 md:h-28 mx-auto mb-3 rounded-full overflow-hidden ring-1 ring-blue-100">
            <Image
              src={member.image}
              alt={member.name}
              fill
              sizes="(max-width: 768px) 112px, 112px"
              className="object-cover"
            />
          </div>

          <h3 className="text-lg md:text-xl font-semibold text-gray-900 leading-tight">
            {member.name}
          </h3>

          <p className="text-blue-700 text-sm md:text-base mt-1">
            {member.role}
          </p>

          <div className="mt-4">
            <Link
              href={member.link}
              target="_blank"
              className="
                inline-block px-4 py-1.5 rounded-md 
                bg-blue-900 text-white text-sm
                hover:bg-blue-800 transition
              "
            >
              View Profile
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
}
