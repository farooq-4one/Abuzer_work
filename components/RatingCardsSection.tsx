// components/RatingCardsSection.tsx
import React from 'react';
import RatingCard from '@/components/RatingCard';

const RatingCardsSection: React.FC = () => {
  return (
    <section className="bg-gray-200 relative min-h-[50vh] flex items-center pt-24 pb-12 sm:pt-32 sm:pb-16 md:pt-40 md:pb-20 lg:pt-48 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 w-full">
          {/* Web Reviews Card */}
          <div className="w-full md:w-[320px] flex justify-center px-2 sm:px-4">
            <RatingCard
              platform="web-reviews"
              rating={5}
              reviewCount={98}
              logoText="TAX MASTER"
            />
          </div>

          {/* Trustpilot Card */}
          <div className="w-full md:w-[320px] flex justify-center px-2 sm:px-4">
            <RatingCard
              platform="trustpilot"
              rating={4.5}
              reviewCount={57}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RatingCardsSection;