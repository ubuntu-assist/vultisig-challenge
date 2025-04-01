'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const InformationSection = () => {
  return (
    <section className='py-24 relative overflow-hidden bg-[#02122B]'>
      {/* Background elements */}
      <div className='absolute top-0 right-0 w-1/2 h-1/2 bg-blue-500/5 rounded-full blur-3xl'></div>
      <div className='absolute bottom-0 left-0 w-1/3 h-1/3 bg-teal-500/5 rounded-full blur-3xl'></div>
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-10"></div>

      <div className='container mx-auto px-4 relative z-10'>
        {/* Trusted Partners Section */}
        <div>
          <div className='text-center max-w-3xl mx-auto mb-16'>
            <motion.h2
              className='text-4xl md:text-5xl lg:text-6xl font-bold mb-6'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Trusted by the{' '}
              <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-300'>
                Best
              </span>
            </motion.h2>
            <motion.p
              className='text-xl text-gray-300'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Leading projects in the crypto ecosystem trust Vultisig for their
              treasury management
            </motion.p>
          </div>

          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6'>
            {/* Partner 1 - THORChain */}
            <motion.div
              className='bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-xl p-6 flex flex-col items-center justify-center hover:bg-gray-800/30 transition-all duration-300'
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <div className='mb-4'>
                <Image
                  src='/images/thorchain.svg'
                  alt='THORChain'
                  width={60}
                  height={60}
                  className='mx-auto transition-transform duration-300 hover:scale-110'
                />
              </div>
              <div className='text-center'>
                <p className='font-medium text-white'>THORChain</p>
                <p className='text-sm text-gray-400'>Treasury</p>
              </div>
            </motion.div>

            {/* Partner 2 - Vultisig */}
            <motion.div
              className='bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-xl p-6 flex flex-col items-center justify-center hover:bg-gray-800/30 transition-all duration-300'
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className='mb-4'>
                <Image
                  src='/images/vultisig.svg'
                  alt='Vultisig'
                  width={60}
                  height={60}
                  className='mx-auto transition-transform duration-300 hover:scale-110'
                />
              </div>
              <div className='text-center'>
                <p className='font-medium text-white'>Vultisig</p>
                <p className='text-sm text-gray-400'>Treasury</p>
              </div>
            </motion.div>

            {/* Partner 3 - WEWE */}
            <motion.div
              className='bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-xl p-6 flex flex-col items-center justify-center hover:bg-gray-800/30 transition-all duration-300'
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className='mb-4'>
                <Image
                  src='/images/wewe.svg'
                  alt='WEWE'
                  width={60}
                  height={60}
                  className='mx-auto transition-transform duration-300 hover:scale-110'
                />
              </div>
              <div className='text-center'>
                <p className='font-medium text-white'>WEWE</p>
                <p className='text-sm text-gray-400'>Treasury</p>
              </div>
            </motion.div>

            {/* Partner 4 - DeFi Suisse */}
            <motion.div
              className='bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-xl p-6 flex flex-col items-center justify-center hover:bg-gray-800/30 transition-all duration-300'
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <div className='mb-4'>
                <Image
                  src='/images/DeFi-suisse-treasury.svg'
                  alt='DeFi Suisse'
                  width={60}
                  height={60}
                  className='mx-auto transition-transform duration-300 hover:scale-110'
                />
              </div>
              <div className='text-center'>
                <p className='font-medium text-white'>DeFi Suisse</p>
                <p className='text-sm text-gray-400'>Treasury</p>
              </div>
            </motion.div>

            {/* Partner 5 - ZKFinance */}
            <motion.div
              className='bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-xl p-6 flex flex-col items-center justify-center hover:bg-gray-800/30 transition-all duration-300'
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -5 }}
            >
              <div className='mb-4'>
                <Image
                  src='/images/zkfinance.svg'
                  alt='ZKFinance'
                  width={60}
                  height={60}
                  className='mx-auto transition-transform duration-300 hover:scale-110'
                />
              </div>
              <div className='text-center'>
                <p className='font-medium text-white'>ZKFinance</p>
                <p className='text-sm text-gray-400'>Treasury</p>
              </div>
            </motion.div>

            {/* Partner 6 - RUJI */}
            <motion.div
              className='bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-xl p-6 flex flex-col items-center justify-center hover:bg-gray-800/30 transition-all duration-300'
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <div className='mb-4'>
                <Image
                  src='/images/ruji.svg'
                  alt='RUJI'
                  width={60}
                  height={60}
                  className='mx-auto transition-transform duration-300 hover:scale-110'
                />
              </div>
              <div className='text-center'>
                <p className='font-medium text-white'>RUJI</p>
                <p className='text-sm text-gray-400'>Treasury</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InformationSection
