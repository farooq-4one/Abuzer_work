// components/RatingCard.tsx
import React from 'react';

interface RatingCardProps {
  platform: 'web-reviews' | 'trustpilot';
  rating: number;
  reviewCount: number;
  logoText?: string;
}

const RatingCard: React.FC<RatingCardProps> = ({
  platform,
  rating,
  reviewCount,
  logoText = 'PAPER WORK MASTER',
}) => {
  // Generate stars based on rating
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg
          key={`full-${i}`}
          className={`w-6 h-6 ${
            platform === 'trustpilot' ? 'text-blue-700' : 'text-yellow-400'
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    // Half star
    if (hasHalfStar) {
      stars.push(
        <svg
          key="half"
          className={`w-6 h-6 ${
            platform === 'trustpilot' ? 'text-blue-700' : 'text-yellow-400'
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <defs>
            <linearGradient id="half-star">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="#e5e7eb" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path
            fill="url(#half-star)"
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
          />
        </svg>
      );
    }

    // Empty stars
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg
          key={`empty-${i}`}
          className="w-6 h-6 text-gray-300"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    return stars;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-0 w-full min-w-[280px] max-w-[320px] hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-around bg-amber-300 px-4 sm:px-6 py-4 mb-6 border-b border-gray-200">
        <div className="flex items-center gap-2">
          {platform === 'web-reviews' ? (
            <span className="text-[#0a1f44] font-bold text-sm tracking-wide">
              {logoText}
            </span>
          ) : (
            <div className="flex items-center gap-1">
              <svg
                className="w-5 h-5 text-green-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span className="text-gray-900 font-bold text-sm">Trustpilot</span>
            </div>
          )}
        </div>
        <span className="text-gray-600 text-sm font-medium">
          {platform === 'web-reviews' ? 'Web Reviews' : 'Reviews'}
        </span>
      </div>

      {/* Stars and Review Count */}
      <div className="flex flex-col items-center gap-3 px-6 sm:px-8 pb-6 sm:pb-8">
        <div className="flex gap-1">{renderStars()}</div>
        <p className="text-gray-900 font-bold text-lg">
          {reviewCount} reviews
        </p>
      </div>
    </div>
  );
};

export default RatingCard;