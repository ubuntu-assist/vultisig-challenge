'use client'

import { motion } from 'framer-motion'
import {
  ArrowDown,
  ArrowRight,
  Bell,
  Clock,
  Cpu,
  Globe,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react'
import Image from 'next/image'

const BestFeaturesSection = () => {
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
            Best features in{' '}
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-300'>
              One Place
            </span>
          </motion.h3>

          <motion.p
            className='text-xl text-gray-300 max-w-2xl mx-auto'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Everything you need for secure crypto management, seamlessly
            integrated into one powerful platform
          </motion.p>
        </div>

        {/* Feature Cards Container */}
        <div className='space-y-24'>
          {/* Feature 1: Asset Management */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
              <div>
                <motion.p
                  className='text-2xl md:text-3xl font-bold mb-6'
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  VUltisig: Asset
                  <br />
                  Management Hub
                </motion.p>

                <motion.p
                  className='text-gray-300 mb-6'
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  Vultisig is chain agnostic - Bitcoin, Ethereum, Solana,
                  THORChain and many more. The first multi-chain, multi-asset,
                  multi-signature wallet in the world for everyone. You can
                  deposit, send, swap and more inside Vultisig.
                </motion.p>

                <motion.div
                  className='inline-flex items-center text-blue-400 font-medium cursor-pointer group'
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  whileHover={{ x: 5 }}
                >
                  <span className='mr-2'>Explore all chains</span>
                  <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform duration-300' />
                </motion.div>
              </div>

              <div>
                <motion.div
                  className='relative max-w-xs mx-auto'
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  {/* Background glow effect */}
                  <div className='absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-teal-400/20 rounded-3xl blur-xl'></div>

                  {/* Phone mockup - smaller size */}
                  <div className='relative rounded-2xl overflow-hidden shadow-2xl'>
                    <Image
                      alt='VUltisig: Asset Management Hub'
                      src='/images/asset-management.webp'
                      width={328}
                      height={535}
                      className='w-full h-auto'
                    />

                    {/* Interactive overlay elements */}
                    <div className='absolute inset-0'>
                      {/* Animated balance indicator */}
                      <motion.div
                        className='absolute top-[25%] left-[10%] right-[10%] bg-gradient-to-r from-blue-500/20 to-teal-400/20 backdrop-blur-sm rounded-xl py-3 px-4 border border-blue-500/30'
                        initial={{ y: -20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        <div className='flex justify-between items-center'>
                          <div>
                            <p className='text-gray-400 text-xs'>
                              Total Balance
                            </p>
                            <p className='text-white text-sm font-bold'>
                              $192,453.21
                            </p>
                          </div>
                          <motion.div
                            className='w-6 h-6 bg-blue-500/30 rounded-full flex items-center justify-center'
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <TrendingUp className='w-3 h-3 text-blue-400' />
                          </motion.div>
                        </div>
                      </motion.div>

                      {/* Blockchain indicator */}
                      <motion.div
                        className='absolute top-[45%] left-[10%] right-[10%] bg-blue-500/10 backdrop-blur-sm rounded-xl py-2 px-3 border border-blue-500/30'
                        initial={{ x: 20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                      >
                        <div className='flex justify-between items-center'>
                          <div className='flex items-center'>
                            <div className='w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center mr-2'>
                              <span className='text-blue-400 text-xs font-semibold'>
                                M
                              </span>
                            </div>
                            <span className='text-white text-xs'>
                              Multi-Chain
                            </span>
                          </div>
                          <div className='flex space-x-1'>
                            <div className='w-4 h-4 bg-orange-500/30 rounded-full flex items-center justify-center'>
                              <span className='text-orange-400 text-[8px]'>
                                ₿
                              </span>
                            </div>
                            <div className='w-4 h-4 bg-blue-500/30 rounded-full flex items-center justify-center'>
                              <span className='text-blue-400 text-[8px]'>
                                Ξ
                              </span>
                            </div>
                            <div className='w-4 h-4 bg-teal-500/30 rounded-full flex items-center justify-center'>
                              <span className='text-teal-400 text-[8px]'>
                                ◎
                              </span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Floating notification element */}
                  <motion.div
                    className='absolute -top-4 -right-4 bg-blue-500/90 rounded-lg py-1 px-3 shadow-lg'
                    initial={{ opacity: 0, scale: 0, rotate: 10 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 10 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    <div className='flex items-center text-white text-xs'>
                      <Globe className='w-3 h-3 mr-1' />
                      <span>12+ Networks</span>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Feature 2: DeFi */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
              <div className='order-2 lg:order-1'>
                <motion.div
                  className='relative max-w-xs mx-auto'
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  {/* Background glow effect */}
                  <div className='absolute -inset-4 bg-gradient-to-r from-teal-500/20 to-emerald-400/20 rounded-3xl blur-xl'></div>

                  {/* Phone mockup - smaller size */}
                  <div className='relative rounded-2xl overflow-hidden shadow-2xl'>
                    <Image
                      alt='DeFi In your pocket'
                      src='/images/defi-in-pocket.webp'
                      width={328}
                      height={535}
                      className='w-full h-auto'
                    />

                    {/* Interactive overlay elements */}
                    <div className='absolute inset-0'>
                      {/* Animated swap interface */}
                      <motion.div
                        className='absolute top-[25%] left-[10%] right-[10%] bg-gray-800/80 backdrop-blur-sm rounded-xl py-3 px-4 border border-gray-700'
                        initial={{ y: -20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        <div className='space-y-3'>
                          <div className='flex justify-between items-center'>
                            <div className='flex items-center'>
                              <div className='w-6 h-6 bg-orange-500/20 rounded-full flex items-center justify-center mr-2'>
                                <span className='text-orange-400 text-xs'>
                                  ₿
                                </span>
                              </div>
                              <div>
                                <p className='text-white text-xs'>Bitcoin</p>
                              </div>
                            </div>
                            <div>
                              <p className='text-white text-xs font-medium'>
                                0.1 BTC
                              </p>
                            </div>
                          </div>

                          <div className='flex justify-center'>
                            <motion.div
                              className='w-6 h-6 bg-teal-500/30 rounded-full flex items-center justify-center'
                              animate={{ rotate: [0, 180] }}
                              transition={{
                                duration: 1,
                                repeat: Infinity,
                                repeatDelay: 5,
                              }}
                            >
                              <ArrowDown className='w-3 h-3 text-teal-400' />
                            </motion.div>
                          </div>

                          <div className='flex justify-between items-center'>
                            <div className='flex items-center'>
                              <div className='w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center mr-2'>
                                <span className='text-blue-400 text-xs'>Ξ</span>
                              </div>
                              <div>
                                <p className='text-white text-xs'>Ethereum</p>
                              </div>
                            </div>
                            <div>
                              <p className='text-white text-xs font-medium'>
                                1.54 ETH
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Floating notification element */}
                  <motion.div
                    className='absolute -bottom-4 -left-4 bg-teal-500/90 rounded-lg py-1 px-3 shadow-lg'
                    initial={{ opacity: 0, scale: 0, rotate: -10 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: -10 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    <div className='flex items-center text-white text-xs'>
                      <Zap className='w-3 h-3 mr-1' />
                      <span>Built-in Swaps</span>
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              <div className='order-1 lg:order-2'>
                <motion.p
                  className='text-2xl md:text-3xl font-bold mb-6'
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <span className='bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-emerald-300'>
                    DeFi
                  </span>{' '}
                  In your
                  <br />
                  pocket
                </motion.p>

                <motion.p
                  className='text-gray-300 mb-6'
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  Vultisig is natively DeFi compatible - rebalance your
                  portfolio right inside the vault. It also supports advanced
                  DeFi functions such as bonding to Nodes, Staking and more!
                </motion.p>

                <motion.div
                  className='inline-flex items-center text-teal-400 font-medium cursor-pointer group'
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  whileHover={{ x: -5 }}
                >
                  <span className='mr-2'>Explore DeFi features</span>
                  <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform duration-300' />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Feature 3: Wallet Extensions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
              <div>
                <motion.p
                  className='text-2xl md:text-3xl font-bold mb-6'
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  Expand Your
                  <br />
                  Wallet&apos;s Power
                </motion.p>

                <motion.p
                  className='text-gray-300 mb-6'
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  Unlock new possibilities with Vultisig Plugins. From automated
                  investments (DCA) to salary management, customize your wallet
                  with features tailored to your needs. Simplify your crypto
                  experience with tools that work seamlessly together. (Still in
                  development)
                </motion.p>

                <motion.div
                  className='inline-flex items-center text-purple-400 font-medium cursor-pointer group'
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  whileHover={{ x: 5 }}
                >
                  <span className='mr-2'>Join waitlist</span>
                  <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform duration-300' />
                </motion.div>
              </div>

              <div>
                <motion.div
                  className='relative max-w-xs mx-auto'
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  {/* Background glow effect */}
                  <div className='absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-violet-400/20 rounded-3xl blur-xl'></div>

                  {/* Phone mockup - smaller size */}
                  <div className='relative rounded-2xl overflow-hidden shadow-2xl'>
                    <Image
                      alt="Expand Your Wallet's Power"
                      src='/images/wallet-power.webp'
                      width={328}
                      height={535}
                      className='w-full h-auto'
                    />

                    {/* Interactive overlay elements */}
                    <div className='absolute inset-0'>
                      {/* Plugin modules */}
                      <motion.div
                        className='absolute top-[20%] left-[10%] right-[10%] bg-gray-800/80 backdrop-blur-sm rounded-xl py-2 px-3 border border-purple-500/30'
                        initial={{ x: 20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        <div className='flex items-center'>
                          <div className='w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center mr-2'>
                            <Clock className='w-3 h-3 text-purple-400' />
                          </div>
                          <div>
                            <p className='text-white text-xs font-medium'>
                              Auto DCA
                            </p>
                            <p className='text-gray-400 text-[10px]'>
                              Recurring Investments
                            </p>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div
                        className='absolute top-[35%] left-[10%] right-[10%] bg-gray-800/80 backdrop-blur-sm rounded-xl py-2 px-3 border border-purple-500/30'
                        initial={{ x: 20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                      >
                        <div className='flex items-center'>
                          <div className='w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center mr-2'>
                            <Users className='w-3 h-3 text-purple-400' />
                          </div>
                          <div>
                            <p className='text-white text-xs font-medium'>
                              Team Payroll
                            </p>
                            <p className='text-gray-400 text-[10px]'>
                              Automated Payments
                            </p>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div
                        className='absolute top-[50%] left-[10%] right-[10%] bg-gray-800/80 backdrop-blur-sm rounded-xl py-2 px-3 border border-purple-500/30'
                        initial={{ x: 20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                      >
                        <div className='flex items-center'>
                          <div className='w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center mr-2'>
                            <Bell className='w-3 h-3 text-purple-400' />
                          </div>
                          <div>
                            <p className='text-white text-xs font-medium'>
                              Price Alerts
                            </p>
                            <p className='text-gray-400 text-[10px]'>
                              Custom Notifications
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Floating notification element */}
                  <motion.div
                    className='absolute -top-4 -right-4 bg-purple-500/90 rounded-lg py-1 px-3 shadow-lg'
                    initial={{ opacity: 0, scale: 0, rotate: 10 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 10 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    <div className='flex items-center text-white text-xs'>
                      <Cpu className='w-3 h-3 mr-1' />
                      <span>Coming Soon</span>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default BestFeaturesSection
