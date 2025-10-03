'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Instagram, Youtube, Linkedin, MessageCircle } from 'lucide-react'
import Image from 'next/image'

const AnotaAIFooter = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const links = {
    "A Anota AI": [
      "Contrate agora",
      "Fale com um consultor",
      "Teste grátis",
      "Suporte técnico",
      "Trilha de aprendizado"
    ],
    "Funcionalidades": [
      "Pagamento online",
      "Cardápio digital",
      "Ferramenta de Gestão",
      "Marketing para restaurante",
      "Salão de Restaurante",
      "Atendente virtual"
    ],
    "Acompanhe": [
      "Blog",
      "Integrações",
      "Programa de parceiros",
      "Materiais gratuitos",
      "Vagas"
    ]
  }

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: MessageCircle, href: "#", label: "WhatsApp" }
  ]

  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900 py-20" ref={ref}>
      <div className="container mx-auto px-8">
        {/* Logo Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Logo with eyes */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-2">
              {/* Eyes */}
              <div className="flex space-x-1">
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              {/* Logo Text */}
              <span className="text-white text-4xl md:text-5xl font-bold ml-4">
                anota AI
              </span>
            </div>
          </div>
        </motion.div>

        {/* Links Section */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {Object.entries(links).map(([category, linkList], index) => (
            <div key={category} className="text-center md:text-left">
              <h3 className="text-xl font-bold text-white mb-6">
                {category}
              </h3>
              <ul className="space-y-3">
                {linkList.map((link, linkIndex) => (
                  <motion.li
                    key={link}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + (0.05 * (index * 6 + linkIndex)) }}
                  >
                    <a 
                      href="#" 
                      className="text-white hover:text-cyan-300 transition-colors duration-200 block"
                    >
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Footer Bottom */}
        <motion.div 
          className="border-t border-white/20 pt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Left - Social Icons */}
            <div className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + (0.1 * index) }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            {/* Center - Legal Links */}
            <div className="text-center">
              <div className="flex justify-center space-x-4 text-white text-sm">
                <a href="#" className="hover:text-cyan-300 transition-colors duration-200">
                  Termos de Uso
                </a>
                <span>•</span>
                <a href="#" className="hover:text-cyan-300 transition-colors duration-200">
                  Política de Privacidade
                </a>
              </div>
            </div>

            {/* Right - Company Info */}
            <div className="text-center md:text-right">
              <div className="text-white text-sm space-y-1">
                <p>© 2025 Anota AI</p>
                <p>IGROW SOLUÇÕES DIGITAIS LTDA</p>
                <p>CNPJ: 27.864.392/0001-93</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AnotaAIFooter
