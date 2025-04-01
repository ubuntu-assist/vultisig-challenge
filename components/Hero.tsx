'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { CreativeBackgroundPattern } from './Patterns'

const LockIcon = ({ className = 'w-6 h-6' }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className={className}
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
    />
  </svg>
)

const ShieldCheckIcon = ({ className = 'w-6 h-6' }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className={className}
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
    />
  </svg>
)

const CodeIcon = ({ className = 'w-6 h-6' }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className={className}
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
    />
  </svg>
)

const ServerIcon = ({ className = 'w-6 h-6' }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className={className}
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01'
    />
  </svg>
)

const TokenIcon = ({ className = 'w-6 h-6' }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className={className}
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
    />
  </svg>
)

const KeyIcon = ({ className = 'w-6 h-6' }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className={className}
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z'
    />
  </svg>
)

const ChainIcon = ({ className = 'w-6 h-6' }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className={className}
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1'
    />
  </svg>
)

const ShieldIcon = ({ className = 'w-6 h-6' }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className={className}
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
    />
  </svg>
)

const GlobeIcon = ({ className = 'w-6 h-6' }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className={className}
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
    />
  </svg>
)

const GiftIcon = ({ className = 'w-6 h-6' }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className={className}
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7'
    />
  </svg>
)

const DownloadIcon = ({ className = 'w-6 h-6' }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className={className}
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4'
    />
  </svg>
)

