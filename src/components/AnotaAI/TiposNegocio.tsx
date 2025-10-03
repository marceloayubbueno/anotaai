'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MessageCircle } from 'lucide-react'
import Image from 'next/image'

const AnotaAITiposNegocio = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const tiposNegocio = [
    {
      title: 'Restaurantes',
      image: '/images/anota ai/Card-new-1.webp',
      description: 'Automatize o atendimento e aumente as vendas do seu restaurante'
    },
    {
      title: 'Delivery',
      image: '/images/anota ai/Card-new-2.webp',
      description: 'Gerencie pedidos e entregas com eficiência máxima'
    },
    {
      title: 'Franquias',
      image: '/images/anota ai/Card-new-3.webp',
      description: 'Padronize o atendimento em todas as suas unidades'
    },
    {
      title: 'Distribuidoras',
      image: '/images/anota ai/Card-new.webp',
      description: 'Organize vendas e distribuição com inteligência artificial'
    }
  ]

  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900 overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Curved white shape in top-left */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        
        {/* Floating elements */}
        <motion.div 
          className="absolute top-20 right-20 w-32 h-32 bg-white/5 rounded-full blur-xl"
          animate={{
            y: [0, -20, 0],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="absolute bottom-20 left-20 w-24 h-24 bg-cyan-300/10 rounded-full blur-lg"
          animate={{
            y: [0, 20, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        {/* Floating Business Text Elements */}
        <motion.div 
          className="absolute top-40 left-24 text-yellow-400 font-mono text-sm opacity-30"
          animate={{ y: [0, -18, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        >
          delivery online
        </motion.div>
        <motion.div 
          className="absolute top-60 right-32 text-cyan-400 font-mono text-sm opacity-30"
          animate={{ y: [0, 22, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        >
          restaurante
        </motion.div>
        <motion.div 
          className="absolute bottom-48 left-20 text-yellow-400 font-mono text-sm opacity-30"
          animate={{ y: [0, -14, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
        >
          pizzaria
        </motion.div>
        <motion.div 
          className="absolute bottom-60 right-24 text-cyan-400 font-mono text-sm opacity-30"
          animate={{ y: [0, 16, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
        >
          hamburgueria
        </motion.div>
        <motion.div 
          className="absolute top-80 left-32 text-yellow-400 font-mono text-sm opacity-30"
          animate={{ y: [0, -12, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          automação
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
            Transforme a experiência dos seus pedidos com a{' '}
            <span className="text-cyan-300">Anota AI</span>
          </h2>
        </motion.div>

        {/* Business Type Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {tiposNegocio.map((tipo, index) => (
            <motion.div
              key={tipo.title}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={tipo.image}
                    alt={tipo.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
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
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Fale com um consultor
          </motion.button>
        </motion.div>
      </div>

    </section>
  )
}

export default AnotaAITiposNegocio
