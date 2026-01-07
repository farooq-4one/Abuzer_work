// components/HowItWorksWithSVG.tsx
import React from 'react';

interface StepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// SVG Icons - Easy to replace with your own SVGs
const ProvideInfoIcon = () => (
  <svg className="w-full h-full scale-125" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="60" y="56" width="80" height="100" rx="4" stroke="#1e3a8a" strokeWidth="3" fill="#bfdbfe"/>
    <path d="M75 60 H125" stroke="#1e3a8a" strokeWidth="3" strokeLinecap="round"/>
    <path d="M75 75 H125" stroke="#1e3a8a" strokeWidth="3" strokeLinecap="round"/>
    <path d="M75 90 H110" stroke="#1e3a8a" strokeWidth="3" strokeLinecap="round"/>
    <circle cx="130" cy="130" r="25" fill="#3b82f6" stroke="#1e3a8a" strokeWidth="3"/>
    <path d="M120 130 L127 137 L140 120" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SelectTemplateIcon = () => (
  <svg className="w-full h-full" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="50" y="50" width="100" height="120" rx="4" stroke="#1e3a8a" strokeWidth="3" fill="#bfdbfe"/>
    <circle cx="85" cy="90" r="15" stroke="#1e3a8a" strokeWidth="3" fill="#3b82f6"/>
    <path d="M110 80 H140" stroke="#1e3a8a" strokeWidth="2" strokeLinecap="round"/>
    <path d="M110 90 H140" stroke="#1e3a8a" strokeWidth="2" strokeLinecap="round"/>
    <path d="M110 100 H140" stroke="#1e3a8a" strokeWidth="2" strokeLinecap="round"/>
    <path d="M60 120 H140" stroke="#1e3a8a" strokeWidth="2" strokeLinecap="round"/>
    <path d="M60 135 H140" stroke="#1e3a8a" strokeWidth="2" strokeLinecap="round"/>
    <path d="M60 150 H120" stroke="#1e3a8a" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const CheckReceiveIcon = () => (
  <svg className="w-full h-full scale-125" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="50" y="70" width="100" height="70" rx="4" stroke="#1e3a8a" strokeWidth="3" fill="#bfdbfe"/>
    <path d="M50 70 L100 110 L150 70" stroke="#1e3a8a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M50 70 L100 110" stroke="#1e3a8a" strokeWidth="3" strokeLinecap="round"/>
    <path d="M150 70 L100 110" stroke="#1e3a8a" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

const HowItWorksWithSVG: React.FC = () => {
  const steps: StepProps[] = [
    {
      icon: <ProvideInfoIcon />,
      title: 'PROVIDE YOUR INFORMATION',
      description: 'Your data is fully secure and private. We never request access to real bank accounts, and protecting your privacy is our highest priority.'
    },
    {
      icon: <SelectTemplateIcon />,
      title: 'SELECT A TEMPLATE',
      description: 'Pick a template that suits your requirements. Our layouts are professional, keeping your statement clear, organized, and easy to read.'
    },
    {
      icon: <CheckReceiveIcon />,
      title: 'CHECK AND RECEIVE',
      description: 'Review your statement information carefully. Once confirmed, we\'ll securely prepare and deliver your final document promptly.'
    }
  ];

  return (
    <section className="bg-gray-200 py-16 mt-16">
      <div className="max-w-7xl text-center mb-12 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 tracking-wide">
            CUSTOM BANK STATEMENT
          </h2>
          <p className="text-gray-700 mx-auto leading-relaxed max-w-4xl">
            Paperwork Master is an Online Bank statement Generator tool which you used to create bank statements both personal statements or business statements. Also if you need any tax returns, credit reports, paystubs etc then use contact us page. These are not the fake bank statements this is mainly used for your personal record keeping, educational purposes or for school projects etc.
          </p>
        </div>

        {/* How It Works Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            HOW IT WORKS
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center"
            >
              {/* Icon Container - Easily replaceable */}
              <div className="bg-blue-300 rounded-lg w-full aspect-square max-w-xs mb-6 flex items-center justify-center p-12">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-3 tracking-wide">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksWithSVG;