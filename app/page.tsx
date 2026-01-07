// app/page.tsx
import Navbar from '@/components/navbar';
import HeroSection from '@/components/hero';
import RatingCardsSection from '@/components/RatingCardsSection';
import MultiStepForm from '@/components/MultiStepForm';
import HowItWorks from '@/components/HowItWorks';
import SafeProfessionalSection from '@/components/SafeProfessionalSection';
import CTAandFAQ from '@/components/CTAandFAQ';
import OtherServicesFooter from '@/components/OtherServicesFooter';

export default function Home() {
  return (
    <main className="min-h-screen">
  <Navbar />
  <HeroSection />
  <div className="relative">
    <RatingCardsSection/>
  </div>
  <div className="my-16">
    <MultiStepForm/>
  </div>
  <div className="my-16">
    <HowItWorks/>
  </div>
  <div className="my-16">
  <SafeProfessionalSection />
  </div>
  <div className="my-16">
  <CTAandFAQ />
  </div>
  <div className="my-16">
  <OtherServicesFooter />
  </div>
</main>
  );
}