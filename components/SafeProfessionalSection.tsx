// components/SafeProfessionalSection.tsx
import React from 'react';
import Image from 'next/image';

const SafeProfessionalSection: React.FC = () => {
  return (
    <section className="bg-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/teams.jpg" // Replace with your image path
                alt="Team collaboration"
                width={600}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>

            {/* Progress Bars */}
            <div className="mt-8 space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-semibold text-sm">Privacy</span>
                  <span className="text-white font-semibold text-sm">100%</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-3 overflow-hidden">
                  <div className="bg-blue-900 h-full rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-blue-900 font-semibold text-sm">Accuracy</span>
                  <span className="text-blue-900 font-semibold text-sm">99%</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-3 overflow-hidden">
                  <div className="bg-blue-500 h-full rounded-full" style={{ width: '99%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              GENERATE SAFE AND PROFESSIONAL SAMPLE STATEMENTS
            </h2>

            <p className="text-gray-700 mb-6 leading-relaxed">
              <span className="font-bold">WorkForm Solutions</span> makes designing professional sample statements simple and secure. You have full control to easily create documents that are neatly formatted and visually polished.
            </p>

            <p className="text-gray-700 mb-8 leading-relaxed">
              We make it simple whether you need to organize personal records, track finances, or prepare business documents.
            </p>

            {/* Features List */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Enter Your Information Safely
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Your privacy is our top priority. You can safely type all your statement and transaction details into our protected system.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  We want to be clear:
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  we will never ask for or access any real bank login or account data. Every step is designed to keep your information fully secure and confidential.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Generate a Professional Sample Statement
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Stop worrying about formatting! Once you add your details, our system instantly turns it into a clean, professional, and well-organized personal or business statement.
                </p>
              </div>

              <div>
                <p className="text-gray-700 leading-relaxed">
                  Each layout is precise, ensuring your document looks consistent and polished every time. It's perfect for personal record-keeping, finance reviews, or educational purposes.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Save and Access Anytime
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  After a quick review, you can immediately save your completed document as a PDF. Keep it for your files, print a copy, or share it when needed. Your documents are always safe, accessible, and ready whenever you need them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafeProfessionalSection;