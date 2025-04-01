'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Download, Shield } from 'lucide-react'
import { AndroidIcon, AppleIcon, LinuxIcon, WindowsIcon } from './Icons'

const CallToAction: React.FC = () => {
  return (
    <section className='relative py-24 overflow-hidden'>
      {/* Background with brand colors */}
      <div className='absolute inset-0 bg-[#02122B]'>
        {/* Animated gradient circles */}
        <div className='absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#2155DF]/10 blur-[100px] animate-pulse-slow'></div>
        <div className='absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-[#33E6BF]/10 blur-[100px] animate-pulse-slow-delay'></div>

        {/* Geometric patterns */}
        <div className='absolute inset-0 opacity-5'>
          <svg
            width='100%'
            height='100%'
            viewBox='0 0 100 100'
            preserveAspectRatio='none'
          >
            <defs>
              <pattern
                id='grid'
                width='8'
                height='8'
                patternUnits='userSpaceOnUse'
              >
                <path
                  d='M 8 0 L 0 0 0 8'
                  fill='none'
                  stroke='#33E6BF'
                  strokeWidth='0.5'
                />
              </pattern>
            </defs>
            <rect width='100%' height='100%' fill='url(#grid)' />
          </svg>
        </div>
      </div>

      <div className='container relative mx-auto px-4 z-10'>
        {/* Main CTA Card */}
        <motion.div
          className='relative rounded-3xl overflow-hidden'
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Card with gradient border */}
          <div className='p-0.5 rounded-3xl bg-gradient-to-r from-[#33E6BF] to-[#2155DF]'>
            <div className='bg-[#061B3A] rounded-3xl p-12 relative overflow-hidden'>
              {/* Background security patterns */}
              <div className='absolute inset-0 opacity-10'>
                {[...Array(7)].map((_, i) => (
                  <motion.div
                    key={`shield-${i}`}
                    className='absolute'
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      opacity: 0.3 + Math.random() * 0.7,
                    }}
                    animate={{
                      y: [0, 10, 0],
                      x: [0, Math.random() * 10 - 5, 0],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 5,
                      repeat: Infinity,
                      repeatType: 'reverse',
                      ease: 'easeInOut',
                      delay: Math.random() * 2,
                    }}
                  >
                    <Shield
                      size={Math.random() * 30 + 20}
                      className='text-[#33E6BF]'
                    />
                  </motion.div>
                ))}
              </div>

              <div className='flex flex-col lg:flex-row items-center justify-between gap-10 z-10 relative'>
                <div className='flex-1 text-center lg:text-left'>
                  <motion.h2
                    className='text-4xl md:text-5xl font-bold mb-6'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <span className='text-white'>Secure your assets </span>
                    <span className='bg-gradient-to-r from-[#33E6BF] to-[#2155DF] text-transparent bg-clip-text'>
                      like never before
                    </span>
                  </motion.h2>

                  <motion.p
                    className='text-gray-300 text-lg mb-8 max-w-xl'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    The first institutional-grade wallet with no seed phrase.
                    Multi-chain security for everyone.
                  </motion.p>

                  {/* Platform Icons */}
                  <motion.div
                    className='flex items-center justify-center lg:justify-start space-x-5 mb-8'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <div className='p-2 rounded-full bg-[#11284A]'>
                      <AppleIcon className='w-5 h-5 text-[#33E6BF]' />
                    </div>
                    <div className='p-2 rounded-full bg-[#11284A]'>
                      <WindowsIcon className='w-5 h-5 text-[#33E6BF]' />
                    </div>
                    <div className='p-2 rounded-full bg-[#11284A]'>
                      <AndroidIcon className='w-5 h-5 text-[#33E6BF]' />
                    </div>
                    <div className='p-2 rounded-full bg-[#11284A]'>
                      <LinuxIcon className='w-5 h-5 text-[#33E6BF]' />
                    </div>
                  </motion.div>

                  {/* Download Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <motion.a
                      href='/download'
                      className='inline-flex items-center justify-center bg-gradient-to-r from-[#33E6BF] to-[#2155DF] text-white font-bold py-4 px-8 rounded-xl text-lg shadow-[0_8px_30px_rgba(51,230,191,0.3)] hover:shadow-[0_8px_40px_rgba(51,230,191,0.5)] transition-all duration-300'
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Download className='w-5 h-5 mr-2' />
                      Download Vultisig
                    </motion.a>
                  </motion.div>
                </div>

                {/* 3D Device Mockup */}
                <motion.div
                  className='flex-1 relative max-w-md'
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  <motion.div
                    className='absolute inset-0 bg-gradient-to-r from-[#33E6BF]/20 to-[#2155DF]/20 blur-3xl rounded-full'
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      repeatType: 'reverse',
                    }}
                  />

                  <div className='relative transform perspective-1000 rotate-y-[-10deg] rotate-z-3'>
                    <Image
                      src='/images/cta.webp'
                      alt='Vultisig Secure Wallet'
                      width={500}
                      height={400}
                      className='object-contain filter drop-shadow-[0_20px_50px_rgba(51,230,191,0.3)]'
                    />
                    <div className='absolute -right-8 -top-8 w-32 h-32 rounded-full bg-[#33E6BF]/30 blur-xl' />
                    <div className='absolute -left-10 -bottom-10 w-24 h-24 rounded-full bg-[#2155DF]/30 blur-xl' />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Badge Section */}
        <motion.div
          className='mt-16 flex flex-wrap justify-center gap-6'
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <Badge
            icon={<SecurityIcon />}
            title='Seedless'
            subtitle='No seed phrases'
          />
          <Badge
            icon={<ChainIcon />}
            title='Multi-chain'
            subtitle='All major blockchains'
          />
          <Badge
            icon={<AuditIcon />}
            title='Audited'
            subtitle='Verified security'
          />
        </motion.div>
      </div>
    </section>
  )
}

