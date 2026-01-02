import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
<section className="min-h-screen bg-gray-900 flex items-center flex-col text-white pt-20">
      <div className="container mx-auto px-6 text-center">
        <div className="my-10">
          <Image
            src="/not-found-illustration-removebg-preview.png"
            alt="Not Found Illustration"
            width={500}
            height={500}
            className="mx-auto w-92 opacity-90"
            priority
          />
        </div>

        <div className="flex justify-center gap-4">
          <Link
            href="/"
            className="bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition"
          >
            Go Back Home
          </Link>

          <Link
            href="/contact"
            className="bg-gray-200 text-gray-900 px-6 py-3 rounded-md hover:bg-gray-300 transition"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </section>
  );
}
