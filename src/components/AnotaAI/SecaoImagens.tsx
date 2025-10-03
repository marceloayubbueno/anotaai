'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

const AnotaAISecaoLogos = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const empresas = [
    { 
      nome: 'Amorinha', 
      categoria: 'SORVETES E AÇAÍ',
      logo: '/images/anota ai/logos/images.webp'
    },
    { 
      nome: 'ROTA 88', 
      categoria: 'FOOD & BEER',
      logo: '/images/anota ai/logos/images-1.webp'
    },
    { 
      nome: 'PIZZA PRIME', 
      categoria: 'PIZZARIA',
      logo: '/images/anota ai/logos/images-2.webp'
    },
    { 
      nome: 'Cremolatto', 
      categoria: 'SORVETES',
      logo: '/images/anota ai/logos/images-4.webp'
    },
    { 
      nome: 'BORDA & LENHA', 
      categoria: 'PIZZARIA',
      logo: '/images/anota ai/logos/borda-e-lenha-icone-768x768-1.png'
    },
    { 
      nome: 'St. Jones', 
      categoria: 'HAMBURGUERIA E BAR',
      logo: '/images/anota ai/logos/unnamed-7.png'
    }
  ]

  return (
        <section className="relative bg-white py-16 overflow-hidden" ref={ref}>
          {/* Tech Pattern Background */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(45deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                linear-gradient(-45deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px'
            }}></div>
          </div>
        <div className="container">
          {/* Título */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Mais de <span className="text-blue-600">50 mil empresas</span> estão usando a Anota AI
            </h2>
          </motion.div>

          {/* Logos das Empresas */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {empresas.map((empresa, index) => (
              <motion.div
                key={empresa.nome}
                className="group flex items-center justify-center p-6 rounded-xl transition-all duration-500 cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.1,
                  y: -8,
                  rotateY: 5,
                  rotateX: 5
                }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Logo Container com Efeitos */}
                <div className="relative">
                  {/* Background com Gradiente Animado */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-blue-100 via-cyan-50 to-blue-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{
                      background: [
                        "linear-gradient(45deg, #dbeafe, #e0f2fe, #dbeafe)",
                        "linear-gradient(45deg, #e0f2fe, #f0f9ff, #e0f2fe)",
                        "linear-gradient(45deg, #dbeafe, #e0f2fe, #dbeafe)"
                      ]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  ></motion.div>

                  {/* Sombra Animada */}
                  <motion.div
                    className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0, 0.3, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2
                    }}
                  ></motion.div>

                  {/* Logo Principal */}
                  <motion.div 
                    className="relative w-24 h-24 rounded-2xl flex items-center justify-center shadow-lg overflow-hidden bg-white border border-gray-100"
                    whileHover={{
                      boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3), 0 10px 20px rgba(59, 130, 246, 0.2)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      whileHover={{ 
                        scale: 1.1,
                        rotate: [0, -2, 2, 0]
                      }}
                      transition={{ 
                        scale: { duration: 0.3 },
                        rotate: { duration: 0.6, repeat: 1 }
                      }}
                    >
                      <Image
                        src={empresa.logo}
                        alt={empresa.nome}
                        width={96}
                        height={96}
                        className="object-contain transition-all duration-300"
                      />
                    </motion.div>
                  </motion.div>

                  {/* Efeito de Brilho */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                    style={{
                      background: "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.4) 50%, transparent 70%)"
                    }}
                    animate={{
                      x: [-100, 100]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: 2,
                      ease: "easeInOut"
                    }}
                  ></motion.div>

                  {/* Partículas Flutuantes */}
                  <motion.div
                    className="absolute -top-2 -right-2 w-3 h-3 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100"
                    animate={{
                      y: [0, -10, 0],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3
                    }}
                  ></motion.div>
                  <motion.div
                    className="absolute -bottom-2 -left-2 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100"
                    animate={{
                      y: [0, 10, 0],
                      scale: [1, 1.3, 1]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: index * 0.4
                    }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
    </section>
  )
}

export default AnotaAISecaoLogos
