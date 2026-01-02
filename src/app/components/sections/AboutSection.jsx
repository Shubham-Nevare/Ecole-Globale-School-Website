import { Award, GraduationCap, BookOpen } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            About Ecole Globale
          </h2>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              In this era of progressive education, schools strive to provide
              holistic development for their students. Beyond delivering a
              curriculum that encompasses academics, activities, sports, and
              community service, significant effort is made to shape
              students&apos; futures by preparing them to become the leaders of
              tomorrow.
            </p>

            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Ecole Globale International Girls&apos; School is furnished with
              all the latest technologies and amenities. We strive to improve
              women&apos;s representation and mold young girls into strong
              ladies with excellent leadership qualities. The girls here are
              prepared to master the art of professionalism and to host a cool
              house party. We believe in the amalgamation of distinct cultures
              and backgrounds.
            </p>

            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              With girls from all over the country, we have made a diverse
              atmosphere where students are a part of the mature, smart, and
              intelligent community of women. The profoundly experienced faculty
              are the masters of their respective subjects and are always keen
              to provide knowledge (apart from educational lessons). They
              dedicatedly assist the girls in becoming ready to lead a
              victorious life in their preferred career areas and shine in their
              personal lives.
            </p>
          </div>

          {/* About School Video Section */}
          <div className="my-12 px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
                Experience Ecole Globale
              </h2>
              <p className="text-lg text-gray-600 text-center mb-10 max-w-2xl mx-auto">
                Watch our video to see our campus, facilities, and the vibrant
                community that makes our school unique.
              </p>

              {/* Video Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                {/* Responsive Video Wrapper */}
                <div className="relative pt-[56.25%]">
                  {/* 16:9 Aspect Ratio */}
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube-nocookie.com/embed/VIDEO_ID"
                    title="Ecole Globale International Girls' School Campus Tour"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                {/* Video Info */}
                <div className="bg-gradient-to-r from-gray-50 to-white p-6">
                  <p className="text-sm text-gray-500 mb-1">
                    Video hosted on YouTube • Ecole Globale School
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium">Please note:</span> This video
                    contains audio and text in Chinese, providing a perspective
                    for our Mandarin-speaking community.
                  </p>
                </div>
              </div>

              {/* Key Highlights */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-6">
                  <div className="text-blue-900 font-bold text-2xl mb-2">
                    200+
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Acre Campus
                  </h3>
                  <p className="text-gray-600">
                    Spacious, secure environment with modern infrastructure
                  </p>
                </div>
                <div className="text-center p-6">
                  <div className="text-blue-900 font-bold text-2xl mb-2">
                    24/7
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Holistic Care
                  </h3>
                  <p className="text-gray-600">
                    Round-the-clock mentoring and pastoral support system
                  </p>
                </div>
                <div className="text-center p-6">
                  <div className="text-blue-900 font-bold text-2xl mb-2">
                    Global
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Curriculum
                  </h3>
                  <p className="text-gray-600">
                    International programs with focus on leadership and
                    innovation
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow group">
              <Award className="w-12 h-12 text-blue-900 mx-auto mb-3 group-hover:scale-110 transition-transform duration-200" />
              <div className="text-4xl font-bold text-blue-900 mb-2">2</div>
              <div className="text-gray-600">Ranked in India</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow group">
              <GraduationCap className="w-12 h-12 text-blue-900 mx-auto mb-3 group-hover:scale-110 transition-transform duration-200" />
              <div className="text-4xl font-bold text-blue-900 mb-2">6</div>
              <div className="text-gray-600">Education World Magazine</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow group">
              <BookOpen className="w-12 h-12 text-blue-900 mx-auto mb-3 group-hover:scale-110 transition-transform duration-200" />
              <div className="text-4xl font-bold text-blue-900 mb-2">
                IV-XII
              </div>
              <div className="text-gray-600">Classes Offered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
