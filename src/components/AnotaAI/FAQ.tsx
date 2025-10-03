'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const AnotaAIFAQ = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [openItems, setOpenItems] = useState<number[]>([0]) // Primeira pergunta aberta por padrão

  const faqs = [
    {
      question: "O sistema da Anota AI funciona para delivery e salão?",
      answer: "Sim! A Anota AI é um sistema completo para restaurantes, ideal para quem atende no **salão, no balcão e via delivery**. O sistema é flexível e se adapta ao formato do seu restaurante, com **funcionalidades específicas para cada tipo de operação**."
    },
    {
      question: "Preciso cadastrar cartão de crédito para testar?",
      answer: "Não! Você pode testar a Anota AI gratuitamente por 7 dias sem precisar cadastrar nenhum cartão de crédito. É totalmente livre de compromissos."
    },
    {
      question: "A Anota AI cobra taxa por pedido?",
      answer: "Não cobramos taxa por pedido. Nossos planos são mensais com valor fixo, sem surpresas na fatura."
    },
    {
      question: "Como funciona o pagamento online na Anota AI?",
      answer: "O sistema de pagamento online é integrado e permite que seus clientes paguem diretamente pelo cardápio digital, com múltiplas formas de pagamento disponíveis."
    }
  ]

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    )
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900 relative overflow-hidden" ref={ref}>
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Background Shapes */}
        <motion.div 
          className="absolute top-20 right-16 w-36 h-36 bg-gradient-to-br from-cyan-400/8 to-blue-400/8 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 left-16 w-32 h-32 bg-gradient-to-br from-yellow-400/8 to-orange-400/8 rounded-full blur-2xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.15, 0.08, 0.15],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Floating Business Text Elements */}
        <motion.div 
          className="absolute top-40 left-24 text-cyan-400 font-mono text-sm opacity-25"
          animate={{ y: [0, -14, 0], opacity: [0.25, 0.4, 0.25] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        >
          perguntas frequentes
        </motion.div>
        <motion.div 
          className="absolute top-64 right-28 text-yellow-400 font-mono text-sm opacity-25"
          animate={{ y: [0, 16, 0], opacity: [0.25, 0.4, 0.25] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        >
          dúvidas
        </motion.div>
        <motion.div 
          className="absolute bottom-48 left-20 text-cyan-400 font-mono text-sm opacity-25"
          animate={{ y: [0, -11, 0], opacity: [0.25, 0.4, 0.25] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
        >
          respostas
        </motion.div>
        <motion.div 
          className="absolute bottom-64 right-24 text-yellow-400 font-mono text-sm opacity-25"
          animate={{ y: [0, 13, 0], opacity: [0.25, 0.4, 0.25] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
        >
          suporte
        </motion.div>
      </div>
      
      <div className="container mx-auto px-8 relative z-10">
        {/* FAQ Section */}
        <motion.div 
          className="bg-white rounded-3xl p-8 md:p-12 max-w-4xl mx-auto shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Perguntas frequentes
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="border-b border-gray-200 pb-6 last:border-b-0"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full text-left flex items-center justify-between py-4 hover:bg-gray-50 rounded-lg px-4 -mx-4 transition-colors duration-200"
                >
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 pr-4">
                    {index + 1} - {faq.question}
                  </h3>
                  {openItems.includes(index) ? (
                    <ChevronUp className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  )}
                </button>
                
                {openItems.includes(index) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer.split('**').map((part, i) => 
                          i % 2 === 1 ? (
                            <strong key={i} className="font-semibold text-gray-900">
                              {part}
                            </strong>
                          ) : (
                            part
                          )
                        )}
                      </p>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AnotaAIFAQ
