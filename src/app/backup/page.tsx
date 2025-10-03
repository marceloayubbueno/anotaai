"use client";
import Header from '@/components/Header'
import AnotaAIHero from '@/components/AnotaAI/Hero'
import AnotaAISecaoLogos from '@/components/AnotaAI/SecaoImagens'
import AnotaAISecaoComparacao from '@/components/AnotaAI/SecaoComparacao'
import AnotaAISecaoGestao from '@/components/AnotaAI/SecaoGestao'
import AnotaAITiposNegocio from '@/components/AnotaAI/TiposNegocio'
import AnotaAIPorQueEscolher from '@/components/AnotaAI/PorQueEscolher'
import AnotaAICaseSucesso from '@/components/AnotaAI/CaseSucesso'
import AnotaAICasesSucesso from '@/components/AnotaAI/CasesSucesso'
import AnotaAIFAQ from '@/components/AnotaAI/FAQ'
import AnotaAIFooter from '@/components/AnotaAI/AnotaAIFooter'
import ChatBotForm from '@/components/ChatBotForm'
import ChatBot from '@/components/ChatBot'
import { useState } from 'react'

export default function Backup() {
  const [showChat, setShowChat] = useState(false);
  const mobileStyle = typeof window !== 'undefined' && window.innerWidth <= 600

  return (
    <main className="overflow-hidden">
      <Header />
      
      {/* Faixa Promocional Animada */}
      <div className="bg-blue-900 py-4 overflow-hidden relative w-full mt-20">
        <div 
          className="flex whitespace-nowrap"
          style={{
            animation: 'marquee 25s linear infinite',
            width: '200%'
          }}
        >
          <div className="flex items-center space-x-16 text-white flex-shrink-0">
            <span className="text-yellow-400 font-bold text-lg">✨ OFERTA ESPECIAL</span>
            <span className="text-white font-medium text-base">Tem oferta te esperando - vem ver!</span>
            <span className="text-yellow-400 font-bold text-lg">🏷️ PLANO START</span>
            <span className="text-white font-medium text-base">Plano Start com oferta especial</span>
            <span className="text-yellow-400 font-bold text-lg">💰 ECONOMIA</span>
            <span className="text-white font-medium text-base">Economize até 60% no seu primeiro mês</span>
            <span className="text-yellow-400 font-bold text-lg">🎯 TESTE GRÁTIS</span>
            <span className="text-white font-medium text-base">Teste grátis por 7 dias - sem cartão</span>
          </div>
          <div className="flex items-center space-x-16 text-white flex-shrink-0">
            <span className="text-yellow-400 font-bold text-lg">✨ OFERTA ESPECIAL</span>
            <span className="text-white font-medium text-base">Tem oferta te esperando - vem ver!</span>
            <span className="text-yellow-400 font-bold text-lg">🏷️ PLANO START</span>
            <span className="text-white font-medium text-base">Plano Start com oferta especial</span>
            <span className="text-yellow-400 font-bold text-lg">💰 ECONOMIA</span>
            <span className="text-white font-medium text-base">Economize até 60% no seu primeiro mês</span>
            <span className="text-yellow-400 font-bold text-lg">🎯 TESTE GRÁTIS</span>
            <span className="text-white font-medium text-base">Teste grátis por 7 dias - sem cartão</span>
          </div>
        </div>
      </div>
      
      <AnotaAIHero />
      <AnotaAISecaoLogos />
      <AnotaAISecaoComparacao />
      <AnotaAISecaoGestao />
      <AnotaAITiposNegocio />
      <AnotaAIPorQueEscolher />
      <AnotaAICaseSucesso />
      <AnotaAICasesSucesso />
      <AnotaAIFAQ />
      <AnotaAIFooter />

      {/* ChatBot Flutuante */}
      <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 9999 }}>
        <button
          onClick={() => setShowChat((v) => !v)}
          style={{
            background: 'linear-gradient(135deg, #2563eb 0%, #06b6d4 100%)',
            color: '#fff',
            border: 'none',
            borderRadius: '50%',
            width: '60px',
            height: '60px',
            cursor: 'pointer',
            fontSize: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 16px rgba(37, 99, 235, 0.3)',
            transition: 'all 0.3s ease',
          }}
        >
          {showChat ? '×' : '🤖'}
        </button>
      </div>
      
      {showChat && (
        <div
          style={{
            position: 'fixed',
            bottom: '6rem',
            right: '2rem',
            zIndex: 9998,
            width: '380px',
            height: '500px',
          }}
        >
          <ChatBot />
        </div>
      )}
    </main>
  )
}
