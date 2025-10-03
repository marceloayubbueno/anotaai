'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star, Play, Users, TrendingUp } from 'lucide-react'

const AnotaAICaseSucesso = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section className="py-20 bg-white relative overflow-hidden" ref={ref}>
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Background Shapes */}
        <motion.div 
          className="absolute top-16 right-12 w-32 h-32 bg-gradient-to-br from-orange-500/8 to-red-500/8 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-16 left-12 w-28 h-28 bg-gradient-to-br from-blue-500/8 to-cyan-500/8 rounded-full blur-2xl"
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [360, 180, 0],
            opacity: [0.15, 0.1, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Floating Business Text Elements */}
        <motion.div 
          className="absolute top-32 left-20 text-orange-400 font-mono text-sm opacity-25"
          animate={{ y: [0, -12, 0], opacity: [0.25, 0.4, 0.25] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          case de sucesso
        </motion.div>
        <motion.div 
          className="absolute top-56 right-24 text-blue-400 font-mono text-sm opacity-25"
          animate={{ y: [0, 14, 0], opacity: [0.25, 0.4, 0.25] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          pizzaria igarapé
        </motion.div>
        <motion.div 
          className="absolute bottom-40 left-16 text-orange-400 font-mono text-sm opacity-25"
          animate={{ y: [0, -10, 0], opacity: [0.25, 0.4, 0.25] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          depoimento
        </motion.div>
        <motion.div 
          className="absolute bottom-56 right-20 text-blue-400 font-mono text-sm opacity-25"
          animate={{ y: [0, 12, 0], opacity: [0.25, 0.4, 0.25] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          resultado
        </motion.div>
      </div>
      
      <div className="container mx-auto px-8 relative z-10">
        {/* Title */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Case de sucesso
          </h2>
        </motion.div>

        {/* Profile Card */}
        <motion.div 
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-gray-50 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center space-x-4">
              {/* Profile Picture */}
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">FS</span>
              </div>
              
              {/* Profile Info */}
              <div>
                <h3 className="text-xl font-bold text-gray-900">Fernando Sampaio</h3>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600">Pizzaria Igarapé</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <blockquote className="text-2xl md:text-3xl font-medium text-gray-900 italic max-w-4xl mx-auto">
            "O Anota AI melhorou a gestão de dados e o atendimento do meu delivery"
          </blockquote>
        </motion.div>

        {/* Video Section */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-gray-100 rounded-2xl p-8 shadow-lg">
            {/* Video Embed */}
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-xl"
                src="https://www.youtube.com/embed/LoNL5NOozyk"
                title="Conheça como a Pizzaria Igarapé mudou a história do seu delivery com a Anota AI"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            
            {/* Video Title */}
            <h3 className="text-xl font-bold text-gray-900 mt-6 text-center">
              Conheça como a Pizzaria Igarapé mudou a história do seu delivery com a Anota AI
            </h3>
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div 
          className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-12"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Commitment */}
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                O que nossos clientes dizem sobre nós
              </h3>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Nosso compromisso é evoluir junto com cada cliente
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1">
                Também quero fazer parte
              </button>
            </div>

            {/* Right Side - Testimonials */}
            <div className="space-y-6">
              {/* Testimonial 1 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">DF</span>
                  </div>
                  <div>
                    <blockquote className="text-gray-700 mb-4 italic">
                      "Sem a Anota AI, a gente não conseguiria atender com 100% de eficácia."
                    </blockquote>
                    <div>
                      <p className="font-bold text-gray-900">Diogo Fülber</p>
                      <p className="text-gray-600 text-sm">Sócio e fundador Pizzaria do Maestro</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">BA</span>
                  </div>
                  <div>
                    <blockquote className="text-gray-700 mb-4 italic">
                      "Eu indico a Anota AI, pra quem quer aumentar o seu faturamento"
                    </blockquote>
                    <div>
                      <p className="font-bold text-gray-900">Bruno Andrade</p>
                      <p className="text-gray-600 text-sm">Proprietário Bah Q Massa®</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AnotaAICaseSucesso
