'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Check,
  Layers,
  RefreshCw,
  Shield,
  Clock,
  Zap,
  Lock,
  Globe,
} from 'lucide-react'
import Image from 'next/image'

const ExperienceSection = () => {
  // For animated counters
  const counterRefs = {
    keyGen: useRef<HTMLDivElement>(null),
    keySign: useRef<HTMLDivElement>(null),
    reShare: useRef<HTMLDivElement>(null),
  }

  const keyGenInView = useInView(counterRefs.keyGen, { once: true })
  const keySignInView = useInView(counterRefs.keySign, { once: true })
  const reShareInView = useInView(counterRefs.reShare, { once: true })

  const [keyGenValue, setKeyGenValue] = useState(0)
  const [keySignValue, setKeySignValue] = useState(0)
  const [reShareValue, setReShareValue] = useState(0)

  // Animate the counter values when in view - fixed to use useEffect
  useEffect(() => {
    let interval: NodeJS.Timeout
    if (keyGenInView) {
      interval = setInterval(() => {
        setKeyGenValue((prev) => {
          const newValue = prev + 1
          if (newValue >= 20) {
            clearInterval(interval)
            return 20
          }
          return newValue
        })
      }, 50)
    }
    return () => {
      if (interval) clearInterval(interval)
    }
  }, [keyGenInView])

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (keySignInView) {
      interval = setInterval(() => {
        setKeySignValue((prev) => {
          const newValue = prev + 1
          if (newValue >= 12) {
            clearInterval(interval)
            return 12
          }
          return newValue
        })
      }, 80)
    }
    return () => {
      if (interval) clearInterval(interval)
    }
  }, [keySignInView])

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (reShareInView) {
      interval = setInterval(() => {
        setReShareValue((prev) => {
          const newValue = prev + 1
          if (newValue >= 20) {
            clearInterval(interval)
            return 20
          }
          return newValue
        })
      }, 50)
    }
    return () => {
      if (interval) clearInterval(interval)
    }
  }, [reShareInView])

  // Data for feature cards
  const securityFeatures = [
    {
      title: 'Vault Generation',
      description:
        'Fast or Secure Vaults. Choose your vault type. Key generation is fast. No one device holds the vault private key, just vault shares.',
      metric: 'KeyGen time:',
      value: '3-5 seconds',
      progressRef: counterRefs.keyGen,
      progressValue: keyGenValue,
      icon: Layers,
      color: '#33E6BF',
      secondaryColor: '#2155DF',
      delay: 0,
    },
    {
      title: 'Transaction Signing',
      description:
        'One device starts the transaction. A second paired device confirms the transaction. It is natively "two-factor" and is done in real time.',
      metric: 'KeySign time:',
      value: '1-3 seconds',
      progressRef: counterRefs.keySign,
      progressValue: keySignValue,
      icon: Shield,
      color: '#2155DF',
      secondaryColor: '#33E6BF',
      delay: 0.1,
    },
    {
      title: 'Resharing',
      description:
        'Lost a device? Replace it easily without changing the vault or address. Want to increase security? Go from 2-of-3 to 3-of-4 setup easily.',
      metric: 'Reshare Time:',
      value: '3-5 seconds',
      progressRef: counterRefs.reShare,
      progressValue: reShareValue,
      icon: RefreshCw,
      color: '#33E6BF',
      secondaryColor: '#2155DF',
      delay: 0.2,
    },
  ]

  // Advantages list data
  const advantages = [
    {
      text: "Institutional-grade security that's fast and easy to use",
      delay: 0,
    },
    {
      text: 'No single point of failure - recover from lost or compromised devices',
      delay: 0.1,
    },
    {
      text: 'Adaptive security model - scale up protection as your assets grow',
      delay: 0.2,
    },
    {
      text: 'Multi-chain support with the same security standards across all blockchains',
      delay: 0.3,
    },
    {
      text: 'Open-source and audited by top security researchers',
      delay: 0.4,
    },
  ]

  return (
    <section className='relative py-16 md:py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-[#02122B] to-[#061B3A]'>
      {/* Enhanced background elements */}
      <div className='absolute inset-0 opacity-5'>
        <svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'>
          <pattern
            id='security-grid'
            width='40'
            height='40'
            patternUnits='userSpaceOnUse'
          >
            <path
              d='M 0 0 L 40 0 L 40 40 L 0 40 Z'
              fill='none'
              stroke='#33E6BF'
              strokeWidth='0.5'
              strokeDasharray='2,4'
            />
          </pattern>
          <rect width='100%' height='100%' fill='url(#security-grid)' />
        </svg>
      </div>

      {/* Animated orbit rings */}
      <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] md:max-w-[800px] aspect-square -z-10 opacity-10'>
        <motion.div
          className='absolute inset-0 rounded-full border border-[#33E6BF]/30'
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className='absolute inset-[10%] rounded-full border border-[#2155DF]/30'
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Gradient blobs */}
      <motion.div
        className='absolute -top-40 right-0 w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px] rounded-full bg-[#2155DF]/10 blur-[80px] md:blur-[120px]'
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      <motion.div
        className='absolute -bottom-40 left-0 w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px] rounded-full bg-[#33E6BF]/10 blur-[80px] md:blur-[120px]'
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />

      <div className='container mx-auto px-4 sm:px-6 relative z-10'>
        {/* Section Header */}
        <motion.div
          className='text-center mb-12 md:mb-16 lg:mb-24 relative'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-tight'>
            Experience{' '}
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#33E6BF] to-[#2155DF]'>
              Security
            </span>{' '}
            Without Sacrifice
          </h2>

          <p className='text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto'>
            Institutional-grade security that&apos;s fast, easy, and reliable
          </p>

          {/* Floating elements - hidden on small screens */}
          <motion.div
            className='absolute -top-20 right-[20%] text-[#33E6BF]/20 hidden md:block'
            animate={{
              y: [0, -15, 0],
              rotate: [0, 10, 0],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Lock size={60} />
          </motion.div>

          <motion.div
            className='absolute -bottom-10 left-[25%] text-[#2155DF]/20 hidden md:block'
            animate={{
              y: [0, 10, 0],
              rotate: [0, -10, 0],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
          >
            <Shield size={50} />
          </motion.div>
        </motion.div>

        {/* Feature Cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 md:mb-20 lg:mb-24'>
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className='bg-[#061B3A]/70 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-[#11284A] relative overflow-hidden group'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: feature.delay }}
              whileHover={{ y: -8 }}
            >
              {/* Animated border line */}
              <div
                className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r'
                style={{
                  backgroundImage: `linear-gradient(to right, ${feature.color}, ${feature.secondaryColor})`,
                }}
              ></div>

              {/* Background glow */}
              <div
                className='absolute -right-16 -top-16 w-32 h-32 rounded-full blur-2xl opacity-30'
                style={{
                  backgroundColor: `${feature.color}20`,
                }}
              ></div>

              {/* Header with icon */}
              <div className='flex items-center mb-4'>
                <div
                  className='w-10 h-10 sm:w-11 sm:h-11 rounded-lg flex items-center justify-center mr-3'
                  style={{
                    backgroundColor: `${feature.color}15`,
                  }}
                >
                  <feature.icon
                    className='w-5 h-5 sm:w-6 sm:h-6'
                    style={{ color: feature.color }}
                  />
                </div>
                <h4 className='text-lg sm:text-xl font-bold'>
                  {feature.title}
                </h4>
              </div>

              {/* Metric display */}
              <div className='flex items-center justify-between mb-3 bg-[#0A1C35] p-2 sm:p-3 rounded-lg border border-[#11284A]'>
                <span className='text-sm sm:text-base text-gray-400'>
                  {feature.metric}
                </span>
                <span
                  className='text-sm sm:text-base font-bold'
                  style={{ color: feature.color }}
                >
                  {feature.value}
                </span>
              </div>

              {/* Progress bar */}
              <div
                className='w-full bg-[#0A1C35] h-2 sm:h-3 rounded-full mb-4 sm:mb-5 overflow-hidden'
                ref={feature.progressRef}
              >
                <motion.div
                  className='h-full rounded-full relative overflow-hidden'
                  style={{
                    width: `${feature.progressValue}%`,
                    background: `linear-gradient(to right, ${feature.color}, ${feature.secondaryColor})`,
                  }}
                  initial={{ width: 0 }}
                  transition={{ duration: 1.5, delay: 0.4 }}
                >
                  {/* Animated shimmer effect */}
                  <div className='absolute inset-0'>
                    <motion.div
                      className='absolute top-0 left-0 w-20 h-full bg-white/10 skew-x-[-20deg]'
                      animate={{ x: ['-100%', '300%'] }}
                      transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: 'linear',
                      }}
                    />
                  </div>
                </motion.div>
              </div>

              {/* Description */}
              <p className='text-sm sm:text-base text-gray-300 mb-2'>
                {feature.description}
              </p>

              {/* Animated icon */}
              <motion.div
                className='absolute bottom-4 right-4 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center'
                style={{ backgroundColor: `${feature.color}15` }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: index }}
              >
                <feature.icon
                  className='w-5 h-5 sm:w-6 sm:h-6'
                  style={{ color: feature.color }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section with redesigned layout */}
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center'>
          {/* Left Side - Security Image (4 columns) */}
          <motion.div
            className='lg:col-span-5 order-2 lg:order-1'
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className='relative mx-auto max-w-md lg:max-w-full'>
              {/* Animated backdrop */}
              <motion.div
                className='absolute -inset-6 rounded-3xl bg-gradient-to-r from-[#33E6BF]/10 to-[#2155DF]/10 blur-xl'
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              {/* Image container with 3D effect */}
              <div
                className='relative rounded-xl overflow-hidden border border-[#11284A] transform'
                style={{
                  perspective: '1000px',
                  transform: 'rotateY(-5deg) rotateX(5deg)',
                }}
              >
                {/* Security visualizations */}
                <div className='relative'>
                  <Image
                    alt='Seamless Security'
                    src='/images/advantages.webp'
                    width={500}
                    height={500}
                    className='w-full h-auto'
                  />

                  {/* Overlay layer */}
                  <div className='absolute inset-0 bg-[#02122B]/20'></div>

                  {/* Animated security nodes */}
                  <motion.div
                    className='absolute top-1/4 left-1/4 w-3 h-3 sm:w-5 sm:h-5 rounded-full bg-[#33E6BF] shadow-[0_0_15px_rgba(51,230,191,0.6)]'
                    animate={{
                      scale: [1, 1.5, 1],
                      boxShadow: [
                        '0 0 15px rgba(51,230,191,0.3)',
                        '0 0 25px rgba(51,230,191,0.6)',
                        '0 0 15px rgba(51,230,191,0.3)',
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: 0.5,
                    }}
                  />

                  <motion.div
                    className='absolute top-1/2 right-1/4 w-3 h-3 sm:w-5 sm:h-5 rounded-full bg-[#2155DF] shadow-[0_0_15px_rgba(33,85,223,0.6)]'
                    animate={{
                      scale: [1, 1.5, 1],
                      boxShadow: [
                        '0 0 15px rgba(33,85,223,0.3)',
                        '0 0 25px rgba(33,85,223,0.6)',
                        '0 0 15px rgba(33,85,223,0.3)',
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: 1.5,
                    }}
                  />

                  <motion.div
                    className='absolute bottom-1/4 left-1/3 w-3 h-3 sm:w-5 sm:h-5 rounded-full bg-[#33E6BF] shadow-[0_0_15px_rgba(51,230,191,0.6)]'
                    animate={{
                      scale: [1, 1.5, 1],
                      boxShadow: [
                        '0 0 15px rgba(51,230,191,0.3)',
                        '0 0 25px rgba(51,230,191,0.6)',
                        '0 0 15px rgba(51,230,191,0.3)',
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: 2.5,
                    }}
                  />
                </div>

                {/* Animated particles around the image - reduced for mobile */}
                <div className='absolute inset-0 overflow-hidden pointer-events-none'>
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className='absolute rounded-full'
                      style={{
                        width: `${Math.random() * 4 + 2}px`,
                        height: `${Math.random() * 4 + 2}px`,
                        backgroundColor:
                          Math.random() > 0.5 ? '#33E6BF' : '#2155DF',
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        opacity: Math.random() * 0.6 + 0.2,
                      }}
                      animate={{
                        y: [0, Math.random() * 20 - 10],
                        x: [0, Math.random() * 20 - 10],
                        opacity: [0.3, 0.7, 0.3],
                      }}
                      transition={{
                        duration: Math.random() * 3 + 3,
                        repeat: Infinity,
                        repeatType: 'reverse',
                        ease: 'easeInOut',
                        delay: Math.random() * 2,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Enhanced floating badge */}
              <motion.div
                className='absolute -bottom-3 sm:-bottom-5 -right-3 sm:-right-5 bg-gradient-to-r from-[#33E6BF] to-[#2155DF] rounded-xl px-3 py-2 sm:px-4 sm:py-2.5 text-white text-xs sm:text-sm font-medium shadow-[0_5px_20px_rgba(51,230,191,0.3)]'
                initial={{ opacity: 0, scale: 0, rotate: 6 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 6 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className='flex items-center gap-1 sm:gap-1.5'>
                  <Shield className='w-3 h-3 sm:w-4 sm:h-4' />
                  <span>Threshold Secured</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Security Advantages (8 columns) */}
          <motion.div
            className='lg:col-span-7 order-1 lg:order-2'
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className='bg-[#061B3A]/60 backdrop-blur-md rounded-2xl p-4 sm:p-6 md:p-8 border border-[#11284A]/80 shadow-[0_10px_50px_rgba(6,27,58,0.3)]'>
              <div className='flex items-center mb-4 sm:mb-6 gap-3 sm:gap-4'>
                <div className='p-2 sm:p-3 rounded-lg bg-[#33E6BF]/10'>
                  <Shield className='w-5 h-5 sm:w-6 sm:h-6 text-[#33E6BF]' />
                </div>
                <h4 className='text-xl sm:text-2xl font-bold'>
                  The Vultisig Advantage
                </h4>
              </div>

              <div className='space-y-3 sm:space-y-5 mb-6 sm:mb-8'>
                {advantages.map((item, i) => (
                  <motion.div
                    key={i}
                    className='flex items-start relative group'
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: item.delay }}
                    whileHover={{ x: 3 }}
                  >
                    <div className='min-w-[24px] sm:min-w-[28px] h-6 sm:h-7 rounded-full bg-[#33E6BF]/15 flex items-center justify-center mr-2 sm:mr-3 mt-0.5 group-hover:bg-[#33E6BF]/25 transition-colors duration-300'>
                      <Check className='w-3 h-3 sm:w-4 sm:h-4 text-[#33E6BF]' />
                    </div>
                    <div>
                      <p className='text-sm sm:text-base text-gray-200 group-hover:text-white transition-colors duration-300'>
                        {item.text}
                      </p>
                    </div>

                    {/* Gradient line that appears on hover */}
                    <motion.div className='absolute -bottom-1.5 sm:-bottom-2.5 left-0 right-0 h-px bg-gradient-to-r from-[#33E6BF]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                  </motion.div>
                ))}
              </div>

              {/* Stats section */}
              <div className='grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-4'>
                {[
                  {
                    label: 'Security Score',
                    value: '99.9%',
                    icon: Shield,
                    color: '#33E6BF',
                  },
                  {
                    label: 'Response Time',
                    value: '< 3s',
                    icon: Clock,
                    color: '#2155DF',
                  },
                  {
                    label: 'Blockchain Support',
                    value: '15+',
                    icon: Globe,
                    color: '#33E6BF',
                  },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className='bg-[#0A1C35] rounded-xl p-3 sm:p-4 border border-[#11284A]'
                  >
                    <div className='flex items-center gap-1 sm:gap-2 mb-1'>
                      <stat.icon
                        className='w-3 h-3 sm:w-4 sm:h-4'
                        style={{ color: stat.color }}
                      />
                      <span className='text-xs sm:text-sm text-gray-400'>
                        {stat.label}
                      </span>
                    </div>
                    <div
                      className='text-lg sm:text-xl font-bold'
                      style={{ color: stat.color }}
                    >
                      {stat.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Call to action */}
              <motion.div
                className='flex items-center justify-center p-3 sm:p-4 rounded-xl bg-gradient-to-r from-[#11284A] to-[#0A1C35] border border-[#11284A] group cursor-pointer'
                whileHover={{ y: -3 }}
              >
                <div className='flex items-center gap-2'>
                  <Zap className='w-4 h-4 sm:w-5 sm:h-5 text-[#33E6BF] group-hover:text-[#33E6BF]' />
                  <span className='text-sm sm:text-base text-white font-medium'>
                    Experience institutional-grade security today
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
