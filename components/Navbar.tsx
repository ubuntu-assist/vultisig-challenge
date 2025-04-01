'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ChevronDown, ChevronRight } from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mobileProductOpen, setMobileProductOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setScrolled(scrollPosition > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleMobileProduct = () => {
    setMobileProductOpen(!mobileProductOpen)
  }

  // Product dropdown items
  const productItems = [
    {
      label: 'Vultisig Mobile App',
      href: 'https://vultisig.com/download/vultisig',
    },
    { label: 'Vultisig macOS', href: 'https://vultisig.com/download/vultisig' },
    {
      label: 'Vultisig Windows',
      href: 'https://vultisig.com/download/vultisig',
    },
    { label: 'Vultisig Linux', href: 'https://vultisig.com/download/vultisig' },
    { label: 'Vultisig Linux', href: 'https://vultisig.com/download/vultisig' },
    {
      label: 'VultiConnect (Chrome Extension)',
      href: 'https://vultisig.com/download/browser',
    },
  ]

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'py-3' : 'py-4'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className='container mx-auto px-4'>
          <div
            className={`bg-[#0a192f]/80 backdrop-blur-md rounded-full border border-[#162a4a] flex items-center justify-between px-5 py-2 ${
              scrolled ? 'shadow-lg' : ''
            }`}
          >
            {/* Logo */}
            <Link href='/' className='flex items-center'>
              <div className='relative h-10 w-10 mr-2'>
                <svg className='w-10 h-10' viewBox='0 0 24 24'>
                  <path
                    d='M2.06417 19.7173L0.5 18.1532L0.61805 18.0745L9.0193 12.4277L11.8328 14.0608L11.6558 14.1591L2.06417 19.7173Z'
                    fill='url(#paint0_linear_nav)'
                  ></path>
                  <path
                    d='M2.72341 21.9997L2.15283 19.8649L2.23153 19.8157L11.9313 14.228V17.4842L11.8723 17.5138L2.72341 21.9997Z'
                    fill='url(#paint1_linear_nav)'
                  ></path>
                  <path
                    d='M21.2768 21.9997L21.149 21.9406L12.0591 17.4842V14.228L21.8474 19.8551L21.2768 21.9898V21.9997Z'
                    fill='url(#paint2_linear_nav)'
                  ></path>
                  <path
                    d='M21.9357 19.7173L21.857 19.6682L12.167 14.0608L14.9805 12.4277L23.4998 18.1532L21.9357 19.7173Z'
                    fill='url(#paint3_linear_nav)'
                  ></path>
                  <path
                    d='M12.0688 13.8542V2.57058L14.1938 2L14.8922 12.2409L12.0688 13.8542Z'
                    fill='url(#paint4_linear_nav)'
                  ></path>
                  <path
                    d='M11.8722 13.8542L9.04883 12.2409V12.1622L9.74729 2L11.882 2.57058V13.8542H11.8722Z'
                    fill='url(#paint5_linear_nav)'
                  ></path>
                  <defs>
                    <linearGradient
                      id='paint0_linear_nav'
                      x1='6.16641'
                      y1='2.15736'
                      x2='6.16641'
                      y2='21.8226'
                      gradientUnits='userSpaceOnUse'
                    >
                      <stop stopColor='#33E6BF'></stop>
                      <stop offset='1' stopColor='#0439C7'></stop>
                    </linearGradient>
                    <linearGradient
                      id='paint1_linear_nav'
                      x1='7.04208'
                      y1='2.15738'
                      x2='7.04208'
                      y2='21.8226'
                      gradientUnits='userSpaceOnUse'
                    >
                      <stop stopColor='#33E6BF'></stop>
                      <stop offset='1' stopColor='#0439C7'></stop>
                    </linearGradient>
                    <linearGradient
                      id='paint2_linear_nav'
                      x1='16.9582'
                      y1='2.14755'
                      x2='16.9582'
                      y2='21.8226'
                      gradientUnits='userSpaceOnUse'
                    >
                      <stop stopColor='#33E6BF'></stop>
                      <stop offset='1' stopColor='#0439C7'></stop>
                    </linearGradient>
                    <linearGradient
                      id='paint3_linear_nav'
                      x1='17.8334'
                      y1='2.15736'
                      x2='17.8334'
                      y2='21.8226'
                      gradientUnits='userSpaceOnUse'
                    >
                      <stop stopColor='#33E6BF'></stop>
                      <stop offset='1' stopColor='#0439C7'></stop>
                    </linearGradient>
                    <linearGradient
                      id='paint4_linear_nav'
                      x1='13.4756'
                      y1='2.1574'
                      x2='13.4756'
                      y2='21.8226'
                      gradientUnits='userSpaceOnUse'
                    >
                      <stop stopColor='#33E6BF'></stop>
                      <stop offset='1' stopColor='#0439C7'></stop>
                    </linearGradient>
                    <linearGradient
                      id='paint5_linear_nav'
                      x1='10.4753'
                      y1='2.1574'
                      x2='10.4753'
                      y2='21.8226'
                      gradientUnits='userSpaceOnUse'
                    >
                      <stop stopColor='#33E6BF'></stop>
                      <stop offset='1' stopColor='#0439C7'></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span className='text-2xl font-bold text-white'>Vultisig</span>
            </Link>

            {/* Desktop Navigation */}
            <div className='hidden md:flex items-center space-x-1'>
              <nav className='mr-4'>
                <ul className='flex items-center space-x-1'>
                  {/* Product Dropdown */}
                  <li>
                    <DropdownMenu>
                      <DropdownMenuTrigger className='flex items-center px-4 py-2 text-white hover:text-gray-300 focus:outline-none'>
                        <span>Product</span>
                        <ChevronDown className='ml-1 h-4 w-4' />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className='bg-[#0e1c35] border border-[#162a4a] text-white'>
                        {productItems.map((item) => (
                          <DropdownMenuItem
                            key={item.label}
                            className='focus:bg-blue-800 focus:text-white'
                          >
                            <Link
                              target='_blank'
                              href={item.href}
                              className='w-full px-2 py-1'
                            >
                              {item.label}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </li>

                  {/* Regular menu items */}
                  <li>
                    <Link
                      href='/how-it-works'
                      className='px-4 py-2 text-white hover:text-gray-300'
                    >
                      How it Works
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/backed-by'
                      className='px-4 py-2 text-white hover:text-gray-300'
                    >
                      Backed by
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/docs'
                      className='px-4 py-2 text-white hover:text-gray-300'
                    >
                      Docs
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/vult'
                      className='px-4 py-2 text-white hover:text-gray-300'
                    >
                      $VULT
                    </Link>
                  </li>
                </ul>
              </nav>

              {/* Download App Button */}
              <motion.a
                href='/download/vultisig'
                className='relative overflow-hidden bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full flex items-center font-medium'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className='absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full hover:translate-x-full transition-transform duration-700 ease-in-out'></span>
                Download App
              </motion.a>
            </div>

            {/* Mobile menu button */}
            <div className='md:hidden'>
              <button
                onClick={toggleMenu}
                className='w-10 h-10 flex flex-col justify-center items-center rounded-full focus:outline-none bg-gray-800/80 hover:bg-gray-700/80 transition-colors duration-300'
                aria-label='Toggle menu'
              >
                <motion.span
                  className='w-5 h-0.5 bg-gray-300 rounded-full block'
                  animate={{
                    rotate: isOpen ? 45 : 0,
                    y: isOpen ? 2 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                ></motion.span>
                <motion.span
                  className='w-5 h-0.5 bg-gray-300 rounded-full block my-1'
                  animate={{ opacity: isOpen ? 0 : 1 }}
                  transition={{ duration: 0.2 }}
                ></motion.span>
                <motion.span
                  className='w-5 h-0.5 bg-gray-300 rounded-full block'
                  animate={{
                    rotate: isOpen ? -45 : 0,
                    y: isOpen ? -2 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                ></motion.span>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className='fixed inset-0 z-40 pt-20 bg-[#0a192f]/95 backdrop-blur-lg md:hidden'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className='container mx-auto px-4 py-8'>
              <nav>
                <ul className='space-y-6'>
                  <motion.li
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    {/* Product with dropdown toggle in mobile */}
                    <button
                      onClick={toggleMobileProduct}
                      className='flex items-center w-full text-2xl font-bold text-white mb-2 focus:outline-none'
                    >
                      <span>Product</span>
                      <motion.div
                        animate={{ rotate: mobileProductOpen ? 90 : 0 }}
                        transition={{ duration: 0.2 }}
                        className='ml-2'
                      >
                        <ChevronRight className='h-5 w-5 text-gray-300' />
                      </motion.div>
                    </button>

                    {/* Mobile Product Dropdown */}
                    <AnimatePresence>
                      {mobileProductOpen && (
                        <motion.ul
                          className='pl-4 space-y-3 mt-3'
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {productItems.map((item, index) => (
                            <motion.li
                              key={item.label}
                              initial={{ x: -10, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: 0.05 * index }}
                            >
                              <Link
                                target='_blank'
                                href={item.href}
                                className='text-gray-300 hover:text-white text-lg block py-1'
                                onClick={() => setIsOpen(false)}
                              >
                                {item.label}
                              </Link>
                            </motion.li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </motion.li>

                  {['How it Works', 'Backed by', 'Docs', '$VULT'].map(
                    (item, index) => (
                      <motion.li
                        key={item}
                        initial={{ x: -30, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 + index * 0.05 }}
                      >
                        <Link
                          href={`/${item
                            .toLowerCase()
                            .replace(' ', '-')
                            .replace('$', '')}`}
                          className='text-2xl font-bold block text-white'
                          onClick={() => setIsOpen(false)}
                        >
                          {item}
                        </Link>
                      </motion.li>
                    )
                  )}
                </ul>
              </nav>

              <div className='mt-12'>
                <motion.a
                  href='/download/vultisig'
                  className='w-full px-6 py-3 text-center text-white bg-blue-600 hover:bg-blue-700 rounded-xl block text-lg font-medium'
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Download App
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
