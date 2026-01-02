"use client";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedStates, setExpandedStates] = useState([]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef(null);

  const testimonials = [
    {
      name: "Dr. Rajat Dang",
      relation: "Father of Saisha Dang (Grade 7)",
      photo:
        "https://www.ecoleglobale.com/wp-content/uploads/2024/03/rajat-1.jpg",
      text: `As parents, we were very apprehensive about sending our daughter to a boarding school. Its been exactly a year since our daughter is at ECOLE. We, as parents would like to thank everyone for nurturing our child's love for learning. The dedication of the teachers and staff is commendable. The school's commitment to our child's development is invaluable, our child feels safe and supported at this school. Best Wishes to everyone.`,
    },

    {
      name: "Abdul & Uzma Khan",
      relation: "Parents of Izaariya Khan (Grade 5)",
      photo:
        "https://www.ecoleglobale.com/wp-content/uploads/2024/04/izariya-dasd.jpg",
      text: `I’m Abdul Khan, father of Izariya (Grade 5). Choosing Ecole Globale was our best decision. My once-shy daughter has blossomed into a confident, enthusiastic learner. The school’s inclusive environment, caring teachers, and personal attention have nurtured her growth. She now excels in academics and activities, even winning a gold medal in swimming. We’re truly grateful.`,
    },

    {
      name: "Ananya Pande",
      relation: "TGT: Social Science (House Mistress)",
      photo:
        "https://www.ecoleglobale.com/wp-content/uploads/2024/04/ananya-pande.jpg",
      text: `I have been a part of Ecole from past 3 years. As a teacher and a house mistress, it has been a rollercoaster of challenges and rewards. Every day, I get to create lessons, connect with students, and see them grow. It's a journey filled with learning, adapting, and making a positive impact. Despite the ups and downs the opportunity to make a difference in young lives makes it all worth it.`,
    },

    {
      name: "Zubia & Munir Bari",
      relation: "Parents of Sara Bari (Grade 9)",
      photo:
        "https://www.ecoleglobale.com/wp-content/uploads/2024/03/sara1.jpg",
      text: `I was full of mixed emotions while putting my daughter Sara in Ecole Globale International Girls School. Heartfelt thanks to all the teachers, staff and administration for the positive impact I witness in my daughter. The array of extracurricular activities and opportunities have helped her discover her passion and talents in ways we never imagined. Knowing that she is thriving in such a nurturing and structured environment gives me immense peace of mind.`,
    },

    {
      name: "Ms. Archana",
      relation: "Mother of Sharvi Sharma (Grade 10)",
      photo:
        "https://www.ecoleglobale.com/wp-content/uploads/2024/03/archana3.jpg",
      text: `The school is a remarkable institution that excels in nurturing its students personally and academically. The management philosophy of prioritising students’ needs is evident in all aspects. Excellent facilities and strong extracurricular activities significantly contribute to overall development. We are grateful for the positive impact it has on our daughter.`,
    },

    {
      name: "Gunisha Arora",
      relation: "Alumni",
      photo:
        "https://www.ecoleglobale.com/wp-content/uploads/2024/03/gunisha-arora-testimonial-150x150-1.jpg",
      text: `Ecole Globale has been the foundation of what I am as a person today. It taught me leadership, confidence and discipline. With teachers’ support, I discovered my passion for architecture — today I successfully run my own architecture firm in Mumbai. Strong schooling creates strong futures, and Ecole truly provides this.`,
    },
  ];

  // Initialize expanded states
  useEffect(() => {
    setExpandedStates(Array(testimonials.length).fill(false));
  }, [testimonials.length]);

  // Calculate neighboring indices for circular navigation
  const getPrevIndex = (index) =>
    index === 0 ? testimonials.length - 1 : index - 1;

  const getNextIndex = (index) => (index + 1) % testimonials.length;

  const prevIndex = getPrevIndex(currentIndex);
  const nextIndex = getNextIndex(currentIndex);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const startAutoPlay = () => {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => getNextIndex(prev));
      }, 5000);
    };

    startAutoPlay();

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying]);

  // Handle previous/next navigation
  const goToPrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(getPrevIndex(currentIndex));

    // Resume autoplay after 3 seconds
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(getNextIndex(currentIndex));

    // Resume autoplay after 3 seconds
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  // Toggle expanded state for specific testimonial
  const toggleExpanded = (index) => {
    setExpandedStates((prev) => {
      const newStates = [...prev];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  // Truncate text with "Read More" option
  const getTruncatedText = (text, index) => {
    const charLimit = 180;
    const isExpanded = expandedStates[index];

    if (isExpanded || text.length <= charLimit) {
      return text;
    }

    return text.slice(0, charLimit) + "...";
  };

  // Calculate progress indicators
  const progressSegments = testimonials.map((_, idx) => ({
    isActive: idx === currentIndex,
    isCompleted: idx < currentIndex,
  }));

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
          What They Say About Ecole Globale
        </h2>
        <p className="text-center text-gray-600 mb-4">
          Testimonials from parents, students, and alumni
        </p>

        {/* Testimonial Slider */}
        <div
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="flex items-center justify-center gap-6 lg:gap-10 px-4 py-10">
            {/* Previous Testimonial (Left) */}
            <div
              className="
                w-72 md:w-1/4 flex-shrink-0 snap-start bg-white p-4 md:p-6 rounded-2xl shadow-lg
                opacity-70 blur-[1px] scale-95 md:scale-90
                transition-all duration-500 ease-out
                min-h-[200px] md:min-h-[250px] overflow-hidden
                cursor-pointer hover:opacity-80 hover:scale-97 hidden md:block
              "
              onClick={goToPrev}
            >
              <div className="flex items-start mb-3">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden flex-shrink-0 mr-3">
                  <img
                    src={testimonials[prevIndex].photo}
                    alt={testimonials[prevIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-sm md:text-base">
                    {testimonials[prevIndex].name}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-500">
                    {testimonials[prevIndex].relation}
                  </p>
                </div>
              </div>
              <Quote className="w-6 h-6 md:w-8 md:h-8 text-blue-200 float-right mb-2" />
              <p className="text-gray-600 text-xs md:text-sm italic line-clamp-4">
                "{testimonials[prevIndex].text}"
              </p>
            </div>

            {/* Current Testimonial (Center) */}
            <div
              className="
                w-80  md:w-2/4 flex-shrink-0 snap-center bg-white p-6 md:p-8 rounded-2xl shadow-2xl
                scale-100 md:scale-105
                transition-all duration-500 ease-out
                min-h-[250px] md:min-h-[300px] relative
                border-2 border-blue-100
              "
            >
              <div className="absolute top-4 right-4">
                <Quote className="w-10 h-10 md:w-12 md:h-12 text-blue-100" />
              </div>

              <div className="flex items-start mb-4">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden flex-shrink-0 mr-3">
                  <img
                    src={testimonials[currentIndex].photo}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg md:text-xl">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    {testimonials[currentIndex].relation}
                  </p>
                </div>
              </div>

              <div className="relative pl-4">
                {/* <Quote className="w-6 h-6 text-blue-300 absolute -left-1 -top-1" /> */}
                <p className="text-gray-700 italic leading-relaxed text-sm md:text-base">
                  "
                  {getTruncatedText(
                    testimonials[currentIndex].text,
                    currentIndex
                  )}
                  "
                </p>
              </div>

              {testimonials[currentIndex].text.length > 180 && (
                <button
                  onClick={() => toggleExpanded(currentIndex)}
                  className="mt-4 text-blue-700 hover:text-blue-800 font-semibold text-sm md:text-base transition-colors flex items-center gap-1 items-end cursor-pointer"
                >
                  {expandedStates[currentIndex] ? "Show Less" : "Read More"}
                  <span className="text-lg">
                    {expandedStates[currentIndex] ? "↑" : "↓"}
                  </span>
                </button>
              )}
            </div>

            {/* Next Testimonial (Right) */}
            <div
              className="
                w-72 md:w-1/4 flex-shrink-0 snap-start bg-white p-4 md:p-6 rounded-2xl shadow-lg
                opacity-70 blur-[1px] scale-95 md:scale-90
                transition-all duration-500 ease-out
                min-h-[200px] md:min-h-[250px] overflow-hidden
                cursor-pointer hover:opacity-80 hover:scale-97 hidden md:block
              "
              onClick={goToNext}
            >
              <div className="flex items-start mb-3">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden flex-shrink-0 mr-3">
                  <img
                    src={testimonials[nextIndex].photo}
                    alt={testimonials[nextIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-sm md:text-base">
                    {testimonials[nextIndex].name}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-500">
                    {testimonials[nextIndex].relation}
                  </p>
                </div>
              </div>
              <Quote className="w-6 h-6 md:w-8 md:h-8 text-blue-200 float-right mb-2" />
              <p className="text-gray-600 text-xs md:text-sm italic line-clamp-4">
                "{testimonials[nextIndex].text}"
              </p>
            </div>
          </div>

          {/* Navigation Controls */}
          <button
            onClick={goToPrev}
            className="
              absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-1/2
              bg-white shadow-lg p-2 md:p-3 rounded-full hover:bg-gray-50
              transition-all duration-300 hover:scale-110 hover:shadow-xl
              border border-gray-200 z-10 cursor-pointer
            "
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
          </button>

          <button
            onClick={goToNext}
            className="
              absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-1/2
              bg-white shadow-lg p-2 md:p-3 rounded-full hover:bg-gray-50
              transition-all duration-300 hover:scale-110 hover:shadow-xl
              border border-gray-200 z-10 cursor-pointer
            "
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
          </button>
        </div>

        {/* Progress Indicator */}
        <div className=" flex flex-col items-center">
          {/* Manual Navigation Dots */}
          <div className="flex gap-2 mt-4">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentIndex(idx);
                  setIsAutoPlaying(false);
                  setTimeout(() => setIsAutoPlaying(true), 3000);
                }}
                className={`
                  w-3 h-3 rounded-full transition-all duration-300 cursor-pointer
                  ${
                    idx === currentIndex
                      ? "scale-125 bg-blue-900"
                      : "bg-gray-300 hover:bg-gray-400"
                  }
                `}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
