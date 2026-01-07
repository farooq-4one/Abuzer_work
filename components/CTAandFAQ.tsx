"use client"
import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const CTAandFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'Is My Data Secure?',
      answer: 'Definitely. At Paper Work Master, privacy and data security are our top priorities. We never request access to actual bank accounts or login credentials, and none of your personal data is stored or shared. All information you provide remains under your control and is handled securely throughout the process.'
    },
    {
      question: 'How Realistic Are the Sample Statements?',
      answer: 'Our sample statements are designed to look professional and realistic. They follow standard banking formats and include all typical elements you would find in a real bank statement, making them perfect for educational purposes and record-keeping.'
    },
    {
      question: 'Are the Sample Statements Useful for Learning?',
      answer: 'Yes! Our sample statements are excellent learning tools. They help you understand financial documents, practice budgeting, prepare for loan applications, and teach financial literacy. They\'re widely used by students, educators, and individuals improving their financial knowledge.'
    },
    {
      question: 'What If I Need Extra Assistance?',
      answer: 'We\'re here to help! Our customer support team is available to assist you with any questions or concerns. You can reach out through our contact page, email, or WhatsApp support. We typically respond within 24 hours to ensure you get the help you need.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Section */}
        <div className="bg-linear-to-r from-blue-900 via-blue-800 to-gray-800 rounded-3xl p-12 text-center mb-16 shadow-2xl">
          <p className="text-white text-sm font-medium mb-4 tracking-wide">
            Get Started Now
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
            GET THE FORM IN JUST A FEW MINUTES
          </h2>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-xl">
            Generate Now
          </button>
        </div>

        {/* FAQ Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - FAQ Header */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              GOT A<br />QUESTION?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We provide answers to the most frequently asked questions from our users. If you don't see what you need, feel free to reach out to us.
            </p>
          </div>

          {/* Right Side - FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-gray-300 rounded-lg overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <span className="text-2xl text-gray-600 shrink-0">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-4 pt-2">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAandFAQ;