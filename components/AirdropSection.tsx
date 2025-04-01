'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  ArrowRight,
  Check,
  Clock,
  Gift,
  Shield,
  Users,
  Zap,
  Star,
} from 'lucide-react'
import Image from 'next/image'

const AirdropSection = () => {
  const progressRef = useRef(null)
  const isInView = useInView(progressRef, { once: true })
  const [progressCount, setProgressCount] = useState(0)

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isInView) {
      const duration = 1500 // 1.5 seconds
      const totalFrames = 60
      const timePerFrame = duration / totalFrames
      let currentCount = 0

      interval = setInterval(() => {
        currentCount += 68 / totalFrames
        if (currentCount > 68) {
          clearInterval(interval)
          setProgressCount(68)
        } else {
          setProgressCount(Math.floor(currentCount))
        }
      }, timePerFrame)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isInView])

  return (
    <section className='relative py-16 md:py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-[#02122B] to-[#061B3A]'>
      {/* Enhanced background elements */}
      <div className='absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#33E6BF] to-transparent opacity-80'></div>

      {/* Animated orbit rings - hidden on mobile, visible on larger screens */}
      <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full md:w-[600px] lg:w-[800px] h-full md:h-[600px] lg:h-[800px] -z-10 opacity-0 md:opacity-10'>
        <motion.div
          className='absolute inset-0 rounded-full border border-[#33E6BF]/30'
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className='absolute inset-[15%] rounded-full border border-[#2155DF]/30'
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className='absolute inset-[30%] rounded-full border border-[#33E6BF]/30'
          animate={{ rotate: 360 }}
          transition={{ duration: 70, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Modern gradient blobs - adjusted for mobile */}
      <motion.div
        className='absolute -left-32 sm:-left-48 lg:-left-64 top-20 w-[300px] sm:w-[400px] lg:w-[600px] h-[300px] sm:h-[400px] lg:h-[600px] rounded-full bg-[#2155DF]/10 blur-[60px] sm:blur-[80px] lg:blur-[120px]'
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      <motion.div
        className='absolute -right-32 sm:-right-48 lg:-right-64 bottom-20 w-[300px] sm:w-[400px] lg:w-[600px] h-[300px] sm:h-[400px] lg:h-[600px] rounded-full bg-[#33E6BF]/10 blur-[60px] sm:blur-[80px] lg:blur-[120px]'
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />

      <div className='container mx-auto px-4 sm:px-6 relative z-10'>
        {/* Section header with floating elements */}
        <motion.div
          className='text-center mb-10 md:mb-16 lg:mb-20 relative'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 tracking-tight'>
            Claim Your{' '}
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#33E6BF] to-[#2155DF]'>
              $VULT Tokens
            </span>
          </h2>

          <p className='text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto'>
            Join the Vultisig ecosystem and secure your share of governance
            tokens before the airdrop ends.
          </p>

          {/* Floating elements - Hidden on mobile */}
          <motion.div
            className='hidden md:block absolute -top-10 right-[20%] w-16 md:w-20 h-16 md:h-20 text-[#33E6BF]/20'
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, 0],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Gift size={80} />
          </motion.div>

          <motion.div
            className='hidden md:block absolute -bottom-10 left-[15%] w-12 md:w-16 h-12 md:h-16 text-[#2155DF]/20'
            animate={{
              y: [0, 20, 0],
              rotate: [0, -10, 0],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
          >
            <Zap size={64} />
          </motion.div>
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center'>
          {/* Right Side - Airdrop Visualization (now taking 5 columns) - Shows first on mobile */}
          <motion.div
            className='lg:col-span-5 order-1 lg:order-2 mb-8 lg:mb-0'
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className='relative max-w-md mx-auto lg:max-w-none'>
              {/* Enhanced token rain animation */}
              <div className='absolute inset-0 -z-10'>
                {Array.from({ length: 20 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className='absolute rounded-full'
                    style={{
                      width: `${Math.random() * 20 + 10}px`,
                      height: `${Math.random() * 20 + 10}px`,
                      background: `linear-gradient(to bottom right, ${
                        Math.random() > 0.5 ? '#33E6BF' : '#2155DF'
                      }, ${Math.random() > 0.5 ? '#11284A' : '#061B3A'})`,
                      boxShadow: `0 0 15px ${
                        Math.random() > 0.5
                          ? 'rgba(51,230,191,0.3)'
                          : 'rgba(33,85,223,0.3)'
                      }`,
                      opacity: Math.random() * 0.7 + 0.3,
                      left: `${Math.random() * 100}%`,
                    }}
                    initial={{
                      y: -30,
                      x: Math.random() * 100 - 50,
                      rotate: Math.random() * 360,
                      scale: Math.random() * 0.5 + 0.5,
                    }}
                    animate={{
                      y: 600,
                      rotate: Math.random() * 360 + 360,
                      opacity: [0.7, 0.8, 0],
                    }}
                    transition={{
                      duration: Math.random() * 5 + 3,
                      repeat: Infinity,
                      delay: Math.random() * 5,
                      ease: 'easeIn',
                    }}
                  />
                ))}
              </div>

              {/* Main airdrop visualization */}
              <div className='relative'>
                <motion.div
                  className='absolute inset-0 rounded-3xl bg-gradient-to-r from-[#33E6BF]/20 to-[#2155DF]/20 blur-xl'
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

                <motion.div
                  className='relative z-10 bg-[#0A1C35]/80 backdrop-blur-sm rounded-3xl border border-[#11284A] p-6 sm:p-8 shadow-[0_20px_80px_rgba(6,27,58,0.5)]'
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  {/* Logo and title */}
                  <div className='mb-6 flex justify-center'>
                    <motion.div
                      className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-r from-[#33E6BF] to-[#2155DF] rounded-2xl flex items-center justify-center shadow-[0_10px_30px_rgba(51,230,191,0.3)]'
                      animate={{
                        rotate: [0, 5, 0, -5, 0],
                        scale: [1, 1.05, 1, 1.05, 1],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    >
                      <div className='bg-[#0A1C35] p-2 sm:p-3 rounded-xl'>
                        <Image
                          src='/images/vultisig.svg'
                          alt='Vultisig'
                          width={40}
                          height={40}
                          className='invert'
                        />
                      </div>
                    </motion.div>
                  </div>

                  <div className='text-center mb-6 sm:mb-8'>
                    <h3 className='text-xl sm:text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#33E6BF] to-[#2155DF]'>
                      $VULT Token Airdrop
                    </h3>
                    <p className='text-sm sm:text-base text-gray-300'>
                      Community rewards for early adopters
                    </p>
                  </div>

                  {/* Bonus cards with enhanced styling */}
                  <div className='space-y-3 sm:space-y-4'>
                    {[
                      {
                        title: 'Early User Bonus',
                        subtitle: 'For early adopters',
                        amount: '+200 $VULT',
                        icon: Gift,
                        color: '#2155DF',
                      },
                      {
                        title: 'Referral Bonus',
                        subtitle: 'Invite friends to earn more',
                        amount: '+50 $VULT',
                        icon: Users,
                        color: '#33E6BF',
                      },
                      {
                        title: 'Security Bonus',
                        subtitle: 'Enable extra vault security',
                        amount: '+100 $VULT',
                        icon: Shield,
                        color: '#2155DF',
                      },
                    ].map((bonus, i) => (
                      <motion.div
                        key={i}
                        className='relative bg-[#061B3A] rounded-xl p-3 sm:p-4 border border-[#11284A] flex items-center justify-between overflow-hidden group'
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * i, duration: 0.5 }}
                        whileHover={{ y: -3 }}
                      >
                        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#33E6BF]/5 to-[#2155DF]/5 opacity-0 group-hover:opacity-100 transition-all duration-300' />
                        <div className='flex items-center'>
                          <div
                            className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center mr-2 sm:mr-3`}
                            style={{ backgroundColor: `${bonus.color}20` }}
                          >
                            <bonus.icon
                              className='w-4 h-4 sm:w-5 sm:h-5'
                              style={{ color: bonus.color }}
                            />
                          </div>
                          <div>
                            <p className='text-white text-sm sm:text-base font-medium'>
                              {bonus.title}
                            </p>
                            <p className='text-gray-400 text-xs sm:text-sm'>
                              {bonus.subtitle}
                            </p>
                          </div>
                        </div>
                        <div
                          className={`px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm font-medium flex items-center`}
                          style={{
                            backgroundColor: `${bonus.color}20`,
                            color: bonus.color,
                          }}
                        >
                          {bonus.amount}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Floating token badges - Adjusted size for mobile */}
                  <motion.div
                    className='absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-gradient-to-r from-[#33E6BF] to-[#2155DF] flex items-center justify-center text-white font-bold text-sm sm:text-lg shadow-[0_0_20px_rgba(51,230,191,0.4)]'
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 10, 0],
                      boxShadow: [
                        '0 0 20px rgba(51,230,191,0.4)',
                        '0 0 30px rgba(51,230,191,0.6)',
                        '0 0 20px rgba(51,230,191,0.4)',
                      ],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    $VULT
                  </motion.div>

                  <motion.div
                    className='absolute -bottom-4 sm:-bottom-5 -left-4 sm:-left-5 w-10 sm:w-14 h-10 sm:h-14 rounded-full bg-gradient-to-r from-[#2155DF] to-[#33E6BF] flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-[0_0_20px_rgba(33,85,223,0.4)]'
                    animate={{
                      y: [0, 10, 0],
                      rotate: [0, -10, 0],
                      boxShadow: [
                        '0 0 20px rgba(33,85,223,0.4)',
                        '0 0 30px rgba(33,85,223,0.6)',
                        '0 0 20px rgba(33,85,223,0.4)',
                      ],
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: 0.5,
                    }}
                  >
                    $VULT
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Left Side - Airdrop Info (now taking 7 columns) - Shows second on mobile */}
          <motion.div
            className='lg:col-span-7 order-2 lg:order-1'
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className='bg-[#061B3A]/60 backdrop-blur-md rounded-3xl p-5 sm:p-6 md:p-8 border border-[#11284A]/80 shadow-[0_10px_50px_rgba(51,230,191,0.1)]'>
              <div className='flex flex-col md:flex-row mb-6 sm:mb-8 md:mb-10 gap-4 sm:gap-6'>
                <div className='md:w-1/2'>
                  {/* Token utility card */}
                  <div className='h-full bg-[#0A1C35] rounded-2xl p-4 sm:p-6 border border-[#11284A] relative overflow-hidden group transition-all duration-300 hover:border-[#33E6BF]/30 hover:shadow-[0_0_20px_rgba(51,230,191,0.15)]'>
                    <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#33E6BF] to-[#2155DF]'></div>
                    <h3 className='text-lg sm:text-xl font-bold mb-3 sm:mb-4 flex items-center'>
                      <Star className='w-4 h-4 sm:w-5 sm:h-5 mr-2 text-[#33E6BF]' />
                      Token Utility
                    </h3>

                    <ul className='space-y-3 sm:space-y-4'>
                      {[
                        {
                          title: 'Governance Voting',
                          desc: 'Shape protocol decisions',
                        },
                        {
                          title: 'Fee Discounts',
                          desc: 'Reduced transaction fees',
                        },
                        {
                          title: 'Premium Features',
                          desc: 'Early access to new releases',
                        },
                      ].map((item, i) => (
                        <motion.li
                          key={i}
                          className='flex gap-2 sm:gap-3 items-start'
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 * i, duration: 0.5 }}
                        >
                          <div className='w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#33E6BF]/20 flex items-center justify-center flex-shrink-0'>
                            <Check className='w-3 h-3 sm:w-4 sm:h-4 text-[#33E6BF]' />
                          </div>
                          <div>
                            <p className='font-semibold text-white text-sm sm:text-base'>
                              {item.title}
                            </p>
                            <p className='text-xs sm:text-sm text-gray-400'>
                              {item.desc}
                            </p>
                          </div>
                        </motion.li>
                      ))}
                    </ul>

                    <div className='absolute -right-12 -bottom-12 w-32 h-32 bg-[#33E6BF]/5 rounded-full blur-3xl group-hover:bg-[#33E6BF]/10 transition-all duration-500'></div>
                  </div>
                </div>

                <div className='md:w-1/2'>
                  {/* Countdown card */}
                  <div className='h-full bg-[#0A1C35] rounded-2xl p-4 sm:p-6 border border-[#11284A] relative overflow-hidden group transition-all duration-300 hover:border-[#2155DF]/30 hover:shadow-[0_0_20px_rgba(33,85,223,0.15)]'>
                    <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2155DF] to-[#33E6BF]'></div>
                    <h3 className='text-lg sm:text-xl font-bold mb-3 sm:mb-4 flex items-center'>
                      <Clock className='w-4 h-4 sm:w-5 sm:h-5 mr-2 text-[#2155DF]' />
                      Ends Soon
                    </h3>

                    <div className='mb-4 sm:mb-6'>
                      <p className='text-sm sm:text-base text-gray-300 mb-3 sm:mb-4'>
                        The $VULT airdrop is only available for a limited time.
                        Don&apos;t miss your chance.
                      </p>

                      {/* Countdown timer - Adjusted for mobile */}
                      <div className='grid grid-cols-4 gap-1 sm:gap-2 mb-2'>
                        {[
                          { value: '14', label: 'Days' },
                          { value: '06', label: 'Hours' },
                          { value: '42', label: 'Mins' },
                          { value: '18', label: 'Secs' },
                        ].map((unit, i) => (
                          <div key={i} className='flex flex-col items-center'>
                            <div className='bg-[#061B3A] rounded-md w-full py-1 sm:py-2 border border-[#11284A] text-center mb-1'>
                              <span className='font-mono font-bold text-sm sm:text-lg text-white'>
                                {unit.value}
                              </span>
                            </div>
                            <span className='text-xs text-gray-400'>
                              {unit.label}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className='text-xs sm:text-sm text-red-400 flex items-center'>
                        <Clock className='w-3 h-3 sm:w-4 sm:h-4 mr-1' />
                        <span>Claim before time runs out!</span>
                      </div>
                    </div>

                    <div className='absolute -right-12 -bottom-12 w-32 h-32 bg-[#2155DF]/5 rounded-full blur-3xl group-hover:bg-[#2155DF]/10 transition-all duration-500'></div>
                  </div>
                </div>
              </div>

              {/* Airdrop progress - Fixed counter implementation */}
              <div className='mb-6 sm:mb-8 md:mb-10'>
                <div className='flex justify-between items-center mb-2'>
                  <span className='text-gray-300 text-sm sm:text-base font-medium'>
                    Total Airdrop Supply
                  </span>
                  <span className='text-white font-bold flex items-center'>
                    <span className='text-sm sm:text-base md:text-lg font-mono'>
                      10,000,000
                    </span>
                    <span className='ml-1 sm:ml-2 px-1 sm:px-2 py-0.5 bg-[#11284A] rounded text-xs font-medium'>
                      $VULT
                    </span>
                  </span>
                </div>

                <div
                  className='relative h-6 sm:h-8 bg-[#0A1C35] rounded-lg p-1 mb-2'
                  ref={progressRef}
                >
                  <motion.div
                    className='absolute left-0 top-0 bottom-0 bg-gradient-to-r from-[#33E6BF] to-[#2155DF] rounded-lg h-6 sm:h-8'
                    initial={{ width: '0%' }}
                    whileInView={{ width: '68%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.2 }}
                  >
                    <div className='absolute inset-0 overflow-hidden rounded-lg'>
                      <div className='absolute inset-0 opacity-20'>
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            className='absolute left-0 top-0 bottom-0 w-20 h-full bg-white/20'
                            animate={{
                              x: ['0%', '300%'],
                            }}
                            transition={{
                              duration: 2 + i,
                              repeat: Infinity,
                              ease: 'linear',
                              delay: i * 0.4,
                            }}
                            style={{
                              left: `${i * 20}%`,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* Fixed counter indicator */}
                  <motion.div
                    className='absolute top-1/2 -translate-y-1/2 bg-white rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center shadow-[0_0_10px_rgba(51,230,191,0.5)] border-2 border-[#33E6BF]'
                    initial={{ left: '0%' }}
                    whileInView={{ left: '68%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.2 }}
                  >
                    <span className='text-[#061B3A] text-[10px] sm:text-xs font-bold'>
                      {progressCount}
                    </span>
                  </motion.div>
                </div>

                <div className='flex justify-between text-xs sm:text-sm'>
                  <span className='text-[#33E6BF]'>68% Claimed</span>
                  <span className='text-gray-400'>32% Remaining</span>
                </div>
              </div>

              {/* CTA Button */}
              <motion.div
                className='relative'
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className='absolute -inset-0.5 bg-gradient-to-r from-[#33E6BF] to-[#2155DF] rounded-xl blur-sm opacity-70'></div>
                <a
                  href='https://airdrop.vultisig.com'
                  className='relative inline-flex items-center justify-center w-full bg-[#0A1C35] text-white font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-xl text-base sm:text-lg overflow-hidden border border-[#11284A] z-10 group'
                >
                  <div className='absolute inset-0 bg-gradient-to-r from-[#33E6BF] to-[#2155DF] opacity-0 group-hover:opacity-20 transition-all duration-300'></div>
                  <span className='flex items-center'>
                    <Gift className='w-5 h-5 sm:w-6 sm:h-6 mr-1 sm:mr-2' />
                    Claim Your $VULT Tokens Now
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className='w-4 h-4 sm:w-5 sm:h-5 ml-1 sm:ml-2' />
                    </motion.span>
                  </span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AirdropSection
