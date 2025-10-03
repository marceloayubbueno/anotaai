'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MessageCircle, Smartphone, Users, CreditCard, ChevronDown, ChevronUp } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

const AnotaAISecaoGestao = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [openCategory, setOpenCategory] = useState<number>(0) // Primeira categoria aberta por padrão

  const toggleCategory = (index: number) => {
    setOpenCategory(prev => prev === index ? -1 : index) // Se clicar na mesma, fecha. Se clicar em outra, abre
  }

  const funcionalidades = [
    {
      categoria: "Para vendas no restaurante",
      items: [
        {
          icon: MessageCircle,
          title: "Atendimento automatizado",
          description: "Atenda seus clientes automaticamente nos aplicativos que eles mais usam e potencialize as suas vendas em diversos canais."
        },
        {
          icon: Smartphone,
          title: "Cardápio Digital",
          description: "Dê autonomia aos seus clientes para pedirem seus pratos favoritos com facilidade e rapidez, diretamente de casa!"
        },
        {
          icon: Users,
          title: "Recuperador de vendas",
          description: "Recupere clientes com mensagens automáticas e incentive o retorno ao cardápio."
        },
        {
          icon: CreditCard,
          title: "Pagamento Online",
          description: "Receba por PIX ou Crédito direto no cardápio. Simples, seguro e eficiente."
        }
      ]
    },
    {
      categoria: "Para atendimento no salão",
      items: [
        {
          icon: Smartphone,
          title: "Aplicativo para Garçom",
          description: "Visualize mesas ocupadas e disponíveis, adicione itens à comanda, edite pedidos, troque clientes de mesa e feche a conta."
        },
        {
          icon: MessageCircle,
          title: "PDV",
          description: "Centralize seus pedidos locais e por telefone em uma única ferramenta, facilitando a rotina de trabalho"
        },
        {
          icon: Users,
          title: "QR Code para Mesa",
          description: "Crie um cardápio digital com QR Code para mesas e facilite o autoatendimento no seu restaurante."
        }
      ]
    },
    {
      categoria: "Para gestão do estabelecimento",
      items: [
        {
          icon: CreditCard,
          title: "Emissão de notas fiscais",
          description: "Solução prática e intuitiva de emissão de nota fiscal, configure desde o tipo da NFC-e até a reemissão de notas canceladas."
        },
        {
          icon: MessageCircle,
          title: "Frente de Caixa",
          description: "Processo de abertura e fechamento de caixa de forma simples e prática."
        },
        {
          icon: Users,
          title: "Controle de Estoque",
          description: "Uma gestão simples no cardápio de ativação e quantidade de itens, além de uma tela de configuração das regras de operação de estoque esgotado."
        },
        {
          icon: Smartphone,
          title: "Gestor de Pedidos e Relatório",
          description: "Tenha todos os pedidos feitos em canais diferentes em um só lugar"
        }
      ]
    }
  ]

  return (
    <section className="py-20 bg-white relative overflow-hidden" ref={ref}>
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Background Shapes */}
        <motion.div 
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-2xl"
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [360, 180, 0],
            opacity: [0.2, 0.1, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Floating Business Text Elements */}
        <motion.div 
          className="absolute top-32 left-20 text-blue-400 font-mono text-sm opacity-30"
          animate={{ y: [0, -15, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          anotaai
        </motion.div>
        <motion.div 
          className="absolute top-48 right-24 text-cyan-400 font-mono text-sm opacity-30"
          animate={{ y: [0, 20, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          pedido feito
        </motion.div>
        <motion.div 
          className="absolute bottom-40 left-16 text-blue-400 font-mono text-sm opacity-30"
          animate={{ y: [0, -10, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          novo pedido
        </motion.div>
        <motion.div 
          className="absolute top-60 right-16 text-cyan-400 font-mono text-sm opacity-30"
          animate={{ y: [0, 15, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          cardápio digital
        </motion.div>
        <motion.div 
          className="absolute bottom-32 right-20 text-blue-400 font-mono text-sm opacity-30"
          animate={{ y: [0, -12, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        >
          whatsapp bot
        </motion.div>
      </div>
      
      <div className="container mx-auto px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Gestão completa para seu{' '}
            <span className="text-blue-600">restaurante</span> em uma única assinatura
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/anota ai/Imagem-5.webp"
                alt="Gestão completa - Sistema Anota AI"
                width={500}
                height={400}
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ minHeight: '600px' }}
          >
            {funcionalidades.map((categoria, categoriaIndex) => (
              <div key={categoriaIndex} className="border-b border-gray-200 pb-6 last:border-b-0">
                <button
                  onClick={() => toggleCategory(categoriaIndex)}
                  className="w-full text-left flex items-center justify-between py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 transition-colors duration-200"
                >
                  <h3 className="text-xl font-bold text-white">
                    {categoria.categoria}
                  </h3>
                  {openCategory === categoriaIndex ? (
                    <ChevronUp className="w-6 h-6 text-white flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-white flex-shrink-0" />
                  )}
                </button>
                
                <AnimatePresence>
                  {openCategory === categoriaIndex && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                      style={{ willChange: 'height, opacity' }}
                    >
                      <div className="space-y-4 px-4 pt-4">
                        {categoria.items.map((item, itemIndex) => (
                          <motion.div
                            key={itemIndex}
                            className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: itemIndex * 0.05 }}
                          >
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                              <item.icon className="w-6 h-6 text-blue-600" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2">
                                {item.title}
                              </h4>
                              <p className="text-gray-600 text-sm leading-relaxed">
                                {item.description}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AnotaAISecaoGestao
