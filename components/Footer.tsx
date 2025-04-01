'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, useMotionValue, useTransform } from 'framer-motion'

// Interface for star objects
interface Star {
  id: number
  x: number
  y: number
  size: number
  opacity: number
  blinking: boolean
}

// Interface for link objects
interface FooterLink {
  href: string
  label: string
  target?: string
}

// Props interface for FooterLinks component
interface FooterLinksProps {
  links: FooterLink[]
}

// Props interface for SocialButton component
interface SocialButtonProps {
  href: string
  icon: string
}

// Interface for mouse position state
interface MousePosition {
  x: number
  y: number
}

const Footer: React.FC = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  })

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const windowWidth = window.innerWidth
      const windowHeight = window.innerHeight

      // Update the mouse position state
      setMousePosition({
        x: clientX / windowWidth,
        y: clientY / windowHeight,
      })

      // Update motion values
      x.set(clientX - windowWidth / 2)
      y.set(clientY - windowHeight / 2)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [x, y])

  // Generate random positions for stars
  const stars: Star[] = Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    opacity: Math.random() * 0.8 + 0.2,
    blinking: Math.random() > 0.7,
  }))

  return (
    <footer className='relative overflow-hidden bg-[#02122B]'>
      {/* Interactive background layers */}
      <div className='absolute inset-0 overflow-hidden'>
        {/* Animated nebula background */}
        <div
          className='absolute inset-0 bg-gradient-to-br from-[#061B3A] to-[#02122B]'
          style={{
            backgroundSize: '400% 400%',
            animation: 'gradientAnimation 15s ease infinite',
          }}
        />

        {/* Star field */}
        <div className='absolute inset-0'>
          {stars.map((star) => (
            <div
              key={star.id}
              className={`absolute rounded-full bg-white ${
                star.blinking ? 'animate-blink' : ''
              }`}
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                opacity: star.opacity,
              }}
            />
          ))}
        </div>

        {/* Animated glow orbs */}
        <div
          className='absolute top-0 right-0 w-96 h-96 rounded-full bg-[#33E6BF]/10 blur-[100px] animate-float-slow'
          style={{
            transform: `translate(${mousePosition.x * 20}px, ${
              mousePosition.y * 20
            }px)`,
          }}
        />
        <div
          className='absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#2155DF]/10 blur-[100px] animate-float-slow-reverse'
          style={{
            transform: `translate(${-mousePosition.x * 20}px, ${
              -mousePosition.y * 20
            }px)`,
          }}
        />

        {/* Honeycomb grid pattern */}
        <div className='absolute inset-0 opacity-[0.03]'>
          <svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'>
            <pattern
              id='hexagons'
              width='50'
              height='88'
              patternUnits='userSpaceOnUse'
              patternTransform='scale(2)'
            >
              <path
                d='M24.8 22L37.3 44L24.8 66L0 66L-12.5 44L0 22L24.8 22Z'
                fill='none'
                stroke='#33E6BF'
                strokeWidth='0.5'
              />
            </pattern>
            <rect
              x='0'
              y='0'
              width='100%'
              height='100%'
              fill='url(#hexagons)'
            />
          </svg>
        </div>
      </div>

      {/* Wave divider at top */}
      <div className='relative w-full h-24 overflow-hidden'>
        <svg
          className='absolute bottom-0 left-0 w-full'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1440 320'
          preserveAspectRatio='none'
        >
          <path
            fill='#02122B'
            fillOpacity='1'
            d='M0,32L48,58.7C96,85,192,139,288,138.7C384,139,480,85,576,90.7C672,96,768,160,864,170.7C960,181,1056,139,1152,117.3C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
          ></path>
        </svg>
      </div>

      {/* Main content container */}
      <div className='container relative mx-auto px-4 z-10 pt-16 pb-24'>
        {/* 3D Logo Card - Removed 3D effect from Discord CTA */}
        <div className='relative w-full max-w-5xl mx-auto mb-20'>
          <div className='relative bg-[#061B3A]/90 backdrop-blur-lg rounded-2xl p-0.5 overflow-hidden border border-[#33E6BF]/20'>
            {/* Gradient border effect */}
            <div className='absolute inset-0 rounded-2xl overflow-hidden'>
              <div className='absolute inset-0 bg-gradient-to-r from-[#33E6BF] to-[#2155DF] animate-spin-slow opacity-30'></div>
            </div>

            <div className='relative bg-[#061B3A]/95 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-md overflow-hidden'>
              {/* Background elements */}
              <div className='absolute top-0 right-0 w-64 h-64 bg-[#2155DF]/5 rounded-full blur-3xl'></div>
              <div className='absolute bottom-0 left-0 w-64 h-64 bg-[#33E6BF]/5 rounded-full blur-3xl'></div>

              {/* Logo */}
              <div className='flex-shrink-0'>
                <motion.div className='relative'>
                  <svg
                    className='w-16 h-16 md:w-20 md:h-20'
                    viewBox='0 0 24 24'
                  >
                    <path
                      d='M2.06417 19.7173L0.5 18.1532L0.61805 18.0745L9.0193 12.4277L11.8328 14.0608L11.6558 14.1591L2.06417 19.7173Z'
                      fill='url(#paint0_linear_footer)'
                    ></path>
                    <path
                      d='M2.72341 21.9997L2.15283 19.8649L2.23153 19.8157L11.9313 14.228V17.4842L11.8723 17.5138L2.72341 21.9997Z'
                      fill='url(#paint1_linear_footer)'
                    ></path>
                    <path
                      d='M21.2768 21.9997L21.149 21.9406L12.0591 17.4842V14.228L21.8474 19.8551L21.2768 21.9898V21.9997Z'
                      fill='url(#paint2_linear_footer)'
                    ></path>
                    <path
                      d='M21.9357 19.7173L21.857 19.6682L12.167 14.0608L14.9805 12.4277L23.4998 18.1532L21.9357 19.7173Z'
                      fill='url(#paint3_linear_footer)'
                    ></path>
                    <path
                      d='M12.0688 13.8542V2.57058L14.1938 2L14.8922 12.2409L12.0688 13.8542Z'
                      fill='url(#paint4_linear_footer)'
                    ></path>
                    <path
                      d='M11.8722 13.8542L9.04883 12.2409V12.1622L9.74729 2L11.882 2.57058V13.8542H11.8722Z'
                      fill='url(#paint5_linear_footer)'
                    ></path>
                    <defs>
                      <linearGradient
                        id='paint0_linear_footer'
                        x1='6.16641'
                        y1='2.15736'
                        x2='6.16641'
                        y2='21.8226'
                        gradientUnits='userSpaceOnUse'
                      >
                        <stop stopColor='#33E6BF'></stop>
                        <stop offset='1' stopColor='#2155DF'></stop>
                      </linearGradient>
                      <linearGradient
                        id='paint1_linear_footer'
                        x1='7.04208'
                        y1='2.15738'
                        x2='7.04208'
                        y2='21.8226'
                        gradientUnits='userSpaceOnUse'
                      >
                        <stop stopColor='#33E6BF'></stop>
                        <stop offset='1' stopColor='#2155DF'></stop>
                      </linearGradient>
                      <linearGradient
                        id='paint2_linear_footer'
                        x1='16.9582'
                        y1='2.14755'
                        x2='16.9582'
                        y2='21.8226'
                        gradientUnits='userSpaceOnUse'
                      >
                        <stop stopColor='#33E6BF'></stop>
                        <stop offset='1' stopColor='#2155DF'></stop>
                      </linearGradient>
                      <linearGradient
                        id='paint3_linear_footer'
                        x1='17.8334'
                        y1='2.15736'
                        x2='17.8334'
                        y2='21.8226'
                        gradientUnits='userSpaceOnUse'
                      >
                        <stop stopColor='#33E6BF'></stop>
                        <stop offset='1' stopColor='#2155DF'></stop>
                      </linearGradient>
                      <linearGradient
                        id='paint4_linear_footer'
                        x1='13.4756'
                        y1='2.1574'
                        x2='13.4756'
                        y2='21.8226'
                        gradientUnits='userSpaceOnUse'
                      >
                        <stop stopColor='#33E6BF'></stop>
                        <stop offset='1' stopColor='#2155DF'></stop>
                      </linearGradient>
                      <linearGradient
                        id='paint5_linear_footer'
                        x1='10.4753'
                        y1='2.1574'
                        x2='10.4753'
                        y2='21.8226'
                        gradientUnits='userSpaceOnUse'
                      >
                        <stop stopColor='#33E6BF'></stop>
                        <stop offset='1' stopColor='#2155DF'></stop>
                      </linearGradient>
                    </defs>
                  </svg>

                  <div className='absolute inset-0 bg-[#33E6BF]/20 rounded-full blur-xl animate-pulse-slow'></div>
                </motion.div>
              </div>

              {/* Text content */}
              <div className='flex-grow text-center md:text-left'>
                <motion.h2
                  className='text-3xl md:text-4xl font-bold mb-2'
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#33E6BF] to-[#2155DF]'>
                    Join the Vultisig Community
                  </span>
                </motion.h2>
                <motion.p
                  className='text-gray-300 mb-0 max-w-lg'
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Be part of our growing community and help shape the future of
                  crypto security
                </motion.p>
              </div>

              {/* CTA Button - 3D effect removed */}
              <div className='flex-shrink-0'>
                <motion.a
                  href='https://discord.gg/54wEtGYxuv'
                  target='_blank'
                  className='relative overflow-hidden inline-flex items-center justify-center bg-[#2155DF] text-white font-bold py-3.5 px-8 rounded-xl text-lg shadow-[0_5px_30px_rgba(33,85,223,0.5)] hover:shadow-[0_5px_40px_rgba(33,85,223,0.7)] transition-all duration-300'
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className='absolute inset-0 w-full h-full bg-gradient-to-r from-[#33E6BF]/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out'></span>
                  <svg className='w-5 h-5 mr-2' viewBox='0 0 24 24' fill='none'>
                    <path
                      d='M18.9269 5.63C17.5269 5.03 16.0269 4.58 14.4269 4.32C14.3769 4.31 14.3269 4.34 14.3069 4.39C14.1169 4.72 13.9069 5.15 13.7569 5.49C12.0269 5.25 10.3069 5.25 8.62685 5.49C8.47685 5.14 8.25685 4.72 8.06685 4.39C8.04685 4.34 7.99685 4.31 7.94685 4.32C6.34685 4.58 4.84685 5.03 3.44685 5.63C3.42685 5.64 3.41685 5.66 3.39685 5.68C0.486847 10.1 -0.293153 14.38 0.0968466 18.6C0.0968466 18.64 0.116847 18.67 0.146847 18.69C2.04685 20.06 3.88685 20.87 5.69685 21.39C5.74685 21.4 5.79685 21.39 5.82685 21.34C6.25685 20.75 6.63685 20.13 6.96685 19.47C6.99685 19.4 6.96685 19.33 6.89685 19.3C6.29685 19.07 5.72685 18.79 5.18685 18.47C5.10685 18.42 5.10685 18.31 5.17685 18.26C5.30685 18.17 5.43685 18.07 5.56685 17.97C5.59685 17.94 5.64685 17.94 5.67685 17.96C9.39685 19.67 13.4669 19.67 17.1369 17.96C17.1669 17.94 17.2169 17.94 17.2469 17.97C17.3769 18.07 17.5069 18.17 17.6369 18.26C17.7069 18.31 17.7069 18.42 17.6269 18.47C17.0869 18.8 16.5169 19.07 15.9169 19.3C15.8469 19.33 15.8269 19.41 15.8469 19.47C16.1869 20.13 16.5669 20.75 16.9869 21.34C17.0169 21.39 17.0669 21.4 17.1169 21.39C18.9369 20.87 20.7769 20.06 22.6769 18.69C22.7069 18.67 22.7269 18.64 22.7269 18.6C23.1869 13.69 21.9569 9.45 19.2269 5.68C19.2169 5.66 19.1969 5.64 19.1769 5.63H18.9269ZM7.69685 15.74C6.58685 15.74 5.67685 14.72 5.67685 13.48C5.67685 12.24 6.56685 11.22 7.69685 11.22C8.83685 11.22 9.73685 12.25 9.71685 13.48C9.71685 14.72 8.82685 15.74 7.69685 15.74ZM16.0769 15.74C14.9669 15.74 14.0569 14.72 14.0569 13.48C14.0569 12.24 14.9469 11.22 16.0769 11.22C17.2069 11.22 18.1069 12.25 18.0869 13.48C18.0869 14.72 17.2069 15.74 16.0769 15.74Z'
                      fill='currentColor'
                    />
                  </svg>
                  Join Our Discord
                </motion.a>
              </div>
            </div>
          </div>
        </div>

        {/* Links Section with Enhanced Design */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-10 mb-16'>
          {/* Column 1: About */}
          <div>
            <div className='mb-4 flex items-center'>
              <motion.div
                className='w-1 h-6 bg-[#33E6BF] mr-3 rounded-full'
                animate={{ height: [24, 28, 24] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <h4 className='text-lg font-bold text-white'>About</h4>
            </div>
            <FooterLinks
              links={[
                { href: '/how-it-works', label: 'How It Works' },
                { href: '/backed-by', label: 'Backed by' },
                { href: '/docs', label: 'Documentation' },
                { href: '/vult', label: '$VULT Token' },
              ]}
            />
          </div>

          {/* Column 2: Products */}
          <div>
            <div className='mb-4 flex items-center'>
              <motion.div
                className='w-1 h-6 bg-[#2155DF] mr-3 rounded-full'
                animate={{ height: [24, 28, 24] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
              <h4 className='text-lg font-bold text-white'>Products</h4>
            </div>
            <FooterLinks
              links={[
                { href: '/download', label: 'Download Wallet' },
                {
                  href: 'https://chromewebstore.google.com/detail/vulticonnect/ggafhcdaplkhmmnlbfjpnnkepdfjaelb',
                  label: 'Browser Extension',
                  target: '_blank',
                },
                {
                  href: 'https://airdrop.vultisig.com',
                  label: 'Claim Airdrop',
                  target: '_blank',
                },
              ]}
            />
          </div>

          {/* Column 3: Support */}
          <div>
            <div className='mb-4 flex items-center'>
              <motion.div
                className='w-1 h-6 bg-[#33E6BF] mr-3 rounded-full'
                animate={{ height: [24, 28, 24] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />
              <h4 className='text-lg font-bold text-white'>Support</h4>
            </div>
            <FooterLinks
              links={[
                { href: '/support', label: 'Help Center' },
                { href: '/faq', label: 'FAQs' },
                {
                  href: 'https://docs.vultisig.com/threshold-signature-scheme/security',
                  label: 'Security Audits',
                  target: '_blank',
                },
                {
                  href: 'https://twitter.com/vultisig',
                  label: 'Contact Us',
                  target: '_blank',
                },
              ]}
            />
          </div>

          {/* Column 4: Legal */}
          <div>
            <div className='mb-4 flex items-center'>
              <motion.div
                className='w-1 h-6 bg-[#2155DF] mr-3 rounded-full'
                animate={{ height: [24, 28, 24] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
              />
              <h4 className='text-lg font-bold text-white'>Legal</h4>
            </div>
            <FooterLinks
              links={[
                { href: '/termofservice', label: 'Terms of Service' },
                { href: '/privacy', label: 'Privacy Policy' },
              ]}
            />
          </div>
        </div>

        {/* Social Media and Copyright Section */}
        <div className='pt-8 border-t border-[#11284A]/50 flex flex-col md:flex-row items-center justify-between gap-6'>
          {/* Copyright */}
          <div className='flex items-center gap-3 order-2 md:order-1'>
            <p className='text-gray-400 text-sm'>
              © Vultisig {new Date().getFullYear()}
            </p>
            <div className='px-2 py-0.5 rounded-full bg-[#11284A] text-xs text-[#33E6BF] font-mono'>
              v1.1.0
            </div>
          </div>

          {/* Social Media */}
          <div className='flex gap-4 order-1 md:order-2'>
            <SocialButton
              href='https://github.com/Vultisig/'
              icon='/images/github.webp'
            />
            <SocialButton
              href='https://twitter.com/vultisig'
              icon='/images/twitter.webp'
            />
            <SocialButton
              href='https://discord.gg/54wEtGYxuv'
              icon='/images/discord.webp'
            />
            <SocialButton
              href='https://t.me/vultisig'
              icon='/images/telegram.webp'
            />
          </div>
        </div>
      </div>
    </footer>
  )
}

// Helper component for footer links
const FooterLinks: React.FC<FooterLinksProps> = ({ links }) => {
  return (
    <ul className='space-y-3'>
      {links.map((link, index) => (
        <li key={index}>
          <motion.a
            href={link.href}
            target={link.target}
            className='text-gray-400 hover:text-[#33E6BF] transition-colors duration-300 flex items-center group'
            whileHover={{ x: 3 }}
          >
            <motion.span className='w-0 h-0.5 bg-[#33E6BF] mr-0 opacity-0 group-hover:w-3 group-hover:mr-2 group-hover:opacity-100 transition-all duration-300' />
            {link.label}
          </motion.a>
        </li>
      ))}
    </ul>
  )
}

const SocialButton: React.FC<SocialButtonProps> = ({ href, icon }) => {
  return (
    <motion.a
      href={href}
      target='_blank'
      className='relative p-3 flex items-center justify-center rounded-full bg-[#11284A] hover:bg-[#0d213f] transition-colors duration-300 group'
      whileHover={{ y: -5 }}
    >
      <motion.div
        className='absolute inset-0 rounded-full bg-[#33E6BF]/20 opacity-0 group-hover:opacity-100 blur-sm'
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <Image
        alt='Social Media'
        width={20}
        height={20}
        src={icon}
        className='opacity-70 group-hover:opacity-100 transition-opacity duration-300'
      />
    </motion.a>
  )
}

export default Footer