const SecurityBanner: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  // Data
  const securityFeatures = [
    { name: 'Threshold Signatures', icon: KeyIcon },
    { name: 'Multi-Chain Support', icon: ChainIcon },
    { name: 'No Single Point of Failure', icon: ShieldIcon },
  ]

  const securityPillars = [
    {
      title: 'No Seed Phrase Needed',
      description:
        'Say goodbye to vulnerable seed phrases. Vultisig uses advanced threshold cryptography to secure your assets without risky seed words.',
      icon: KeyIcon,
    },
    {
      title: 'Multi-Chain Support',
      description:
        'Access all your assets across different blockchains from a single, secure interface with best-in-class security for each chain.',
      icon: GlobeIcon,
    },
    {
      title: 'Institutional-Grade Security',
      description:
        'Enjoy the same level of protection used by major financial institutions, now available for individual crypto holders.',
      icon: ShieldCheckIcon,
    },
  ]

  return (
    <section className='relative text-white bg-[#02122B]'>
      {/* Hero section with custom background image */}
      <div
        className='relative min-h-screen overflow-hidden'
        style={{
          backgroundImage: "url('/images/background.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Creative background pattern */}
        <CreativeBackgroundPattern />

        {/* Overlay to ensure text readability */}
        <div className='absolute inset-0 bg-navy-900/30 backdrop-blur-sm'></div>

        {/* Main content */}
        <div className='container mx-auto px-4 py-16 relative z-10'>
          <motion.div
            className='h-screen flex flex-col justify-center'
            variants={containerVariants}
            initial='hidden'
            animate='visible'
          >
            {/* Center content */}
            <div className='max-w-3xl mx-auto text-center'>
              <motion.div variants={itemVariants} className='mb-3'>
                <span className='inline-block py-1.5 px-4 rounded-full bg-gradient-to-r from-teal-500/20 to-blue-500/20 text-teal-400 font-semibold text-sm mb-6'>
                  Seedless. Multi-chain. Secure.
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className='text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight'
              >
                Your crypto,{' '}
                <span className='bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text inline-block'>
                  finally secured
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className='text-lg text-gray-100 mb-8 max-w-xl mx-auto'
              >
                Vultisig creates an impenetrable fortress around your assets
                with institutional-grade security technology that&apos;s
                surprisingly easy to use.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className='flex flex-col sm:flex-row justify-center gap-4 mb-10'
              >
                <Link
                  href='/download/vultisig'
                  className='flex items-center justify-center gap-2 bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold py-3.5 px-7 rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(45,212,191,0.5)] hover:-translate-y-1 group'
                >
                  <motion.span
                    initial={{ scale: 1 }}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: 'reverse',
                      ease: 'easeInOut',
                      repeatDelay: 1,
                    }}
                  >
                    <DownloadIcon className='w-5 h-5' />
                  </motion.span>
                  Download Now
                </Link>

                <Link
                  href='https://airdrop.vultisig.com'
                  target='_blank'
                  className='flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white border border-white/20 font-semibold py-3.5 px-7 rounded-lg transition-all duration-300 hover:bg-white/15 hover:-translate-y-1'
                >
                  <TokenIcon className='w-5 h-5' />
                  Claim $VULT Airdrop
                </Link>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                variants={itemVariants}
                className='flex items-center justify-center flex-wrap gap-5'
              >
                <div className='flex items-center gap-2'>
                  <ShieldCheckIcon className='w-5 h-5 text-teal-400' />
                  <span className='text-sm text-gray-300'>
                    Audited & Verified
                  </span>
                </div>
                <div className='flex items-center gap-2'>
                  <CodeIcon className='w-5 h-5 text-teal-400' />
                  <span className='text-sm text-gray-300'>Open Source</span>
                </div>
                <div className='flex items-center gap-2'>
                  <ServerIcon className='w-5 h-5 text-teal-400' />
                  <span className='text-sm text-gray-300'>
                    No Central Points of Failure
                  </span>
                </div>
              </motion.div>

              {/* Scroll down indicator */}
              <motion.div
                variants={itemVariants}
                className='absolute bottom-10 left-1/2 transform -translate-x-1/2'
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut',
                }}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='text-white/70'
                >
                  <path d='M12 5v14M5 12l7 7 7-7' />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* The remaining sections from your original design */}
      <div className='bg-gradient-to-b from-navy-900 to-navy-950'>
        <div className='container mx-auto px-4 py-20'>
          {/* Security features section */}
          <div className='relative z-10'>
            <motion.div
              className='text-center mb-16'
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-4'>
                <span className='bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text'>
                  Security Reimagined
                </span>
              </h2>
              <p className='text-lg text-gray-300 max-w-2xl mx-auto'>
                Vultisig is the first seedless, institutional-grade, multi-chain
                vault for everyone on the market.
              </p>
            </motion.div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              {securityPillars.map((pillar, index) => (
                <motion.div
                  key={index}
                  className='bg-gray-800/20 backdrop-blur-sm border border-gray-700/30 rounded-xl p-6 relative overflow-hidden group'
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-blue-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500'></div>

                  <div className='mb-4 relative'>
                    <div className='w-12 h-12 rounded-lg bg-gradient-to-br from-teal-500/20 to-blue-500/20 flex items-center justify-center'>
                      <pillar.icon className='w-6 h-6 text-teal-400' />
                    </div>
                  </div>

                  <h3 className='text-xl font-semibold mb-2'>{pillar.title}</h3>
                  <p className='text-gray-400'>{pillar.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Wallet security visualization */}
          <motion.div
            className='relative z-10 mt-24 mb-24 flex flex-col lg:flex-row items-center gap-12'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className='w-full lg:w-1/2'>
              <h2 className='text-3xl font-bold mb-6'>
                <span className='bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text'>
                  Institutional-Grade Security
                </span>{' '}
                for Everyone
              </h2>

              <p className='text-lg text-gray-300 mb-8'>
                With Vultisig, your assets are protected by the same level of
                security used by major financial institutions, without the
                complexity.
              </p>

              <ul className='space-y-4'>
                {securityFeatures.map((feature, index) => (
                  <motion.li
                    key={index}
                    className='flex items-start gap-3'
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <div className='mt-1 bg-gradient-to-r from-teal-500/20 to-blue-500/20 p-1 rounded-md'>
                      <feature.icon className='w-5 h-5 text-teal-400' />
                    </div>
                    <div>
                      <h4 className='font-medium text-white'>{feature.name}</h4>
                      <p className='text-gray-400 text-sm'>
                        {feature.name === 'Threshold Signatures'
                          ? 'Advanced cryptography that eliminates single points of failure.'
                          : feature.name === 'Multi-Chain Support'
                          ? 'Secure all your assets across different blockchains in one place.'
                          : 'No seed phrases or central servers to compromise your security.'}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className='w-full lg:w-1/2'>
              {/* Main vault visualization */}
              <motion.div
                className='bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-md p-8 rounded-2xl border border-gray-700/50 shadow-2xl relative overflow-hidden'
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true }}
              >
                {/* Security layers visual */}
                <div className='absolute inset-0 z-0'>
                  <SecurityLayersAnimation />
                </div>

                {/* Wallet Interface Mockup */}
                <div className='relative z-10 bg-gray-900/80 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50'>
                  <div className='flex items-center justify-between mb-6'>
                    <div className='flex items-center gap-3'>
                      <Image
                        src='/images/vultisig.svg'
                        alt='Vultisig Logo'
                        width={36}
                        height={36}
                        className='w-9 h-9'
                      />
                      <span className='font-bold text-lg'>Vultisig Vault</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <span className='inline-block w-2 h-2 rounded-full bg-green-500'></span>
                      <span className='text-sm text-green-400'>Secured</span>
                    </div>
                  </div>

                  <div className='mb-6'>
                    <div className='text-sm text-gray-400 mb-1'>
                      Total Balance
                    </div>
                    <div className='text-2xl font-bold'>$24,586.42</div>
                  </div>

                  <div className='grid grid-cols-2 gap-4 mb-6'>
                    <div className='bg-gray-800/50 rounded-lg p-3'>
                      <div className='flex items-center gap-2 mb-1'>
                        <div className='w-3 h-3 rounded-full bg-blue-500'></div>
                        <span className='text-sm'>ETH</span>
                      </div>
                      <div className='font-medium'>4.25 ETH</div>
                    </div>
                    <div className='bg-gray-800/50 rounded-lg p-3'>
                      <div className='flex items-center gap-2 mb-1'>
                        <div className='w-3 h-3 rounded-full bg-orange-500'></div>
                        <span className='text-sm'>BTC</span>
                      </div>
                      <div className='font-medium'>0.28 BTC</div>
                    </div>
                  </div>

                  <motion.div
                    className='flex items-center justify-center gap-3 bg-gradient-to-r from-teal-500 to-blue-500 p-3 rounded-lg text-center font-medium'
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.2 }}
                  >
                    <LockIcon className='w-5 h-5' />
                    Protected by Threshold Signatures
                  </motion.div>
                </div>

                {/* Animated security beams */}
                <SecurityBeams />
              </motion.div>
            </div>
          </motion.div>

          {/* Airdrop callout */}
          <motion.div
            className='relative z-10 mt-20 bg-gradient-to-r from-teal-900/30 to-blue-900/30 backdrop-blur-md border border-teal-500/20 rounded-2xl p-8 overflow-hidden'
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Background elements */}
            <div className='absolute inset-0 z-0'>
              <div className='absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full filter blur-3xl'></div>
              <div className='absolute bottom-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full filter blur-3xl'></div>
            </div>

            <div className='relative z-10 flex flex-col md:flex-row items-center justify-between gap-8'>
              <div>
                <h3 className='text-2xl font-bold mb-2'>
                  Vultisig Airdrop is{' '}
                  <span className='bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text'>
                    LIVE!
                  </span>
                </h3>
                <p className='text-gray-300 mb-0 md:mb-0'>
                  Don&apos;t miss your chance to claim your share of $VULT and
                  be part of the future of wallet security.
                </p>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href='https://airdrop.vultisig.com'
                  target='_blank'
                  className='flex items-center justify-center gap-2 bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold py-3.5 px-7 rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(45,212,191,0.5)] whitespace-nowrap'
                >
                  <GiftIcon className='w-5 h-5' />
                  Claim Your Airdrop
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const SecurityLayersAnimation = () => {
  return (
    <div className='absolute inset-0 flex items-center justify-center'>
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className='absolute border-2 rounded-full'
          style={{
            width: `${(i + 1) * 40}%`,
            height: `${(i + 1) * 40}%`,
            borderColor:
              i === 0
                ? 'rgba(20, 184, 166, 0.2)'
                : i === 1
                ? 'rgba(56, 189, 248, 0.15)'
                : 'rgba(20, 184, 166, 0.1)',
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.05, 1],
          }}
          transition={{
            rotate: {
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: 'linear',
            },
            scale: {
              duration: 4 + i * 2,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            },
          }}
        />
      ))}
    </div>
  )
}

const SecurityBeams = () => {
  return (
    <div className='absolute inset-0 overflow-hidden'>
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className='absolute w-px h-full bg-gradient-to-b from-transparent via-teal-400/50 to-transparent'
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
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            delay: i * 1.5,
            repeatDelay: Math.random() * 5,
            ease: 'easeOut',
          }}
        />
      ))}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i + 5}
          className='absolute w-full h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent'
          style={{
            left: 0,
            top: `${10 + i * 20}%`,
            opacity: 0,
          }}
          animate={{
            opacity: [0, 0.8, 0],
            left: ['-100%', '100%'],
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            delay: i * 1.2,
            repeatDelay: Math.random() * 5,
            ease: 'easeOut',
          }}
        />
      ))}
    </div>
  )
}

export default SecurityBanner
