'use client'

import { AnimatePresence, motion } from 'framer-motion'
import {
  AlertTriangleIcon,
  HardDriveIcon,
  HelpCircleIcon,
  KeyIcon,
  SearchIcon,
  SettingsIcon,
  ShieldCheckIcon,
  WarningIcon,
} from './Icons'
import Image from 'next/image'

const DescriptionSection = () => {
  return (
    <section className='py-12 sm:py-16 md:py-24 relative overflow-hidden bg-[#02122B]'>
      {/* Background elements */}
      <div className='absolute inset-0'></div>
      <div className='absolute top-0 right-0 w-1/3 h-1/3 bg-red-500/5 rounded-full blur-3xl'></div>
      <div className='absolute bottom-0 left-0 w-1/4 h-1/4 bg-orange-500/5 rounded-full blur-3xl'></div>

      <div className='container mx-auto px-4 sm:px-6 relative z-10'>
        <div className='text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16'>
          <motion.h2
            className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What is{' '}
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-300'>
              wrong
            </span>{' '}
            with wallets
          </motion.h2>
          <motion.p
            className='text-lg sm:text-xl text-gray-300'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Current wallet solutions fall short in critical areas
          </motion.p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center'>
          <div>
            <div className='space-y-4 sm:space-y-6 md:space-y-8'>
              {/* Problem 1 - Single-signature wallets */}
              <motion.div
                className='bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-4 sm:p-6 border border-gray-800 relative overflow-hidden group'
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                {/* Danger zone indicator */}
                <div className='absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16'>
                  <div className='absolute top-0 right-0 w-full h-full bg-red-500/20 transform rotate-45 translate-x-1/2 -translate-y-1/2'></div>
                  <WarningIcon className='absolute top-2 right-2 w-4 h-4 sm:w-5 sm:h-5 text-red-500' />
                </div>

                <div className='absolute -right-10 -top-10 w-40 h-40 bg-red-500/10 rounded-full blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-300'></div>

                <h3 className='text-lg sm:text-xl font-bold mb-2 sm:mb-4 relative z-10 flex items-center'>
                  <KeyIcon className='w-4 h-4 sm:w-5 sm:h-5 mr-2 text-red-400' />
                  Single-signature wallets are dangerous
                </h3>
                <p className='text-sm sm:text-base text-gray-300 mb-3 sm:mb-4 relative z-10'>
                  Accidentally lose your phone? Upload your private keys to a
                  phishing site? Download a trojan and drain your hot wallet?
                </p>

                <div className='relative'>
                  <motion.div
                    className='bg-red-500/10 text-red-400 px-3 py-2 sm:px-4 sm:py-3 rounded-lg relative z-10 border-l-4 border-red-500 group-hover:border-red-400 transition-colors duration-300'
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <div className='flex items-center'>
                      <AlertTriangleIcon className='w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0' />
                      <span className='text-sm sm:text-base'>
                        One mistake and forever rekt.
                      </span>
                    </div>
                  </motion.div>

                  <AnimatePresence>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.6 }}
                      className='absolute -right-2 -bottom-2 bg-red-500/80 text-white text-xs px-2 py-1 rounded-lg transform rotate-3'
                    >
                      <span className='whitespace-nowrap'>High Risk!</span>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>

              {/* Problem 2 - Hardware wallets */}
              <motion.div
                className='bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-4 sm:p-6 border border-gray-800 relative overflow-hidden group'
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className='absolute -right-10 -top-10 w-40 h-40 bg-orange-500/10 rounded-full blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-300'></div>

                <h3 className='text-lg sm:text-xl font-bold mb-2 sm:mb-4 relative z-10 flex items-center'>
                  <HardDriveIcon className='w-4 h-4 sm:w-5 sm:h-5 mr-2 text-orange-400' />
                  Hardware wallets are clunky
                </h3>
                <p className='text-sm sm:text-base text-gray-300 mb-3 sm:mb-4 relative z-10'>
                  Small screens, small buttons, annoying interfaces. Complicated
                  setup instructions, scary firmware updates and confusing
                  transactions.
                </p>

                <div className='relative'>
                  <motion.div
                    className='bg-orange-500/10 text-orange-400 px-3 py-2 sm:px-4 sm:py-3 rounded-lg relative z-10 border-l-4 border-orange-500 group-hover:border-orange-400 transition-colors duration-300'
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <div className='flex items-center'>
                      <HelpCircleIcon className='w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0' />
                      <span className='text-sm sm:text-base'>
                        Why can&apos;t it be better?
                      </span>
                    </div>
                  </motion.div>

                  <AnimatePresence>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.7 }}
                      className='absolute -right-2 -bottom-2 bg-orange-500/80 text-white text-xs px-2 py-1 rounded-lg transform -rotate-2'
                    >
                      <span className='whitespace-nowrap'>Poor UX!</span>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>

              {/* Problem 3 - Multi-signature wallets */}
              <motion.div
                className='bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-4 sm:p-6 border border-gray-800 relative overflow-hidden group'
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className='absolute -right-10 -top-10 w-40 h-40 bg-yellow-500/10 rounded-full blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-300'></div>

                <h3 className='text-lg sm:text-xl font-bold mb-2 sm:mb-4 relative z-10 flex items-center'>
                  <SettingsIcon className='w-4 h-4 sm:w-5 sm:h-5 mr-2 text-yellow-400' />
                  Multi-signature wallets are painful
                </h3>
                <p className='text-sm sm:text-base text-gray-300 mb-3 sm:mb-4 relative z-10'>
                  Multi-sig is a solution, but it is not chain agnostic or
                  dynamic. Different networks (ETH, BTC, SOL) have different
                  multi-sig setups, making a single UX impossible.
                </p>

                <div className='relative'>
                  <motion.div
                    className='bg-yellow-500/10 text-yellow-400 px-3 py-2 sm:px-4 sm:py-3 rounded-lg relative z-10 border-l-4 border-yellow-500 group-hover:border-yellow-400 transition-colors duration-300'
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <div className='flex items-center'>
                      <SearchIcon className='w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0' />
                      <span className='text-sm sm:text-base'>
                        If only there was something that works for all.
                      </span>
                    </div>
                  </motion.div>

                  <AnimatePresence>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.8 }}
                      className='absolute -right-2 -bottom-2 bg-yellow-500/80 text-white text-xs px-2 py-1 rounded-lg transform rotate-1'
                    >
                      <span className='whitespace-nowrap'>Fragmented!</span>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right side - visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='relative mt-8 lg:mt-0'
          >
            <div className='relative w-full max-w-md mx-auto'>
              {/* Glowing background effect */}
              <div className='absolute -inset-4 bg-gradient-to-r from-red-500/20 via-orange-500/20 to-yellow-500/20 rounded-3xl blur-xl'></div>

              {/* Main image with animated elements */}
              <div className='relative'>
                <div className='relative rounded-2xl border border-gray-800 overflow-hidden shadow-2xl'>
                  <Image
                    src='/images/problem.webp'
                    alt='Wallet Intrusion'
                    width={500}
                    height={500}
                    className='w-full h-auto'
                  />

                  {/* Interactive overlay elements */}
                  <div className='absolute inset-0 bg-black/30'></div>

                  {/* Animated warning elements */}
                  <motion.div
                    className='absolute top-4 sm:top-6 right-4 sm:right-6 w-8 h-8 sm:w-12 sm:h-12 bg-red-500/90 rounded-full flex items-center justify-center text-white shadow-lg'
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <span className='text-base sm:text-xl font-bold'>!</span>
                  </motion.div>

                  <motion.div
                    className='absolute bottom-4 sm:bottom-8 left-4 sm:left-8 px-3 py-1 sm:px-4 sm:py-2 bg-red-500/90 rounded-lg text-white text-xs sm:text-sm shadow-lg'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, x: [0, 5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                  >
                    <span className='flex items-center'>
                      <AlertTriangleIcon className='w-3 h-3 sm:w-4 sm:h-4 mr-1' />
                      Wallet compromised
                    </span>
                  </motion.div>

                  {/* Animated hacker elements - hide on smallest screens */}
                  <motion.div
                    className='hidden sm:block absolute top-1/3 left-1/4 px-3 py-1 sm:px-4 sm:py-2 bg-black/80 rounded-lg text-green-500 text-xs font-mono shadow-lg'
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: [0, 1, 1, 0],
                      y: [0, -10, -10, -20],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 2,
                    }}
                  >
                    <span>Exploiting vulnerability...</span>
                  </motion.div>

                  <motion.div
                    className='hidden sm:block absolute top-1/2 right-1/4 px-3 py-1 sm:px-4 sm:py-2 bg-black/80 rounded-lg text-green-500 text-xs font-mono shadow-lg'
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: [0, 1, 1, 0],
                      y: [0, -10, -10, -20],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 2,
                      delay: 1.5,
                    }}
                  >
                    <span>Extracting private keys...</span>
                  </motion.div>

                  <motion.div
                    className='hidden sm:block absolute bottom-1/4 right-1/3 px-3 py-1 sm:px-4 sm:py-2 bg-black/80 rounded-lg text-red-500 text-xs font-mono shadow-lg'
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: [0, 1, 1, 0],
                      y: [0, -10, -10, -20],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 2,
                      delay: 3,
                    }}
                  >
                    <span>Funds drained: 100%</span>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Solution callout - adjust positioning for mobile */}
            <motion.div
              className='absolute -bottom-4 sm:-bottom-6 md:-bottom-8 lg:-bottom-10 -right-4 sm:-right-6 md:-right-8 lg:-right-10 bg-gradient-to-r from-blue-500 to-teal-400 rounded-lg sm:rounded-xl px-4 py-2 sm:px-6 sm:py-4 shadow-lg'
              initial={{ opacity: 0, scale: 0, rotate: 5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className='flex items-center text-white'>
                <ShieldCheckIcon className='w-4 h-4 sm:w-6 sm:h-6 mr-1 sm:mr-2' />
                <p className='text-sm sm:text-base font-bold'>
                  Vultisig prevents this
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default DescriptionSection
