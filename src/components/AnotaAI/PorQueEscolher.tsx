'use client'

import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'

const AnotaAIPorQueEscolher = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const stats = [
    {
      number: '+50mil',
      description: 'de restaurantes já automatizaram e reduziram seus custos'
    },
    {
      number: 'Até 60%',
      description: 'de economia de tempo. Eficiência com crescimento nas vendas'
    },
    {
      number: 'Até 50%',
      description: 'em média foi o aumento de faturamento dos nossos clientes.'
    }
  ]

  // Componente de contador animado
  const AnimatedCounter = ({ number, index }: { number: string, index: number }) => {
    const [displayNumber, setDisplayNumber] = useState('0')
    
    useEffect(() => {
      if (inView) {
        // Extrair o número da string
        const numericValue = number.replace(/[^\d]/g, '')
        
        if (numericValue) {
          const targetNumber = parseInt(numericValue)
          const duration = 2000 + (index * 500) // Delay escalonado
          
          // Animar o contador
          let current = 0
          const increment = targetNumber / (duration / 16) // 60fps
          
          const timer = setInterval(() => {
            current += increment
            if (current >= targetNumber) {
              // Construir o número final corretamente
              let finalNumber = ''
              if (number.startsWith('+')) finalNumber += '+'
              if (number.includes('Até')) finalNumber += 'Até '
              finalNumber += targetNumber
              if (number.includes('%')) finalNumber += '%'
              if (number.includes('mil')) finalNumber += 'mil'
              setDisplayNumber(finalNumber)
              clearInterval(timer)
            } else {
              // Construir o número atual corretamente
              let currentNumber = ''
              if (number.startsWith('+')) currentNumber += '+'
              if (number.includes('Até')) currentNumber += 'Até '
              currentNumber += Math.floor(current)
              if (number.includes('%')) currentNumber += '%'
              if (number.includes('mil')) currentNumber += 'mil'
              setDisplayNumber(currentNumber)
            }
          }, 16)
          
          return () => clearInterval(timer)
        } else {
          setDisplayNumber(number)
        }
      }
    }, [inView, number, index])
    
    return <span>{displayNumber}</span>
  }

  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900 overflow-hidden" ref={ref}>
      {/* Background Wave Patterns */}
      <div className="absolute inset-0 opacity-20">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" fill="none">
          <path
            d="M0,200 Q300,100 600,200 T1200,200 L1200,800 L0,800 Z"
            fill="rgba(59, 130, 246, 0.1)"
          />
          <path
            d="M0,300 Q400,200 800,300 T1600,300 L1600,800 L0,800 Z"
            fill="rgba(6, 182, 212, 0.1)"
          />
        </svg>
      </div>

      {/* Additional Wave Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-cyan-400/20 to-transparent"></div>

      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Background Shapes */}
        <motion.div 
          className="absolute top-24 right-16 w-44 h-44 bg-gradient-to-br from-yellow-400/10 to-orange-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-24 left-20 w-36 h-36 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            rotate: [360, 180, 0],
            opacity: [0.2, 0.1, 0.2],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Floating Business Text Elements */}
        <motion.div 
          className="absolute top-48 left-28 text-yellow-400 font-mono text-sm opacity-30"
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          +50mil restaurantes
        </motion.div>
        <motion.div 
          className="absolute top-72 right-28 text-cyan-400 font-mono text-sm opacity-30"
          animate={{ y: [0, 24, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          +60% economia
        </motion.div>
        <motion.div 
          className="absolute bottom-56 left-24 text-yellow-400 font-mono text-sm opacity-30"
          animate={{ y: [0, -16, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          +50% faturamento
        </motion.div>
        <motion.div 
          className="absolute bottom-72 right-20 text-cyan-400 font-mono text-sm opacity-30"
          animate={{ y: [0, 18, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          7 dias grátis
        </motion.div>
      </div>

      <div className="container mx-auto px-8 relative z-10">
        {/* Title */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Por que escolher a{' '}
            <span className="text-yellow-400">Anota AI?</span>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center relative"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              {/* Separator lines */}
              {index > 0 && (
                <div className="hidden md:block absolute left-0 top-1/2 w-px h-20 bg-white/20 -translate-y-1/2"></div>
              )}
              
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group relative overflow-hidden">
                {/* Card glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-cyan-400/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1 }}
                />
                
                {/* Progress indicator */}
                <motion.div
                  className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                
                <motion.div 
                  className="text-5xl md:text-6xl font-bold text-yellow-400 mb-4 relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { 
                    opacity: 1, 
                    y: 0
                  } : {}}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.2 + (0.1 * index)
                  }}
                >
                  <AnimatedCounter number={stat.number} index={index} />
                </motion.div>
                
                <p className="text-white/90 text-lg leading-relaxed relative z-10">
                  {stat.description}
                </p>
                
                {/* Animated progress bar */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-cyan-400 rounded-b-3xl"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 2, delay: 1 + (0.2 * index) }}
                  style={{ originX: 0 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.button
            className="relative bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold py-4 px-12 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            />
            <span className="relative z-10 flex items-center justify-center">
              <span>Contratar agora</span>
              <motion.div
                className="ml-2"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                🚀
              </motion.div>
            </span>
          </motion.button>
        </motion.div>
      </div>

    </section>
  )
}

export default AnotaAIPorQueEscolher
