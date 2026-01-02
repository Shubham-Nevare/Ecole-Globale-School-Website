import { ArrowRight, Calendar, Tag } from 'lucide-react';

export default function LatestUpdatesSection() {
  const updates = [
    {
      title: 'CIE Orientation at 2025',
      date: 'December 12, 2025',
      excerpt: 'The CIE Orientation for Grade 8, held on 12 December, marked an important milestone for students stepping into the Cambridge...',
      category: 'Events',
    },
    {
      title: 'A Night of Glitter, Grooves & Goodbye Smiles',
      date: 'December 12, 2025',
      excerpt: 'The farewell for the Batch of 2026, held on 12th December, was an evening brimming with warmth, sparkle, and sheer...',
      category: 'Events',
    },
    {
      title: 'Christmas Celebration at 2025',
      date: 'December 11, 2025',
      excerpt: 'With girls leaving on the 13th Christmas arrived early at Ecole, casting its magic over the school on 11th December....',
      category: 'Events',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Latest Updates
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {updates.map((update, idx) => (
            <article
              key={idx}
              className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-blue-900 font-semibold flex items-center gap-1">
                    <Tag className="w-4 h-4" />
                    {update.category}
                  </span>
                  <span className="text-sm text-gray-500 flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {update.date}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {update.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {update.excerpt}
                </p>
                <a
                  href="#"
                  className="text-blue-900 font-semibold hover:text-blue-700 transition-colors flex items-center gap-1 group"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="text-center mt-8">
          <a
            href="/latest-updates"
            className="inline-flex items-center gap-2 bg-blue-900 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-800 transition-colors group"
          >
            View All Updates
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </div>
      </div>
    </section>
  );
}

