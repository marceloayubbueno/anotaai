'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Smartphone, Bot, CreditCard, Users, QrCode, BarChart3, ArrowRight, MessageCircle, ShoppingCart, Settings, Clock, TrendingUp } from 'lucide-react'

const AnotaAIFuncionalidades = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const funcionalidades = [
    // Para vendas no restaurante
    {
      icon: Bot,
      title: 'Atendimento Automatizado',
      description: 'Atenda seus clientes automaticamente nos aplicativos que eles mais usam e potencialize as suas vendas em diversos canais.',
      features: ['WhatsApp automatizado', 'Múltiplos canais', 'IA integrada', 'Respostas inteligentes'],
      color: 'from-blue-500 to-cyan-500',
      category: 'vendas'
    },
    {
      icon: Smartphone,
      title: 'Cardápio Digital',
      description: 'Dê autonomia aos seus clientes para pedirem seus pratos favoritos com facilidade e rapidez, diretamente de casa!',
      features: ['QR Code para mesa', 'Autoatendimento', 'Catálogo dinâmico', 'Atualizações em tempo real'],
      color: 'from-green-500 to-emerald-500',
      category: 'vendas'
    },
    {
      icon: MessageCircle,
      title: 'Recuperador de Vendas',
      description: 'Recupere clientes com mensagens automáticas e incentive o retorno ao cardápio.',
      features: ['Mensagens automáticas', 'Follow-up inteligente', 'Recuperação de carrinho', 'Campanhas personalizadas'],
      color: 'from-purple-500 to-pink-500',
      category: 'vendas'
    },
    {
      icon: CreditCard,
      title: 'Pagamento Online',
      description: 'Receba por PIX ou Crédito direto no cardápio. Simples, seguro e eficiente.',
      features: ['PIX instantâneo', 'Cartão de crédito', 'Múltiplas formas', 'Segurança total'],
      color: 'from-orange-500 to-red-500',
      category: 'vendas'
    },

    // Para atendimento no salão
    {
      icon: Users,
      title: 'Aplicativo para Garçom',
      description: 'Visualize mesas ocupadas e disponíveis, adicione itens à comanda, edite pedidos, troque clientes de mesa e feche a conta.',
      features: ['Gestão de mesas', 'Comandas digitais', 'Pedidos em tempo real', 'Fechamento automático'],
      color: 'from-cyan-500 to-blue-500',
      category: 'salao'
    },
    {
      icon: Settings,
      title: 'PDV',
      description: 'Centralize seus pedidos locais e por telefone em uma única ferramenta, facilitando a rotina de trabalho.',
      features: ['Centralização total', 'Pedidos telefônicos', 'Gestão unificada', 'Relatórios completos'],
      color: 'from-emerald-500 to-green-500',
      category: 'salao'
    },
    {
      icon: QrCode,
      title: 'QR Code para Mesa',
      description: 'Crie um cardápio digital com QR Code para mesas e facilite o autoatendimento no seu restaurante.',
      features: ['QR Code personalizado', 'Autoatendimento', 'Sem contato', 'Experiência moderna'],
      color: 'from-indigo-500 to-purple-500',
      category: 'salao'
    },

    // Para gestão do estabelecimento
    {
      icon: BarChart3,
      title: 'Emissão de Notas Fiscais',
      description: 'Solução prática e intuitiva de emissão de nota fiscal, configure desde o tipo da NFC-e até a reemissão de notas canceladas.',
      features: ['NFC-e automática', 'Reemissão simples', 'Compliance total', 'Integração com Receita'],
      color: 'from-red-500 to-pink-500',
      category: 'gestao'
    },
    {
      icon: ShoppingCart,
      title: 'Frente de Caixa',
      description: 'Processo de abertura e fechamento de caixa de forma simples e prática.',
      features: ['Abertura automática', 'Fechamento inteligente', 'Relatórios diários', 'Controle total'],
      color: 'from-yellow-500 to-orange-500',
      category: 'gestao'
    },
    {
      icon: TrendingUp,
      title: 'Controle de Estoque',
      description: 'Uma gestão simples no cardápio de ativação e quantidade de itens, além de uma tela de configuração das regras de operação de estoque esgotado.',
      features: ['Controle automático', 'Alertas de estoque', 'Gestão de produtos', 'Regras personalizadas'],
      color: 'from-teal-500 to-cyan-500',
      category: 'gestao'
    },
    {
      icon: BarChart3,
      title: 'Gestor de Pedidos e Relatório',
      description: 'Tenha todos os pedidos feitos em canais diferentes em um só lugar.',
      features: ['Visão unificada', 'Relatórios detalhados', 'Analytics avançado', 'Insights de vendas'],
      color: 'from-violet-500 to-purple-500',
      category: 'gestao'
    }
  ]

  const categories = [
    { id: 'vendas', title: 'Para vendas no restaurante', color: 'from-blue-500 to-cyan-500' },
    { id: 'salao', title: 'Para atendimento no salão', color: 'from-green-500 to-emerald-500' },
    { id: 'gestao', title: 'Para gestão do estabelecimento', color: 'from-purple-500 to-pink-500' }
  ]

  const getCategoryFuncionalidades = (category: string) => {
    return funcionalidades.filter(func => func.category === category)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden" ref={ref}>
      {/* Tech Circuit Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            radial-gradient(circle at 75% 75%, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}></div>
      </div>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
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
          className="absolute bottom-20 left-20 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"
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

      <div className="container relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Smartphone className="w-4 h-4 mr-2" />
            Funcionalidades Completas
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-blue-600">Gestão completa</span> para seu restaurante
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tudo que você precisa para automatizar, otimizar e escalar seu restaurante em uma única plataforma.
          </p>
        </motion.div>

        {/* Categories */}
        {categories.map((category, categoryIndex) => {
          const categoryFuncionalidades = getCategoryFuncionalidades(category.id)
          
          return (
            <motion.div
              key={category.id}
              className="mb-20"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            >
              {/* Category Header */}
              <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 + 0.2 }}
              >
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {category.title}
                </h3>
                <div className={`w-24 h-1 bg-gradient-to-r ${category.color} mx-auto rounded-full`}></div>
              </motion.div>

              {/* Funcionalidades Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {categoryFuncionalidades.map((funcionalidade, index) => {
                  const IconComponent = funcionalidade.icon
                  
                  return (
                    <motion.div
                      key={index}
                      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                      initial={{ opacity: 0, y: 30 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: categoryIndex * 0.2 + 0.3 + index * 0.1 }}
                      whileHover={{ y: -5, scale: 1.02 }}
                    >
                      {/* Icon */}
                      <motion.div 
                        className={`w-16 h-16 bg-gradient-to-br ${funcionalidade.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </motion.div>

                      {/* Content */}
                      <div>
                        <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                          {funcionalidade.title}
                        </h4>
                        
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {funcionalidade.description}
                        </p>
                        
                        {/* Features */}
                        <div className="space-y-3">
                          {funcionalidade.features.map((feature, featureIndex) => (
                            <motion.div
                              key={featureIndex}
                              className="flex items-center"
                              initial={{ opacity: 0, x: -20 }}
                              animate={inView ? { opacity: 1, x: 0 } : {}}
                              transition={{ duration: 0.4, delay: categoryIndex * 0.2 + 0.5 + index * 0.1 + featureIndex * 0.05 }}
                            >
                              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                              <span className="text-gray-700 font-medium">{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          )
        })}

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-24"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.button
            onClick={() => {
              const form = document.getElementById('teste-gratis-form');
              if (form) form.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-6 px-12 rounded-2xl text-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Teste todas as funcionalidades grátis
            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform inline" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default AnotaAIFuncionalidades
