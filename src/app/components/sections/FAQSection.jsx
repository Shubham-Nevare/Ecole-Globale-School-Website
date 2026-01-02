'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'Which is the most popular girls boarding school in Dehradun?',
      answer: 'The most Popular girls boarding school in Dehradun is the Ecole Globale International Girls\' School and is ranked number 2 in the category of girls\' boarding schools all over India. This international girls school in India offers education to students from class IV to class XII.',
    },
    {
      question: 'What makes Ecole Globale the best Boarding in Dehradun?',
      answer: 'Ecole Globale Girls school in Dehradun follows a holistic approach to education that focuses on all aspects of a student\'s growth and development, including their physical, emotional, social and intellectual needs. It was even voted No. 6 in India in the Education World Magazine\'s \'Peer and Parent Surveys.\'',
    },
    {
      question: 'What facilities are provided in top International Schools in Dehradun?',
      answer: 'The facilities provided in this top international girls school in India range from World class infrastructure, Digital classroom, Olympic standard Pool, Massive shooting range, Fully equipped library, Customized sports facilities, Tennis Court, Horse riding, Badminton Court, Basketball Court, Football Field, Skating, Martial Arts, Yoga and Professional Photography training.',
    },
    {
      question: 'What is the curriculum followed in Ecole Globale International Boarding School, Dehradun?',
      answer: 'Ecole Globale International Boarding School, offers two types of curriculum. The students can choose between the Central Board of Secondary Education (CBSE) and Cambridge International Education (CIE).',
    },
    {
      question: 'What is the fee structure in Ecole Globale International Girls Boarding School?',
      answer: 'Fees for (India & SAARC)-INR: Registration Fee 25,000 (one time), Admission Fee 1,00,000 (one time), Caution Deposit 1,00,000 (one time-refundable). 1st term (April-September): School Fee 2,34,265, Boarding fee 2,89,800, Imprest A/C 90,000. 2nd term (October – March): School Fee 2,34,265, Boarding fee 2,89,800, Imprest A/C 90,000. Fees (International)- Fees USD: Registration Fee 750 (one time), Admission Fee 2,000 (one time), Caution Deposit 2,500 (refundable). Annual term (April-March) USD: School fees 10,792, Boarding Fee 8,300, Imprest A/C 1,800.',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-lg mb-4 overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between group"
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-600 transition-transform duration-300 flex-shrink-0 ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === idx && (
                <div className="px-6 py-4 bg-white">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

