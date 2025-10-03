'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

const AnotaAISecaoComparacao = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const comparacaoItems = [
    {
      item: 'Atendimento de clientes',
      comAnota: 'Automatizado',
      semAnota: 'Manual'
    },
    {
      item: 'Economia de tempo',
      comAnota: 'Até 60%',
      semAnota: 'Nenhum'
    },
    {
      item: 'Ganho de faturamento',
      comAnota: 'Até 50%',
      semAnota: 'Nenhum'
    },
    {
      item: 'Falhas humanas',
      comAnota: 'Inexistente',
      semAnota: 'Frequente'
    },
    {
      item: 'Controle financeiro',
      comAnota: 'check',
      semAnota: 'x'
    },
    {
      item: 'Emissão de notas fiscais',
      comAnota: 'check',
      semAnota: 'x'
    },
    {
      item: 'Gestor de Pedidos e Relatório',
      comAnota: 'check',
      semAnota: 'x'
    }
  ]

  return (
        <section 
          className="py-24 px-8 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-600 relative overflow-hidden" 
          ref={ref}
        >
          {/* Background Elements */}
          <div className="absolute inset-0">
            <motion.div 
              className="absolute top-20 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.05, 0.1, 0.05],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            ></motion.div>
            <motion.div 
              className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.1, 0.05, 0.1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            ></motion.div>
          </div>

      <div className="max-w-full mx-auto px-8 relative z-10">
        {/* Título Principal */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 whitespace-nowrap">
                Transforme a experiência dos seus pedidos com a <span className="text-cyan-300">Anota AI</span>
              </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          {/* Tabela Comparativa Moderna - Lado Esquerdo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden max-w-3xl mx-auto">
              {/* Cabeçalho Limpo */}
              <div className="bg-blue-900 p-4">
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <p className="text-white text-sm font-medium">Funcionalidade</p>
                  </div>
                  <div className="text-center">
                    <p className="text-green-300 font-bold text-sm">Com Anota AI</p>
                  </div>
                  <div className="text-center">
                    <p className="text-gray-300 font-medium text-sm">Sem Anota AI</p>
                  </div>
                </div>
              </div>

              {/* Conteúdo da Tabela */}
              <div className="divide-y divide-gray-100">
                {comparacaoItems.map((item, index) => (
                  <motion.div 
                    key={item.item}
                    className="group grid grid-cols-3 p-4 hover:bg-blue-50 transition-colors duration-200"
                    whileHover={{ scale: 1.01 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    {/* Funcionalidade */}
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="font-medium text-gray-800 text-sm">
                        {item.item}
                      </span>
                    </div>

                    {/* Com Anota AI */}
                    <div className="flex justify-center">
                      {item.comAnota === 'check' ? (
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      ) : item.comAnota === 'x' ? (
                        <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                      ) : (
                        <div className="px-3 py-1 bg-blue-100 rounded-full">
                          <span className="text-blue-700 font-bold text-sm">{item.comAnota}</span>
                        </div>
                      )}
                    </div>

                    {/* Sem Anota AI */}
                    <div className="flex justify-center">
                      {item.semAnota === 'check' ? (
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      ) : item.semAnota === 'x' ? (
                        <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                      ) : (
                        <div className="px-3 py-1 bg-gray-100 rounded-full">
                          <span className="text-gray-600 font-semibold text-sm">{item.semAnota}</span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Rodapé com destaque */}
              <div className="bg-gradient-to-r from-gray-50 to-blue-50/50 p-3 border-t border-gray-100">
                <div className="text-center">
                  <p className="text-gray-700 font-bold text-xs">
                    ✨ A escolha é óbvia: <span className="text-blue-600">Anota AI</span> para resultados superiores
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mockup dos Dispositivos - Lado Direito */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center"
          >
            <div className="relative w-full h-[500px] flex items-center justify-center group">
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 3
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ 
                  scale: { duration: 0.3 },
                  rotateY: { duration: 0.6 },
                  rotateX: { duration: 0.6 }
                }}
                className="w-full h-full"
              >
                <Image
                  src="/images/anota ai/Imagem-6.webp"
                  alt="Sistema Anota AI - Mockup dos dispositivos"
                  width={800}
                  height={500}
                  className="w-full h-full drop-shadow-2xl"
                  style={{ objectFit: 'contain', maxWidth: '768px' }}
                />
              </motion.div>
              
              {/* Partículas flutuantes */}
              <motion.div
                className="absolute -top-2 -right-2 w-3 h-3 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100"
                animate={{
                  y: [0, -15, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>
              
              <motion.div
                className="absolute -bottom-2 -left-2 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100"
                animate={{
                  y: [0, 15, 0],
                  scale: [1, 1.3, 1]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AnotaAISecaoComparacao