interface BadgeProps {
  icon: React.ReactNode
  title: string
  subtitle: string
}

const Badge: React.FC<BadgeProps> = ({ icon, title, subtitle }) => (
  <motion.div
    className='bg-[#061B3A] border border-[#11284A] rounded-2xl px-6 py-4 min-w-[200px] flex items-center gap-4 shadow-lg'
    whileHover={{
      y: -5,
      boxShadow: '0 20px 30px -10px rgba(51,230,191,0.15)',
      borderColor: '#33E6BF',
    }}
  >
    <div className='p-2 rounded-xl bg-gradient-to-br from-[#33E6BF]/10 to-[#2155DF]/10'>
      {icon}
    </div>
    <div>
      <p className='font-bold text-white'>{title}</p>
      <p className='text-gray-400 text-sm'>{subtitle}</p>
    </div>
  </motion.div>
)

// Icons
const SecurityIcon: React.FC = () => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    className='text-[#33E6BF]'
  >
    <path
      d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M12 8V5'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M8.5 9.5L6 7'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M8.5 14.5L6 17'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M15.5 9.5L18 7'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M15.5 14.5L18 17'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M12 19V16'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

const ChainIcon: React.FC = () => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    className='text-[#33E6BF]'
  >
    <path
      d='M13.5 8C14.1667 7.33333 15.3 5.8 14.5 5C13.7 4.2 12.1667 5.33333 11.5 6C10.8333 6.66667 9.7 8.2 10.5 9C11.3 9.8 12.8333 8.66667 13.5 8Z'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M19.5 14C20.1667 13.3333 21.3 11.8 20.5 11C19.7 10.2 18.1667 11.3333 17.5 12C16.8333 12.6667 15.7 14.2 16.5 15C17.3 15.8 18.8333 14.6667 19.5 14Z'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M7.5 18C8.16667 17.3333 9.3 15.8 8.5 15C7.7 14.2 6.16667 15.3333 5.5 16C4.83333 16.6667 3.7 18.2 4.5 19C5.3 19.8 6.83333 18.6667 7.5 18Z'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M12.5 15.5L16 13.5'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M6.5 13.5L10 15.5'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M12.5 9.5V13.5'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

const AuditIcon: React.FC = () => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    className='text-[#33E6BF]'
  >
    <path
      d='M9 12L11 14L15 10'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export default CallToAction
