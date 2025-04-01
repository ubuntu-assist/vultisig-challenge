import Hero from '@/components/Hero'
import AirdropSection from '@/components/AirdropSection'
import InformationSection from '@/components/InformationSection'
import DescriptionSection from '@/components/DescriptionSection'
import ExperienceSection from '@/components/ExperienceSection'
import BestFeaturesSection from '@/components/BestFeaturesSection'
import OtherFeaturesSection from '@/components/OtherFeaturesSection'
import BenefitsSection from '@/components/BenefitsSection'
import CallToAction from '@/components/CallToAction'
import FAQSection from '@/components/FaqSection'
import { ChatAssistant } from '@/components/ChatAssistant'
import SolutionsSection from '@/components/SolutionsSection'

export default function Home() {
  return (
    <>
      <main className='overflow-hidden'>
        <Hero />
        <AirdropSection />

        <InformationSection />

        <DescriptionSection />

        <SolutionsSection />

        <ExperienceSection />

        <BestFeaturesSection />

        <OtherFeaturesSection />

        <BenefitsSection />

        <FAQSection />

        <CallToAction />

        <ChatAssistant />
      </main>
    </>
  )
}
