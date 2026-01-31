// components/HeroSection.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image - Can be easily changed by replacing the src */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-background.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          ONLINE BANK STATEMENT
          <br />
          <span className="text-white">GENERATOR</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-white mb-12 max-w-5xl mx-auto font-medium leading-relaxed">
          EDIT PERSONAL OR BUSINESS BANK STATEMENTS WITH US FOR BUDGETING,
          <br className="hidden sm:block" />
          RECORD-KEEPING, OR PRESENTATION PURPOSES — SIMPLE AND EASY TO USE.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch">
          <Link href="https://master-paper-work.vercel.app/generate">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-xl w-full sm:w-auto inline-block text-center">
              Generate Now
            </button>
          </Link>
          <a
            href="/templates/bank-statement-template.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-gray-100 text-gray-900 px-10 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-xl w-full sm:w-auto inline-block text-center"
          >
            View Templates
          </a>
        </div>
      </div>

      {/* WhatsApp Help Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <Link
          href="https://api.whatsapp.com/send?phone=923244628026&text=Hello!"
          target="_blank"
        >
          <button className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 flex items-center gap-2">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            <span className="font-medium hidden sm:inline">Need Help?</span>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
