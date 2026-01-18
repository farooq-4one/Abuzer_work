"use client";
import React, { useState } from 'react';

const initialFormData = {
  name: '',
  phone: '',
  email: '',
  country: '',
  address: '',
  city: '',
  state: '',
  zip: '',
  bank: '',
  companyName: '',
  payrollOption: '',
  depositDate: '',
  depositAmount: '',
  endingBalance: '',
  accountNumber: '',
  howMany: '',
  paymentOption: ''
};

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const usaStates = [
    'Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut',
    'Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa',
    'Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan',
    'Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada',
    'New Hampshire','New Jersey','New Mexico','New York','North Carolina',
    'North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island',
    'South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont',
    'Virginia','Washington','West Virginia','Wisconsin','Wyoming'
  ];

  const majorBanks = [
    'Chase Bank','Bank of America','Wells Fargo','Citibank','U.S. Bank',
    'PNC Bank','Capital One','TD Bank','Fifth Third Bank','Truist Bank',
    'Regions Bank','M&T Bank'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async () => {
    if (!isStep3Valid() || !isStep2Valid() || !isStep1Valid()) return;

    try {
      setIsSubmitting(true);
      setError(null);

      const res = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || 'Failed to submit form');
      }

      alert('Form submitted successfully!');
      setFormData(initialFormData);
      setCurrentStep(1);
    } catch (err: any) {
      console.error('Error submitting form:', err);
      setError(err?.message || 'Something went wrong. Please try again.');
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isStep1Valid = () =>
    formData.name && formData.phone && formData.email &&
    formData.country && formData.address && formData.city &&
    formData.state && formData.zip;

  const isStep2Valid = () =>
    formData.bank && formData.companyName && formData.payrollOption &&
    formData.depositDate && formData.depositAmount && formData.endingBalance;

  const isStep3Valid = () =>
    formData.howMany && formData.paymentOption;

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-gray-200 px-4">
      <div className="w-full max-w-4xl">
        
        {currentStep === 1 && (
          <div className="text-center mb-2">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              3 STEPS TO GENERATE STATEMENT
            </h1>
          </div>
        )}

        {/* Progress */}
        <div className="flex items-center justify-between mb-2 max-w-2xl mx-auto">
          {[1,2,3].map(step => (
            <React.Fragment key={step}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold
                ${currentStep >= step ? 'bg-blue-900 text-white' : 'border-2 border-gray-300 text-gray-600'}`}>
                {step}
              </div>
              {step !== 3 && (
                <div className={`flex-1 h-0.5 mx-2 ${currentStep > step ? 'bg-blue-900' : 'bg-gray-300'}`} />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Form */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10">
          
          {/* STEP 1 */}
          {currentStep === 1 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                ['name','Name','text'],
                ['phone','Phone','tel'],
                ['email','Email','email'],
                ['address','Address','text'],
                ['city','City','text'],
                ['zip','Zip','text']
              ].map(([name,label,type]) => (
                <div key={name}>
                  <label className="block mb-2 font-medium text-gray-900">
                    {label} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type={type}
                    name={name}
                    value={(formData as any)[name]}
                    onChange={handleInputChange}
                    className="w-full px-5 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  />
                </div>
              ))}

              <div>
                <label className="block mb-2 font-medium">Country *</label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full px-5 py-3 bg-gray-100 border border-gray-300 rounded-full"
                >
                  <option value=""></option>
                  <option value="USA">USA</option>
                  <option value="UK">UK</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 font-medium">States - Province *</label>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="w-full px-5 py-3 bg-gray-100 border border-gray-300 rounded-full"
                >
                  <option value="">Select State</option>
                  {usaStates.map(s => <option key={s}>{s}</option>)}
                </select>
              </div>

              <div className="md:col-span-2 mt-6">
                <button
                  onClick={handleNext}
                  disabled={!isStep1Valid()}
                  className="w-full py-3 bg-blue-900 text-white rounded-full font-semibold disabled:bg-gray-400"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {currentStep === 2 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <select name="bank" value={formData.bank} onChange={handleInputChange}
                className="w-full px-5 py-3 bg-gray-100 border rounded-full">
                <option value="">Select Bank</option>
                {majorBanks.map(b => <option key={b}>{b}</option>)}
              </select>

              <input name="companyName" value={formData.companyName} onChange={handleInputChange}
                placeholder="Company Name"
                className="w-full px-5 py-3 bg-gray-100 border rounded-full" />

              <select name="payrollOption" value={formData.payrollOption} onChange={handleInputChange}
                className="w-full px-5 py-3 bg-gray-100 border rounded-full">
                <option value="">Select</option>
                <option value="weekly">Weekly</option>
                <option value="bi-weekly">Bi-Weekly</option>
                <option value="monthly">Monthly</option>
              </select>

              <input type="date" name="depositDate" value={formData.depositDate}
                onChange={handleInputChange}
                className="w-full px-5 py-3 bg-gray-100 border rounded-full" />

              <input name="depositAmount" value={formData.depositAmount}
                onChange={handleInputChange}
                placeholder="$00.00"
                className="w-full px-5 py-3 bg-gray-100 border rounded-full" />

              <input name="endingBalance" value={formData.endingBalance}
                onChange={handleInputChange}
                placeholder="$00.00"
                className="w-full px-5 py-3 bg-gray-100 border rounded-full" />

              <div className="md:col-span-2 grid grid-cols-2 gap-4">
                <button onClick={handlePrevious} className="py-4 bg-blue-900 text-white rounded-full">Previous</button>
                <button onClick={handleNext} disabled={!isStep2Valid()}
                  className="py-4 bg-blue-900 text-white rounded-full disabled:bg-gray-400">Next</button>
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {currentStep === 3 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input name="accountNumber" value={formData.accountNumber}
                onChange={handleInputChange}
                placeholder="Account Number (Optional)"
                className="w-full px-5 py-3 bg-gray-100 border rounded-full" />

              <select
                name="howMany"
                value={formData.howMany}
                onChange={handleInputChange}
                className="w-full px-5 py-3 bg-gray-100 border rounded-full"
              >
                <option value="" disabled>
                  Select an option
                </option>

                {/* Personal */}
                <option value="1-month-personal">1 Month (Personal) $89.99</option>
                <option value="2-month-personal">2 Month (Personal) $174.99</option>
                <option value="3-month-personal">3 Month (Personal) $264.99</option>
                <option value="6-month-personal">6 Month (Personal) $549.99</option>

                {/* Business */}
                <option value="1-month-business">1 Month (Business) $100</option>
                <option value="2-month-business">2 Month (Business) $214.99</option>
                <option value="3-month-business">3 Month (Business) $324.99</option>
                <option value="6-month-business">6 Month (Business) $654.99</option>
              </select>

              <select name="paymentOption" value={formData.paymentOption} onChange={handleInputChange}
                className="w-full px-5 py-3 bg-gray-100 border rounded-full">
                <option value="">Venmo</option>
                <option value="bitcoin">Bitcoin</option>
                <option value="zelle">Zelle</option>
                <option value="venmo">Venmo</option>
              </select>

              <div className="md:col-span-2 grid grid-cols-2 gap-4">
                <button onClick={handlePrevious} className="py-4 bg-blue-900 text-white rounded-full">Previous</button>
                <button
                  onClick={handleSubmit}
                  disabled={!isStep3Valid() || isSubmitting}
                  className="py-4 bg-blue-900 text-white rounded-full disabled:bg-gray-400"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
