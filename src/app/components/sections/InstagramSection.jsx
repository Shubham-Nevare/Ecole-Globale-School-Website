import Link from "next/link";

export default function InstagramSection() {
  const posts = [
    {
      link: "https://www.instagram.com/p/DSErrr9gZoo",
      image: "/intagram/insta_post0.png",
      alt: "Language learning activity",
    },
    {
      link: "https://www.instagram.com/p/DS1eIU4iryD",
      image: "/intagram/insta_post1.png",
      alt: "A beautiful blend of cultures and voices",
    },
    {
      link: "https://www.instagram.com/p/DSq1j5BgXe0",
      image: "/intagram/insta_post2.png",

      alt: "Festive season joy",
    },
    {
      link: "https://www.instagram.com/p/DSpCw2Wgew2",
      image: "/intagram/insta_post3.png",
      alt: "Christmas celebration",
    },
    {
      link: "https://www.instagram.com/p/DSjTK7zgQlG",
      image: "/intagram/insta_post4.png",
      alt: "Dance performance",
    },
    {
      link: "https://www.instagram.com/p/DSbwsMlgT2E",
      image: "/intagram/insta_post5.png",
      alt: "Farewell event",
    },
    {
      link: "https://www.instagram.com/p/DSUOzQkAWg-",
      image: "/intagram/insta_post6.png",
      alt: "Art Fest highlights",
    },
    {
      link: "https://www.instagram.com/p/DSMf5yNk3on",
      image: "/intagram/insta_post7.png",
      alt: "Badminton championship",
    },
    
  ];

  return (
    <section id="instagram" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10 text-red-600">
          Recent Instagram Feed
        </h2>

        <p className="text-center text-gray-600 mb-8">
          Follow us on Instagram{" "}
          <Link
            href="https://instagram.com/ecole_girls_school"
            target="_blank"
            className="text-blue-600 font-semibold"
          >
            @ecole_girls_school
          </Link>
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {posts.map((post, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-lg bg-gray-100"
            >
              <a href={post.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={post.image}
                  alt={post.alt}
                  className="w-full h-70 object-cover hover:scale-105 transition duration-300"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
