'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import { Users, Clock, TrendingUp, Gift, ArrowRight, Play, Star, Zap, CheckCircle, Smartphone, Bot } from 'lucide-react'

const AnotaAIHero = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const stats = [
    { number: 50, suffix: 'mil+', label: 'Restaurantes automatizados', icon: Users },
    { number: 60, suffix: '%', label: 'Economia de tempo', icon: Clock },
    { number: 50, suffix: '%', label: 'Aumento de faturamento', icon: TrendingUp },
    { number: 7, suffix: ' dias', label: 'Teste grátis', icon: Gift }
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900 min-h-screen flex items-center" ref={ref}>
      {/* Tech Grid Overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          animation: 'grid-move 15s linear infinite'
        }}></div>
      </div>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            animation: 'grid-move 20s linear infinite'
          }}></div>
        </div>
        
        {/* Floating Elements */}
        <motion.div 
          className="absolute top-20 left-10 text-cyan-400 font-mono text-sm opacity-30"
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          &lt;Anota AI&gt;
        </motion.div>
        <motion.div 
          className="absolute top-40 right-20 text-cyan-400 font-mono text-sm opacity-30"
          animate={{ y: [0, 20, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          const automation = true;
        </motion.div>
        <motion.div 
          className="absolute bottom-40 left-20 text-cyan-400 font-mono text-sm opacity-30"
          animate={{ y: [0, -15, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          return &lt;Success /&gt;;
        </motion.div>
        
        {/* Animated Background Shapes */}
        <motion.div 
          className="absolute -top-40 -right-32 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-32 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
          {/* Left Column - Content */}
          <motion.div
            className="space-y-6 lg:space-y-8 lg:pr-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Zap className="w-4 h-4 mr-2" />
              Gestão Completa para Restaurantes
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Economize tempo e dinheiro com uma{' '}
              <span className="text-yellow-400">
                gestão completa
              </span>{' '}
              do seu restaurante
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              className="text-lg sm:text-xl text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Robô de atendimento, app para garçom, cardápio digital e muito mais, tudo isso em um só lugar!
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.button
                onClick={() => {
                  const form = document.querySelector('form');
                  if (form) form.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }}
                className="relative bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-blue-900 font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-xl text-base sm:text-lg shadow-2xl transition-all duration-300 overflow-hidden group w-full sm:w-auto"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Loading animation overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  style={{ display: 'none' }}
                />
                <span className="relative z-10 flex items-center justify-center">
                  <span>Contratar agora</span>
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.div>
                </span>
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-6 sm:pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              {stats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <motion.div
                    key={index}
                    className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-3 sm:p-4 border border-white/20 hover:bg-white/15 transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.05 }}
                  >
                    <div className="flex items-center justify-center mb-3">
                      <motion.div
                        className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center mr-3"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <IconComponent className="w-5 h-5 text-blue-400" />
                      </motion.div>
                      <div className="text-left">
                        <div className="text-2xl sm:text-3xl font-bold text-white">
                          <CountUp end={parseInt(stat.number.toString())} duration={2} delay={1.5 + index * 0.2} />
                          {stat.suffix}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm font-medium">{stat.label}</p>
                    
                    {/* Progress bar effect */}
                    <motion.div
                      className="w-full h-1 bg-blue-500/30 rounded-full mt-2 overflow-hidden"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 1, delay: 2 + index * 0.2 }}
                    >
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
                        initial={{ x: '-100%' }}
                        animate={{ x: '100%' }}
                        transition={{ duration: 2, delay: 2 + index * 0.2 }}
                      />
                    </motion.div>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>

          {/* Right Column - Formulário */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Formulário Card */}
            <motion.div 
              className="relative bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-4 sm:p-6 lg:p-8 w-full max-w-lg mx-auto border border-gray-200/50 overflow-hidden"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Card header with gradient */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500"></div>
              
              {/* Floating particles */}
              <motion.div
                className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-60"
                animate={{ y: [0, -10, 0], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute top-8 right-8 w-1 h-1 bg-cyan-400 rounded-full opacity-40"
                animate={{ y: [0, -8, 0], opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
              />
              {/* Título do Formulário */}
              <div className="mb-4">
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  Teste grátis e automatize seu atendimento hoje
                </h2>
                <p className="text-gray-600 text-sm">
                  Não é necessário incluir dados do cartão de crédito
                </p>
              </div>

              {/* Formulário */}
              <form className="space-y-3">
                {/* Nome */}
                <div className="relative">
                  <input
                    type="text"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-gray-50/50 backdrop-blur-sm text-sm sm:text-base"
                    placeholder="Seu nome *"
                  />
                  <motion.div
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    👤
                  </motion.div>
                </div>

                {/* Email */}
                <div className="relative">
                  <input
                    type="email"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-gray-50/50 backdrop-blur-sm text-sm sm:text-base"
                    placeholder="Seu email pessoal *"
                  />
                  <motion.div
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                  >
                    📧
                  </motion.div>
                </div>

                {/* WhatsApp */}
                <div className="relative">
                  <input
                    type="tel"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-gray-50/50 backdrop-blur-sm text-sm sm:text-base"
                    placeholder="Seu WhatsApp *"
                  />
                  <motion.div
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
                  >
                    📱
                  </motion.div>
                </div>

                {/* Nome do delivery */}
                <div className="relative">
                  <input
                    type="text"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-gray-50/50 backdrop-blur-sm text-sm sm:text-base"
                    placeholder="Nome do seu delivery *"
                  />
                  <motion.div
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                  >
                    🏪
                  </motion.div>
                </div>

                {/* Quantidade de pedidos */}
                <div>
                  <p className="text-xs font-medium text-gray-700 mb-1">Quantidade de pedidos por dia *</p>
                  <div className="space-y-1">
                    <label className="flex items-center">
                      <input type="radio" name="pedidos" value="menos10" className="mr-2" />
                      <span className="text-sm text-gray-700">Menos de 10</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="pedidos" value="mais10" className="mr-2" />
                      <span className="text-sm text-gray-700">Mais de 10</span>
                    </label>
                  </div>
                </div>

                {/* Computador */}
                <div>
                  <p className="text-xs font-medium text-gray-700 mb-1">Já tem computador ou notebook? *</p>
                  <div className="space-y-1">
                    <label className="flex items-center">
                      <input type="radio" name="computador" value="sim" className="mr-2" />
                      <span className="text-sm text-gray-700">Sim</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="computador" value="nao" className="mr-2" />
                      <span className="text-sm text-gray-700">Não</span>
                    </label>
                  </div>
                </div>

                {/* Faturamento */}
                <div>
                  <p className="text-xs font-medium text-gray-700 mb-1">Qual seu faturamento mensal?</p>
                  <select className="w-full px-4 py-2.5 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="">Selecione uma opção</option>
                    <option value="ate5k">Até R$ 5.000</option>
                    <option value="5k-10k">R$ 5.000 - R$ 10.000</option>
                    <option value="10k-20k">R$ 10.000 - R$ 20.000</option>
                    <option value="20k+">Acima de R$ 20.000</option>
                  </select>
                </div>

                {/* Botão de Envio */}
                <motion.button
                  type="submit"
                  className="relative w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-2.5 sm:py-3 px-6 rounded-lg transition-all duration-300 overflow-hidden group text-sm sm:text-base"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  />
                  <span className="relative z-10 flex items-center justify-center">
                    <motion.span
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="mr-2"
                    >
                      ✨
                    </motion.span>
                    Testar grátis por 7 dias
                  </span>
                </motion.button>

                {/* Disclaimer */}
                <p className="text-xs text-gray-500 text-center">
                  *válido somente para novas contratações
                </p>
              </form>
              
              {/* Security Badges */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-xs text-gray-500 text-center mb-3">Certificações de Segurança</p>
                <div className="flex items-center justify-center space-x-2 sm:space-x-4 flex-wrap gap-2">
                  <motion.div
                    className="flex items-center space-x-1 bg-green-100 px-3 py-1 rounded-full"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-green-600 text-xs">🔒</span>
                    <span className="text-green-700 text-xs font-medium">SSL</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center space-x-1 bg-blue-100 px-3 py-1 rounded-full"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-blue-600 text-xs">🛡️</span>
                    <span className="text-blue-700 text-xs font-medium">LGPD</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center space-x-1 bg-purple-100 px-3 py-1 rounded-full"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-purple-600 text-xs">✓</span>
                    <span className="text-purple-700 text-xs font-medium">ISO</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(60px, 60px); }
        }
      `}</style>
    </section>
  )
}

export default AnotaAIHero
