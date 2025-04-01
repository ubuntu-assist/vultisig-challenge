'use client'

import { motion } from 'framer-motion'

import Image from 'next/image'

const BenefitsSection = () => {
  return (
    <section className='py-24 relative overflow-hidden bg-[#02122B]'>
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-10"></div>
      <div className='absolute top-0 left-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full blur-3xl'></div>
      <div className='absolute bottom-0 right-0 w-1/4 h-1/4 bg-teal-500/5 rounded-full blur-3xl'></div>

      <div className='container mx-auto px-4 relative z-10'>
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <motion.h3
            className='text-4xl md:text-5xl lg:text-6xl font-bold mb-6'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Vultisig is for{' '}
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-300'>
              everyone
            </span>
          </motion.h3>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* Benefit 1: Crypto Natives */}
          <motion.div
            className='bg-gray-900/70 backdrop-blur-sm rounded-xl p-6 border border-gray-800 relative overflow-hidden group'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
          >
            <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-400'></div>
            <div className='absolute -right-20 -top-20 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-300'></div>

            <div className='flex flex-col h-full'>
              <div className='w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6 relative z-10'>
                <Image
                  alt='CRYPTO NATIVES'
                  src='/images/icon-crypto-natives.svg'
                  width={28}
                  height={28}
                  className='text-blue-400 transition-transform duration-300 group-hover:scale-110'
                />
              </div>

              <h4 className='text-xl font-bold mb-4 relative z-10 group-hover:text-blue-400 transition-colors duration-300'>
                CRYPTO NATIVES
              </h4>

              <p className='text-gray-300 relative z-10 group-hover:text-gray-200 transition-colors duration-300'>
                Swap, borrow, save, or spend in one wallet with
                institutional-grade security. You never need a second wallet
                again.
              </p>

              <motion.div
                className='absolute -bottom-1 -right-1 w-16 h-16 bg-blue-500/10 rounded-tl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                animate={{ rotate: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
              ></motion.div>
            </div>
          </motion.div>

          {/* Benefit 2: Whales */}
          <motion.div
            className='bg-gray-900/70 backdrop-blur-sm rounded-xl p-6 border border-gray-800 relative overflow-hidden group'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-400'></div>
            <div className='absolute -right-20 -top-20 w-40 h-40 bg-indigo-500/10 rounded-full blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-300'></div>

            <div className='flex flex-col h-full'>
              <div className='w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-6 relative z-10'>
                <Image
                  alt='WHALES'
                  src='/images/icon-whales.svg'
                  width={28}
                  height={28}
                  className='text-indigo-400 transition-transform duration-300 group-hover:scale-110'
                />
              </div>

              <h4 className='text-xl font-bold mb-4 relative z-10 group-hover:text-indigo-400 transition-colors duration-300'>
                WHALES
              </h4>

              <p className='text-gray-300 relative z-10 group-hover:text-gray-200 transition-colors duration-300'>
                Do you hold significant funds in crypto? Then you MUST consider
                upgrading to a Vultisig secure vault. Your funds are at-risk on
                all other wallets.
              </p>

              <motion.div
                className='absolute -bottom-1 -right-1 w-16 h-16 bg-indigo-500/10 rounded-tl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                animate={{ rotate: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, delay: 1 }}
              ></motion.div>
            </div>
          </motion.div>

          {/* Benefit 3: Funds */}
          <motion.div
            className='bg-gray-900/70 backdrop-blur-sm rounded-xl p-6 border border-gray-800 relative overflow-hidden group'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -5 }}
          >
            <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-violet-400'></div>
            <div className='absolute -right-20 -top-20 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-300'></div>

            <div className='flex flex-col h-full'>
              <div className='w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6 relative z-10'>
                <Image
                  alt='FUNDS'
                  src='/images/icon-funds.svg'
                  width={28}
                  height={28}
                  className='text-purple-400 transition-transform duration-300 group-hover:scale-110'
                />
              </div>

              <h4 className='text-xl font-bold mb-4 relative z-10 group-hover:text-purple-400 transition-colors duration-300'>
                FUNDS
              </h4>

              <p className='text-gray-300 relative z-10 group-hover:text-gray-200 transition-colors duration-300'>
                Vultisig is the open-source audited alternative to your current
                &quot;custodian&quot;. You know it&apos;s time to switch to
                self-custody. Remote co-signing means access anywhere.
              </p>

              <motion.div
                className='absolute -bottom-1 -right-1 w-16 h-16 bg-purple-500/10 rounded-tl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                animate={{ rotate: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, delay: 2 }}
              ></motion.div>
            </div>
          </motion.div>

          {/* Benefit 4: Treasuries */}
          <motion.div
            className='bg-gray-900/70 backdrop-blur-sm rounded-xl p-6 border border-gray-800 relative overflow-hidden group'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -5 }}
          >
            <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500 to-fuchsia-400'></div>
            <div className='absolute -right-20 -top-20 w-40 h-40 bg-violet-500/10 rounded-full blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-300'></div>

            <div className='flex flex-col h-full'>
              <div className='w-12 h-12 bg-violet-500/20 rounded-lg flex items-center justify-center mb-6 relative z-10'>
                <Image
                  alt='TREASURIES'
                  src='/images/icon-treasuries.svg'
                  width={28}
                  height={28}
                  className='text-violet-400 transition-transform duration-300 group-hover:scale-110'
                />
              </div>

              <h4 className='text-xl font-bold mb-4 relative z-10 group-hover:text-violet-400 transition-colors duration-300'>
                TREASURIES
              </h4>

              <p className='text-gray-300 relative z-10 group-hover:text-gray-200 transition-colors duration-300'>
                Vultisig is natively compatible with all chains. Together with
                transaction policies, designate your leads the ability to pay
                staff with limits and whitelists.
              </p>

              <motion.div
                className='absolute -bottom-1 -right-1 w-16 h-16 bg-violet-500/10 rounded-tl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                animate={{ rotate: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, delay: 3 }}
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection
