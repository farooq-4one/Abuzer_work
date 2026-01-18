"use client"
import Link from 'next/link';
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
      answer: 'At Paperwork Master, privacy and data security are our highest priorities. We never request access to actual bank accounts or login credentials, and we do not store or share your personal information. All data you provide remains under your control and is handled securely throughout the entire process.'
    },
    {
      question: 'How Realistic Are the Sample Statements?',
      answer: 'Our sample statements are carefully crafted and professionally formatted to ensure clarity and organization. Each template follows a realistic layout, maintaining consistency and readability, and provides a polished, professional appearance suitable for personal records or educational purposes.'
    },
    {
      question: 'Are the Sample Statements Useful for Learning?',
      answer: 'Our sample statements are expertly designed for educational and training purposes, providing a clear and realistic view of financial documents. They are ideal for teaching financial literacy, illustrating banking formats, and helping students understand account layouts. With a safe, structured approach, these templates make it easy to learn about budgeting, transaction summaries, and record organization, all while presenting a polished, professional appearance.'
    },
    {
      question: 'What If I Need Extra Assistance?',
      answer: 'If you have any questions or need assistance, our friendly support team is always ready to help. You can contact us by email at info@paperworkmaster.net or by phone at +1 786-954-7429. We are committed to making your experience with WorkForm Solutions safe, smooth, and hassle-free.'
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
          <Link href='https://master-paper-work.vercel.app/generate'>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-xl w-full sm:w-auto">
            Generate Now
          </button>
          </Link>
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