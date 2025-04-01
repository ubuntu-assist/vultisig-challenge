'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const OtherFeaturesSection = () => {
  return (
    <section className='py-24 relative overflow-hidden'>
      {/* Background elements */}
      <div className='absolute inset-0 bg-[#02122B]'></div>
      <div className='absolute top-0 left-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full blur-3xl'></div>
      <div className='absolute bottom-0 right-0 w-1/4 h-1/4 bg-teal-500/5 rounded-full blur-3xl'></div>
      <div className='absolute right-0 bottom-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent'></div>

      <div className='container mx-auto px-4 relative z-10'>
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
              Features
            </span>
          </motion.h3>

          <motion.p
            className='text-xl text-gray-300 max-w-2xl mx-auto'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Advanced capabilities that enhance your experience and provide
            additional security and convenience
          </motion.p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {/* Feature 1 - Full DeFi */}
          <motion.div
            className='bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 relative transition-all duration-300'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{
              y: -5,
              boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.3)',
            }}
          >
            <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-teal-400'></div>

            <div className='flex flex-col h-full'>
              <div className='flex items-start mb-4'>
                <div className='w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4 mt-1'>
                  <Image
                    alt='Full DeFi'
                    src='/images/icon-full-defi.svg'
                    width={28}
                    height={28}
                    className='text-blue-400'
                  />
                </div>

                <h4 className='text-xl font-bold'>Full DeFi</h4>
              </div>

              <p className='text-gray-300 mb-4 flex-grow'>
                Swaps, Pools, Bridging. All DeFi functions right from your
                Vault.
              </p>
            </div>
          </motion.div>

          {/* Feature 2 - Remote Signing */}
          <motion.div
            className='bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 relative transition-all duration-300'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{
              y: -5,
              boxShadow: '0 10px 25px -5px rgba(56, 189, 248, 0.3)',
            }}
          >
            <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-500 to-blue-400'></div>

            <div className='flex flex-col h-full'>
              <div className='flex items-start mb-4'>
                <div className='w-12 h-12 bg-sky-500/20 rounded-lg flex items-center justify-center mr-4 mt-1'>
                  <Image
                    alt='Remote Signing'
                    src='/images/icon-remote-signing.svg'
                    width={28}
                    height={28}
                    className='text-sky-400'
                  />
                </div>

                <h4 className='text-xl font-bold'>Remote Signing</h4>
              </div>

              <p className='text-gray-300 mb-4 flex-grow'>
                Sign with a remote co-signer. All messages are encrypted between
                devices.
              </p>
            </div>
          </motion.div>

          {/* Feature 3 - Transaction Policies */}
          <motion.div
            className='bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 relative transition-all duration-300'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{
              y: -5,
              boxShadow: '0 10px 25px -5px rgba(45, 212, 191, 0.3)',
            }}
          >
            <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-emerald-400'></div>

            <div className='flex flex-col h-full'>
              <div className='flex items-start mb-4'>
                <div className='w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center mr-4 mt-1'>
                  <Image
                    alt='Transaction Policies'
                    src='/images/icon-transaction-policies.svg'
                    width={28}
                    height={28}
                    className='text-teal-400'
                  />
                </div>

                <h4 className='text-xl font-bold'>Transaction Policies</h4>
              </div>

              <p className='text-gray-300 mb-4 flex-grow'>
                Define transaction policies for your vault - spending limits,
                address whitelists and more.
                <br />
                <span className='inline-block mt-2 text-teal-400 text-sm'>
                  (COMING SOON)
                </span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default OtherFeaturesSection
