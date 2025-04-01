'use client'

import { JSX, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  Key,
  LayoutGrid,
  Shield,
  ShieldCheck,
  Check,
  HardDrive,
  Phone,
  Laptop,
  Tablet,
} from 'lucide-react'

interface Solution {
  title: string
  description: string
  icon: React.ReactNode
  color: 'blue' | 'teal' | 'emerald' | 'cyan'
  imageSrc: string
  detail: string
}

// Define types for the device nodes
interface DeviceNodeProps {
  device: 'Phone' | 'Laptop' | 'Tablet'
  index: number
  isActive: boolean
}

const SolutionsSection: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<number | null>(null)

  const solutions: Solution[] = [
    {
      title: 'Threshold Signatures',
      description:
        'Multiple devices to sign—no single point of failure. Never lose funds with one compromised device.',
      icon: <Key className='w-6 h-6' />,
      color: 'blue',
      imageSrc: '/images/solution1.webp',
      detail:
        'Distributes your private keys across multiple devices, requiring a threshold number to authorize transactions. If one device is compromised, your funds remain safe.',
    },
    {
      title: 'Familiar Hardware',
      description:
        'Use your phone, laptop, or tablet—fast, secure, and hassle-free. No special devices needed.',
      icon: <HardDrive className='w-6 h-6' />,
      color: 'teal',
      imageSrc: '/images/solution2.webp',
      detail:
        'Leverage the devices you already own and use daily. No need to purchase, store, or learn complicated hardware wallets.',
    },
    {
      title: 'Vault Shares',
      description:
        'No need to write down seed phrases. Store your Vault Shares online safely and respawn anywhere!',
      icon: <Shield className='w-6 h-6' />,
      color: 'emerald',
      imageSrc: '/images/solution4.webp',
      detail:
        'Vault Shares eliminate vulnerable seed phrases, allowing you to securely back up your wallet and recover it on any device with proper authentication.',
    },
    {
      title: 'Rich UI',
      description:
        'Have all information displayed on big screens. Easy to see—easy to understand.',
      icon: <LayoutGrid className='w-6 h-6' />,
      color: 'cyan',
      imageSrc: '/images/solution3.webp',
      detail:
        'A beautiful, intuitive interface showing transaction details, portfolio statistics, and security status—all optimized for whatever screen size you prefer.',
    },
  ]

  // Function to get color classes based on solution color
  const getColorClasses = (
    color: Solution['color'],
    element: 'bg' | 'text' | 'border' | 'hover'
  ): string => {
    const colorMap = {
      blue: {
        bg: 'bg-blue-500/20',
        text: 'text-blue-400',
        border: 'border-blue-500',
        hover: 'hover:text-blue-300',
      },
      teal: {
        bg: 'bg-teal-500/20',
        text: 'text-teal-400',
        border: 'border-teal-500',
        hover: 'hover:text-teal-300',
      },
      emerald: {
        bg: 'bg-emerald-500/20',
        text: 'text-emerald-400',
        border: 'border-emerald-500',
        hover: 'hover:text-emerald-300',
      },
      cyan: {
        bg: 'bg-cyan-500/20',
        text: 'text-cyan-400',
        border: 'border-cyan-500',
        hover: 'hover:text-cyan-300',
      },
    }

    return colorMap[color][element]
  }

  return (
    <section className='py-24 relative overflow-hidden bg-[#011627]'>
      {/* Background elements */}
      <div className='absolute inset-0 z-0'></div>
      <div className='absolute top-0 left-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full blur-3xl'></div>
      <div className='absolute bottom-0 right-0 w-1/4 h-1/4 bg-teal-500/5 rounded-full blur-3xl'></div>

      {/* Animated background grid */}
      <div className='absolute inset-0 z-0 opacity-20'>
        <div
          className='absolute inset-0'
          style={{
            backgroundImage: 'radial-gradient(#334155 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        ></div>

        {/* Animated lines */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`h-line-${i}`}
            className='absolute w-full h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent'
            style={{ top: `${15 + i * 20}%` }}
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: 'linear',
              delay: i * 3,
            }}
          />
        ))}

        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`v-line-${i}`}
            className='absolute h-full w-px bg-gradient-to-b from-transparent via-teal-500/40 to-transparent'
            style={{ left: `${25 + i * 25}%` }}
            initial={{ y: '-100%' }}
            animate={{ y: '100%' }}
            transition={{
              duration: 20 + i * 2,
              repeat: Infinity,
              ease: 'linear',
              delay: i * 5,
            }}
          />
        ))}
      </div>

      <div className='container mx-auto px-4 relative z-10'>
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <motion.h2
            className='text-4xl md:text-5xl lg:text-6xl font-bold mb-6'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            The{' '}
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400'>
              Solution
            </span>
          </motion.h2>
          <motion.p
            className='text-xl text-gray-300'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            VULTISIG is the next evolution in crypto vaults
          </motion.p>
        </div>

        {/* Main feature cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16'>
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              className='bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden group relative'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              onMouseEnter={() => setActiveFeature(index)}
              onMouseLeave={() => setActiveFeature(null)}
            >
              {/* Colored glow effect */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  solution.color === 'blue'
                    ? 'bg-blue-600/10'
                    : solution.color === 'teal'
                    ? 'bg-teal-600/10'
                    : solution.color === 'emerald'
                    ? 'bg-emerald-600/10'
                    : 'bg-cyan-600/10'
                }`}
              ></div>

              {/* Top border highlight */}
              <div
                className={`absolute top-0 left-0 w-full h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ${
                  solution.color === 'blue'
                    ? 'bg-blue-500'
                    : solution.color === 'teal'
                    ? 'bg-teal-500'
                    : solution.color === 'emerald'
                    ? 'bg-emerald-500'
                    : 'bg-cyan-500'
                }`}
              ></div>

              <div className='p-5 flex flex-col items-center text-center h-full'>
                {/* Main solution image - Now more prominent */}
                <div className='relative w-full aspect-square mb-5 overflow-hidden rounded-lg'>
                  <Image
                    src={solution.imageSrc}
                    alt={solution.title}
                    fill
                    className='object-contain object-center group-hover:scale-105 transition-transform duration-500'
                    sizes='(max-width: 768px) 100vw, 25vw'
                  />

                  {/* Gradient overlay removed for better image clarity */}
                </div>

                <div className='flex items-center justify-center gap-2 mb-3'>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${getColorClasses(
                      solution.color,
                      'bg'
                    )} ${getColorClasses(solution.color, 'text')}`}
                  >
                    {solution.icon}
                  </div>
                  <h3 className='text-xl font-bold'>{solution.title}</h3>
                </div>

                {/* Description text */}
                <p className='text-gray-300 text-sm mb-4 flex-grow'>
                  {solution.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive visualization */}
        <motion.div
          className='relative mt-20 max-w-5xl mx-auto'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className='bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-800 rounded-2xl p-8 overflow-hidden'>
            <div className='flex flex-col lg:flex-row items-center'>
              {/* Left side - Security model visualization */}
              <div className='w-full lg:w-1/2 p-4 relative'>
                {/* Visualization background */}
                <div className='absolute inset-0 -z-10'>
                  <div className='absolute inset-0 bg-blue-500/5 rounded-full filter blur-3xl'></div>
                </div>

                <div className='relative w-full h-80 lg:h-96'>
                  {/* Central wallet icon */}
                  <motion.div
                    className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-blue-500 to-teal-400 rounded-full flex items-center justify-center shadow-xl z-20'
                    animate={{
                      boxShadow: [
                        '0 0 20px rgba(56, 189, 248, 0.3)',
                        '0 0 40px rgba(56, 189, 248, 0.6)',
                        '0 0 20px rgba(56, 189, 248, 0.3)',
                      ],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <ShieldCheck className='w-12 h-12 text-white' />
                  </motion.div>

                  {/* Orbit lines */}
                  <svg
                    className='absolute inset-0 w-full h-full -z-10'
                    viewBox='0 0 400 400'
                  >
                    <motion.ellipse
                      cx='200'
                      cy='200'
                      rx='150'
                      ry='100'
                      fill='none'
                      stroke='url(#blue-gradient)'
                      strokeWidth='1'
                      strokeDasharray='5,5'
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 100,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                      style={{ transformOrigin: 'center' }}
                    />

                    <motion.ellipse
                      cx='200'
                      cy='200'
                      rx='120'
                      ry='170'
                      fill='none'
                      stroke='url(#teal-gradient)'
                      strokeWidth='1'
                      strokeDasharray='5,5'
                      animate={{ rotate: -360 }}
                      transition={{
                        duration: 120,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                      style={{ transformOrigin: 'center' }}
                    />

                    <defs>
                      <linearGradient
                        id='blue-gradient'
                        x1='0%'
                        y1='0%'
                        x2='100%'
                        y2='100%'
                      >
                        <stop
                          offset='0%'
                          stopColor='#2563eb'
                          stopOpacity='0.6'
                        />
                        <stop
                          offset='100%'
                          stopColor='#2563eb'
                          stopOpacity='0.1'
                        />
                      </linearGradient>
                      <linearGradient
                        id='teal-gradient'
                        x1='0%'
                        y1='0%'
                        x2='100%'
                        y2='100%'
                      >
                        <stop
                          offset='0%'
                          stopColor='#14b8a6'
                          stopOpacity='0.6'
                        />
                        <stop
                          offset='100%'
                          stopColor='#14b8a6'
                          stopOpacity='0.1'
                        />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Orbiting devices */}
                  {(['Phone', 'Laptop', 'Tablet'] as const).map((device, i) => (
                    <DeviceNode
                      key={device}
                      device={device}
                      index={i}
                      isActive={activeFeature === 0 || activeFeature === 1}
                    />
                  ))}

                  {/* Security shield animations */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={`shield-${i}`}
                      className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-blue-500/30 rounded-full'
                      style={{
                        width: `${(i + 1) * 30}px`,
                        height: `${(i + 1) * 30}px`,
                      }}
                      initial={{ opacity: 0.3 }}
                      animate={{
                        opacity: [0.1, 0.3, 0.1],
                        scale: [0.95, 1, 0.95],
                      }}
                      transition={{
                        duration: 3,
                        delay: i * 0.2,
                        repeat: Infinity,
                        repeatType: 'reverse',
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Right side - Text content */}
              <div className='w-full lg:w-1/2 p-4'>
                <motion.h3
                  className='text-2xl md:text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400'
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  Unified Security Architecture
                </motion.h3>

                <motion.p
                  className='text-gray-300 mb-6'
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Vultisig brings together all the security benefits of
                  multi-signature wallets, the convenience of familiar devices,
                  and breakthrough threshold technology to create a security
                  system that&apos;s both incredibly powerful and remarkably
                  simple.
                </motion.p>

                <div className='space-y-4'>
                  {[
                    'No seed phrases to write down or lose',
                    'Multiple devices means no single point of failure',
                    'Recover your wallet even if one device is compromised',
                    'Intuitive interface across all your devices',
                  ].map((point, index) => (
                    <motion.div
                      key={index}
                      className='flex items-start'
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                    >
                      <div className='w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 flex-shrink-0 flex items-center justify-center mt-0.5 mr-3'>
                        <Check className='h-4 w-4 text-white' />
                      </div>
                      <p className='text-gray-300'>{point}</p>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className='mt-8'
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <a
                    href='#learn-more'
                    className='inline-block bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1'
                  >
                    Discover How It Works
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Device Node Component
const DeviceNode: React.FC<DeviceNodeProps> = ({ device, index, isActive }) => {
  // Different orbit path for each device
  const orbitRadius = 140
  const orbitDuration = 20 + index * 5
  const startAngle = (index * 120) % 360

  // Define device icon components with proper typing using Lucide icons
  const deviceIcons: Record<DeviceNodeProps['device'], JSX.Element> = {
    Phone: <Phone className='w-5 h-5' />,
    Laptop: <Laptop className='w-5 h-5' />,
    Tablet: <Tablet className='w-5 h-5' />,
  }

  return (
    <motion.div
      className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 ${
        isActive ? 'scale-110' : ''
      }`}
      animate={{
        x: `${orbitRadius * Math.cos((startAngle * Math.PI) / 180)}px`,
        y: `${orbitRadius * Math.sin((startAngle * Math.PI) / 180)}px`,
      }}
      transition={{
        duration: orbitDuration,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      <motion.div
        className='bg-gray-800 p-2 rounded-full border border-gray-700 shadow-lg flex items-center justify-center relative'
        whileHover={{ scale: 1.2 }}
        animate={{
          boxShadow: isActive
            ? '0 0 15px rgba(56, 189, 248, 0.5)'
            : '0 0 0px rgba(56, 189, 248, 0)',
        }}
        transition={{ duration: 0.3 }}
      >
        <div className='w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/80 to-teal-400/80 flex items-center justify-center'>
          {deviceIcons[device]}
        </div>

        {/* Connection lines to the center */}
        <svg
          className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] -z-10'
          viewBox='0 0 300 300'
        >
          <motion.line
            x1='150'
            y1='150'
            x2={150 + orbitRadius * Math.cos((startAngle * Math.PI) / 180)}
            y2={150 + orbitRadius * Math.sin((startAngle * Math.PI) / 180)}
            stroke={
              isActive ? 'rgba(56, 189, 248, 0.6)' : 'rgba(56, 189, 248, 0.2)'
            }
            strokeWidth='1'
            strokeDasharray='4,4'
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
          />
        </svg>

        {/* Device label */}
        <motion.div
          className='absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800/90 px-2 py-1 rounded text-xs font-medium whitespace-nowrap'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {device}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default SolutionsSection
