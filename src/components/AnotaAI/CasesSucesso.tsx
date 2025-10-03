'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star, Quote, TrendingUp, Users, Clock, DollarSign } from 'lucide-react'

const AnotaAICasesSucesso = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const cases = [
    {
      quote: "Sem a Anota AI, a gente não conseguiria atender com 100% de eficácia. O sistema revolucionou nosso atendimento e aumentou significativamente nossas vendas.",
      author: "Diogo Fülber",
      role: "Sócio e fundador",
      company: "Pizzaria do Maestro",
      rating: 5,
      results: {
        atendimento: "+100% eficácia",
        vendas: "+80% aumento",
        tempo: "60% economia"
      },
      avatar: "🍕",
      color: "from-orange-500 to-red-500"
    },
    {
      quote: "Eu indico a Anota AI pra quem quer aumentar o seu faturamento. O sistema de automação nos permitiu focar no que realmente importa: nossos clientes.",
      author: "Bruno Andrade",
      role: "Proprietário",
      company: "Bah Q Massa ®",
      rating: 5,
      results: {
        faturamento: "+65% aumento",
        clientes: "+40% satisfação",
        tempo: "50% economia"
      },
      avatar: "🍝",
      color: "from-green-500 to-emerald-500"
    },
    {
      quote: "O Anota AI melhorou a gestão de dados e o atendimento do meu delivery. Agora conseguimos processar muito mais pedidos com menos erros e mais agilidade.",
      author: "Fernando Sampaio",
      role: "Proprietário",
      company: "Pizzaria Igarapé",
      rating: 5,
      results: {
        pedidos: "+120% processamento",
        erros: "-90% redução",
        agilidade: "+200% velocidade"
      },
      avatar: "🍕",
      color: "from-blue-500 to-cyan-500"
    }
  ]

  const stats = [
    {
      number: 50,
      suffix: 'mil+',
      label: 'Restaurantes automatizados',
      icon: Users,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      number: 60,
      suffix: '%',
      label: 'Economia de tempo',
      icon: Clock,
      color: 'from-green-500 to-emerald-500'
    },
    {
      number: 50,
      suffix: '%',
      label: 'Aumento de faturamento',
      icon: TrendingUp,
      color: 'from-purple-500 to-pink-500'
    },
    {
      number: 98,
      suffix: '%',
      label: 'Satisfação dos clientes',
      icon: Star,
      color: 'from-yellow-500 to-orange-500'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden" ref={ref}>
      {/* Tech Hexagon Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(30deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(-30deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
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
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium mb-6 border border-blue-500/30"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Star className="w-4 h-4 mr-2" />
            Cases de Sucesso Reais
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            O que nossos <span className="text-blue-400">clientes falam</span> sobre a Anota AI
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Mais de 50 mil restaurantes já automatizaram e reduziram seus custos com nossa plataforma.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {/* Icon */}
                <motion.div 
                  className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </motion.div>

                {/* Number */}
                <motion.div 
                  className="text-4xl md:text-5xl font-bold text-white mb-2"
                  initial={{ scale: 0.5 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                >
                  {stat.number}
                  <span className="text-blue-400">{stat.suffix}</span>
                </motion.div>

                {/* Label */}
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {cases.map((testimonial, index) => (
            <motion.div
              key={index}
              className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:border-blue-400/40 transition-all duration-300 group overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* Card glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ scale: 0.8 }}
                whileHover={{ scale: 1 }}
              />
              
              {/* Status indicator */}
              <motion.div
                className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full"
                animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center">
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* Avatar */}
              <div className="text-4xl mb-4">{testimonial.avatar}</div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-300 text-lg leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </blockquote>

              {/* Results */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-blue-400 mb-3 uppercase tracking-wider">Resultados Alcançados</h4>
                <div className="space-y-2">
                  {Object.entries(testimonial.results).map(([key, value], resultIndex) => (
                    <motion.div
                      key={resultIndex}
                      className="flex items-center justify-between"
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 1.2 + index * 0.2 + resultIndex * 0.1 }}
                    >
                      <span className="text-gray-400 text-sm capitalize">{key}:</span>
                      <span className="text-green-400 font-semibold text-sm">{value}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Author */}
              <div className="border-t border-blue-500/20 pt-4">
                <div className="text-white font-bold text-lg">{testimonial.author}</div>
                <div className="text-blue-400 font-medium">{testimonial.role}</div>
                <div className="text-gray-400 text-sm">{testimonial.company}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Pronto para fazer parte desses resultados?
            </h3>
            <p className="text-gray-300 mb-6">
              Junte-se a mais de 50 mil restaurantes que já automatizaram e aumentaram suas vendas.
            </p>
            <motion.button
              onClick={() => {
                const form = document.getElementById('teste-gratis-form');
                if (form) form.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Começar meu teste grátis agora
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AnotaAICasesSucesso
