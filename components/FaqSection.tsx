'use client'

import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'

interface FAQItem {
  question: string
  answer: string
}

const FAQSection: React.FC = () => {
  // FAQ data
  const faqItems: FAQItem[] = [
    {
      question: 'What is Vultisig and how does it work?',
      answer:
        'Vultisig is a seedless, multi-chain crypto wallet that uses institutional-grade threshold signature technology to secure your digital assets. Unlike traditional wallets that rely on vulnerable seed phrases, Vultisig distributes your private keys across multiple secure points, eliminating single points of failure while maintaining a simple user experience.',
    },
    {
      question: 'How is Vultisig different from other crypto wallets?',
      answer:
        'Vultisig stands apart from traditional wallets by eliminating seed phrases, supporting multiple blockchains in a single interface, and using threshold signatures for institutional-grade security. This means no single point of failure, no seed phrases to lose or have stolen, and seamless management of assets across different chains.',
    },
    {
      question: 'Do I need to be a technical expert to use Vultisig?',
      answer:
        "Not at all! We've designed Vultisig to be accessible to everyone, regardless of technical expertise. The complex security happens behind the scenes, while the user interface remains intuitive and straightforward. You get institutional-grade security without the complexity.",
    },
    {
      question: 'Which blockchains does Vultisig support?',
      answer:
        "Vultisig supports major blockchains including Ethereum, Bitcoin, Solana, Polkadot, Avalanche, Polygon, and more. Our multi-chain architecture allows you to seamlessly manage assets across different networks from a single, secure interface. We're constantly adding support for additional chains.",
    },
    {
      question: 'What happens if I lose access to my device?',
      answer:
        "Vultisig's threshold signature technology ensures you can recover your wallet even if you lose access to your device. The recovery process uses secure authentication methods rather than seed phrases, maintaining security while providing peace of mind that your assets remain accessible only to you.",
    },
    {
      question: 'Is Vultisig open source?',
      answer:
        "Yes! We believe in transparency and community review. Vultisig's core security modules are open source and have undergone rigorous security audits by independent third parties. This allows the community to verify our security claims while ensuring our technology remains at the cutting edge.",
    },
    {
      question:
        'What is the $VULT token and how can I participate in the airdrop?',
      answer:
        'The $VULT token is the governance and utility token of the Vultisig ecosystem. Token holders can participate in governance decisions, receive benefits within the platform, and more. You can participate in our airdrop by visiting airdrop.vultisig.com and following the instructions to connect your wallet and claim your tokens.',
    },
    {
      question: 'How does threshold signature technology work?',
      answer:
        'Threshold signatures split your private key into multiple shares, distributed across different secure points. To sign a transaction, a threshold number of these shares must cooperate, without ever reconstructing the full private key. This eliminates single points of failure while maintaining seamless user experience and institutional-grade security.',
    },
  ]

  return (
    <section className='relative py-20  bg-[#02122B] overflow-hidden'>
      {/* Background elements */}
      <div className='absolute inset-0 z-0'>
        <div className='absolute top-0 left-0 w-96 h-96 bg-teal-500/5 rounded-full filter blur-3xl'></div>
        <div className='absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl'></div>
      </div>

      {/* Circuit pattern background */}
      <BackgroundPatterns />

      <div className='relative z-10 container mx-auto px-4'>
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <motion.h3
            className='text-4xl md:text-5xl lg:text-6xl font-bold mb-6'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Other{' '}
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-300'>
              Asked
            </span>{' '}
            Questions
          </motion.h3>

          <motion.p
            className='text-xl text-gray-300 max-w-2xl mx-auto'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Everything you need to know about Vultisig&apos;s seedless,
            multi-chain security technology.
          </motion.p>
        </div>

        {/* FAQ accordion using shadcn/ui */}
        <div className='max-w-3xl mx-auto'>
          <Accordion type='single' collapsible className='space-y-4'>
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className='bg-gray-800/20 backdrop-blur-sm border border-gray-700/30 rounded-xl overflow-hidden data-[state=open]:shadow-[0_0_10px_rgba(20,184,166,0.1)]'
                >
                  <AccordionTrigger className='px-6 py-4 text-left hover:no-underline'>
                    <span className='text-xl font-semibold text-white'>
                      {item.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className='px-6 pb-6 text-gray-300 border-t border-gray-700/30 pt-4 mt-2'>
                    <p>{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>

        {/* CTA at the bottom of FAQ */}
        <motion.div
          className='mt-16 text-center'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className='text-lg text-gray-300 mb-6'>
            Still have questions about how Vultisig can secure your digital
            assets?
          </p>
          <div className='flex flex-wrap justify-center gap-4'>
            <Button
              variant='outline'
              className='backdrop-blur-sm text-white border border-white/20 font-semibold py-3.5 px-7 h-auto transition-all duration-300 hover:bg-white/15 hover:-translate-y-1'
              asChild
            >
              <motion.a
                href='/contact'
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Support
              </motion.a>
            </Button>

            <Button
              className='bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold py-3.5 px-7 h-auto transition-all duration-300 hover:shadow-[0_0_20px_rgba(45,212,191,0.5)] hover:-translate-y-1'
              asChild
            >
              <motion.a
                href='https://docs.vultisig.com'
                target='_blank'
                rel='noopener noreferrer'
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Read Documentation
              </motion.a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Background patterns component
const BackgroundPatterns: React.FC = () => {
  return (
    <div className='absolute inset-0 z-0 opacity-10'>
      {/* Vertical lines */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className='absolute w-px h-full bg-gradient-to-b from-transparent via-teal-400 to-transparent'
          style={{
            left: `${10 + i * 20}%`,
            top: 0,
            opacity: 0,
          }}
          animate={{
            opacity: [0, 0.8, 0],
            top: ['-100%', '100%'],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            delay: i * 4,
            repeatDelay: Math.random() * 5,
          }}
        />
      ))}

      {/* Horizontal lines */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i + 6}
          className='absolute w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent'
          style={{
            left: 0,
            top: `${15 + i * 20}%`,
            opacity: 0,
          }}
          animate={{
            opacity: [0, 0.5, 0],
            left: ['-100%', '100%'],
          }}
          transition={{
            duration: 15 + Math.random() * 15,
            repeat: Infinity,
            delay: i * 3,
            repeatDelay: Math.random() * 5,
          }}
        />
      ))}

      {/* Floating hexagons */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`hex-${i}`}
          className='absolute opacity-20'
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${30 + Math.random() * 40}px`,
            height: `${30 + Math.random() * 40}px`,
          }}
          initial={{ opacity: 0, rotate: Math.random() * 360 }}
          animate={{
            opacity: [0, 0.3, 0],
            rotate: [0, 360],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 20 + Math.random() * 20,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        >
          <svg
            width='100%'
            height='100%'
            viewBox='0 0 100 100'
            xmlns='http://www.w3.org/2000/svg'
          >
            <polygon
              points='50,0 93.3,25 93.3,75 50,100 6.7,75 6.7,25'
              fill='none'
              stroke='rgba(20, 184, 166, 0.8)'
              strokeWidth='2'
            />
          </svg>
        </motion.div>
      ))}
    </div>
  )
}

export default FAQSection
