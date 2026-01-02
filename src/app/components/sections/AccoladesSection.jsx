import { Trophy, GraduationCap, Handshake } from 'lucide-react';

export default function AccoladesSection() {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Ecole Globale Accolades
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow group">
            <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4 group-hover:scale-110 transition-transform duration-200" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Best Girls Boarding School
            </h3>
            <p className="text-gray-600">
              Award for best girls boarding school in Dehradun
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow group">
            <GraduationCap className="w-16 h-16 text-blue-500 mx-auto mb-4 group-hover:scale-110 transition-transform duration-200" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Excellent Placements
            </h3>
            <p className="text-gray-600">
              Outstanding placement record for our graduates
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow group">
            <Handshake className="w-16 h-16 text-green-500 mx-auto mb-4 group-hover:scale-110 transition-transform duration-200" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Trusted Associates
            </h3>
            <p className="text-gray-600">
              Partnerships with leading educational institutions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

