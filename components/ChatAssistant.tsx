'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, X, Send, ChevronUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Avatar } from '@/components/ui/avatar'
import { ScrollArea } from '@/components/ui/scroll-area'
import Image from 'next/image'

type Message = {
  id: string
  content: string
  isUser: boolean
  timestamp: Date
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: '1',
    content:
      "Hi there! I'm Vulty, your crypto security assistant. How can I help you today?",
    isUser: false,
    timestamp: new Date(),
  },
]

const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES)
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const messageEndRef = useRef<HTMLDivElement>(null)
  const chatScrollRef = useRef<HTMLDivElement>(null)

  // Check if we should show scroll to top
  const handleScroll = () => {
    if (!chatScrollRef.current) return
    setShowScrollTop(chatScrollRef.current.scrollTop > 300)
  }

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // Simulate bot response
  const simulateBotResponse = (userMessage: string) => {
    // Start typing indicator
    setIsTyping(true)

    // Sample responses based on keywords in user message
    const responses = [
      {
        keywords: ['hello', 'hi', 'hey', 'greetings'],
        response: 'Hello! How can I assist you with Vultisig today?',
      },
      {
        keywords: ['security', 'secure', 'protection', 'protect', 'safe'],
        response:
          'Vultisig uses threshold signature technology to provide institutional-grade security for your crypto assets. Your private keys are never stored in a single location, eliminating single points of failure.',
      },
      {
        keywords: ['seed', 'phrase', 'recovery', 'words', 'mnemonic'],
        response:
          "Unlike traditional wallets, Vultisig doesn't use vulnerable seed phrases. Our advanced technology distributes your private keys securely while maintaining easy recovery options.",
      },
      {
        keywords: ['blockchain', 'chain', 'networks', 'support', 'compatible'],
        response:
          'Vultisig supports multiple blockchains including Ethereum, Bitcoin, Solana, Polkadot, and more. You can manage all your assets from a single, secure interface.',
      },
      {
        keywords: ['airdrop', 'token', '$vult', 'vult', 'claim'],
        response:
          'You can participate in the $VULT airdrop by visiting airdrop.vultisig.com and following the instructions to connect your wallet and claim your tokens!',
      },
      {
        keywords: ['download', 'get', 'install', 'app', 'start'],
        response:
          'You can download Vultisig from our website. Click the "Download Now" button on the homepage to get started!',
      },
    ]

    // Check if any keywords match and select a response
    let responseText =
      "I'm not sure I understand. Could you try rephrasing your question about Vultisig?"

    for (const item of responses) {
      if (
        item.keywords.some((keyword) =>
          userMessage.toLowerCase().includes(keyword)
        )
      ) {
        responseText = item.response
        break
      }
    }

    // Add response after a realistic delay
    setTimeout(() => {
      setIsTyping(false)
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          content: responseText,
          isUser: false,
          timestamp: new Date(),
        },
      ])
    }, 1500 + Math.random() * 1500) // Random delay between 1.5-3s
  }

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    // Add user message
    const userMessage = {
      id: Date.now().toString(),
      content: inputValue,
      isUser: true,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue('')

    // Simulate bot response
    simulateBotResponse(inputValue)
  }

  const scrollToTop = () => {
    chatScrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* Chat button that's always visible */}
      <motion.div
        className='fixed bottom-6 right-6 z-50'
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
          delay: 0.5,
        }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className={`rounded-full w-16 h-16 p-0 shadow-lg ${
            isOpen
              ? 'bg-red-500 hover:bg-red-600'
              : 'bg-gradient-to-r from-teal-500 to-blue-500 hover:shadow-[0_0_20px_rgba(45,212,191,0.5)]'
          }`}
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? (
              <X className='w-7 h-7' />
            ) : (
              <MessageSquare className='w-7 h-7' />
            )}
          </motion.div>
        </Button>
      </motion.div>

      {/* Chat panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className='fixed bottom-24 right-6 w-96 z-40 rounded-xl overflow-hidden shadow-2xl border border-gray-700/30'
            initial={{ y: 20, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            {/* Chat header */}
            <div className='bg-gradient-to-r from-teal-600 to-blue-600 p-4 flex items-center justify-between'>
              <div className='flex items-center gap-3'>
                <div className='relative'>
                  <Avatar className='w-10 h-10 border-2 border-white/20 bg-gradient-to-br from-teal-500/80 to-blue-500/80'>
                    <Image
                      src='/images/bot.webp'
                      alt='Vulty'
                      width={40}
                      height={40}
                      className='rounded-full'
                    />
                  </Avatar>
                  <span className='absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-teal-600'></span>
                </div>
                <div>
                  <h3 className='font-bold text-white'>Vulty Assistant</h3>
                  <p className='text-xs text-white/70'>Always here to help</p>
                </div>
              </div>

              <motion.button
                onClick={() => setIsOpen(false)}
                className='text-white/80 hover:text-white'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <X className='w-5 h-5' />
              </motion.button>
            </div>

            {/* Chat messages */}
            <div
              className='h-96 bg-gray-900/95 backdrop-blur-md overflow-y-auto'
              ref={chatScrollRef}
              onScroll={handleScroll}
            >
              <ScrollArea className='h-full'>
                <div className='p-4 space-y-4'>
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      className={`flex ${
                        message.isUser ? 'justify-end' : 'justify-start'
                      }`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className='flex items-start gap-2 max-w-[80%]'>
                        {!message.isUser && (
                          <Avatar className='w-10 h-10 border-2 border-white/20 bg-gradient-to-br from-teal-500/80 to-blue-500/80'>
                            <Image
                              src='/images/bot.webp'
                              alt='Vulty'
                              width={40}
                              height={40}
                              className='rounded-full'
                            />
                          </Avatar>
                        )}

                        <div
                          className={`rounded-xl p-3 ${
                            message.isUser
                              ? 'bg-gradient-to-r from-teal-500 to-blue-500 text-white'
                              : 'bg-gray-800/80 border border-gray-700/50 text-gray-100'
                          }`}
                        >
                          <p className='text-sm'>{message.content}</p>
                          <p className='text-[10px] mt-1 opacity-70 text-right'>
                            {message.timestamp.toLocaleTimeString([], {
                              hour: '2-digit',
                              minute: '2-digit',
                            })}
                          </p>
                        </div>

                        {message.isUser && (
                          <Avatar className='mt-1 w-8 h-8 border border-white/10 bg-gray-700'>
                            <Image
                              src='/images/user.png'
                              alt='User'
                              width={32}
                              height={32}
                              className='rounded-full'
                            />
                          </Avatar>
                        )}
                      </div>
                    </motion.div>
                  ))}

                  {/* Typing indicator */}
                  {isTyping && (
                    <motion.div
                      className='flex justify-start'
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <div className='flex items-start gap-2 max-w-[80%]'>
                        <Avatar className='w-10 h-10 border-2 border-white/20 bg-gradient-to-br from-teal-500/80 to-blue-500/80'>
                          <Image
                            src='/images/bot.webp'
                            alt='Vulty'
                            width={40}
                            height={40}
                            className='rounded-full'
                          />
                        </Avatar>
                        <div className='rounded-xl py-4 px-5 bg-gray-800/80 border border-gray-700/50'>
                          <div className='flex space-x-1'>
                            <motion.div
                              className='w-2 h-2 rounded-full bg-teal-400'
                              animate={{ y: [0, -5, 0] }}
                              transition={{
                                duration: 0.8,
                                repeat: Infinity,
                                repeatDelay: 0.2,
                              }}
                            />
                            <motion.div
                              className='w-2 h-2 rounded-full bg-teal-400'
                              animate={{ y: [0, -5, 0] }}
                              transition={{
                                duration: 0.8,
                                repeat: Infinity,
                                delay: 0.2,
                                repeatDelay: 0.2,
                              }}
                            />
                            <motion.div
                              className='w-2 h-2 rounded-full bg-teal-400'
                              animate={{ y: [0, -5, 0] }}
                              transition={{
                                duration: 0.8,
                                repeat: Infinity,
                                delay: 0.4,
                                repeatDelay: 0.2,
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <div ref={messageEndRef} />
                </div>
              </ScrollArea>

              {/* Scroll to top button */}
              <AnimatePresence>
                {showScrollTop && (
                  <motion.button
                    className='absolute top-4 right-4 bg-gray-800/80 rounded-full p-2 text-gray-300 hover:text-white hover:bg-gray-700/80'
                    onClick={scrollToTop}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ChevronUp className='w-4 h-4' />
                  </motion.button>
                )}
              </AnimatePresence>
            </div>

            {/* Chat input */}
            <div className='p-3 bg-gray-800/80 border-t border-gray-700/30'>
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  handleSendMessage()
                }}
                className='flex items-center gap-2'
              >
                <Input
                  type='text'
                  placeholder='Ask Vulty about crypto security...'
                  value={inputValue}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setInputValue(e.target.value)
                  }
                  className='flex-1 bg-gray-900/50 border-gray-700/50 focus-visible:ring-teal-500 text-sm rounded-lg'
                />
                <Button
                  type='submit'
                  size='icon'
                  disabled={!inputValue.trim() || isTyping}
                  className={`rounded-full bg-gradient-to-r from-teal-500 to-blue-500 hover:shadow-[0_0_10px_rgba(45,212,191,0.3)] transition-all duration-300 ${
                    !inputValue.trim() || isTyping
                      ? 'opacity-50 cursor-not-allowed'
                      : ''
                  }`}
                >
                  <Send className='w-4 h-4' />
                </Button>
              </form>
              <div className='mt-2 text-center'>
                <p className='text-xs text-gray-400'>
                  Powered by Vultisig Security Assistant
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating particles animation */}
      <AnimatePresence>{isOpen && <ChatBackgroundEffects />}</AnimatePresence>
    </>
  )
}

// Background animation for when chat is open
const ChatBackgroundEffects = () => {
  return (
    <motion.div
      className='fixed inset-0 pointer-events-none z-30'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {[...Array(20)].map((_, index) => (
        <motion.div
          key={index}
          className='absolute bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-full filter blur-sm'
          style={{
            width: Math.random() * 20 + 10,
            height: Math.random() * 20 + 10,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1.2, 0],
            opacity: [0, 0.3, 0],
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
          }}
          transition={{
            duration: 3 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </motion.div>
  )
}

// Scroll-to-top button component that's always visible
const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop
    setVisible(scrolled > 300)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible)
    return () => window.removeEventListener('scroll', toggleVisible)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={scrollToTop}
          className='fixed bottom-6 left-6 z-50 w-12 h-12 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 shadow-lg flex items-center justify-center'
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          whileHover={{ y: -2, boxShadow: '0 0 20px rgba(45,212,191,0.5)' }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronUp className='w-6 h-6 text-white' />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

// Export both components
export { ChatAssistant, ScrollToTopButton }
