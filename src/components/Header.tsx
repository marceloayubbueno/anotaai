'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import { useRouter, usePathname } from 'next/navigation'
import Image from 'next/image'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const isTesteGratis = pathname === '/testegratis';

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 fixed top-0 left-0 w-full z-50">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="flex items-center">
                <Image
                  src="/images/anota ai/logo.svg"
                  alt="Anota AI"
                  width={150}
                  height={50}
                  className="h-10 w-auto"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          {!isTesteGratis && (
            <nav className="hidden md:flex items-center space-x-8">
              <div className="relative group">
                <button className="flex items-center text-gray-700 hover:text-gray-900 font-medium">
                  Funcionalidades
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-200">
                  <Link href="#funcionalidades" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">Cardápio Digital</Link>
                  <Link href="#funcionalidades" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">Atendente Virtual</Link>
                  <Link href="#funcionalidades" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">Pagamento Online</Link>
                  <Link href="#funcionalidades" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">Gestão Completa</Link>
                </div>
              </div>
              <div className="relative group">
                <button className="flex items-center text-gray-700 hover:text-gray-900 font-medium">
                  Integrações
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-200">
                  <Link href="#integracao" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">Pagamentos</Link>
                  <Link href="#integracao" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">Delivery</Link>
                  <Link href="#integracao" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">ERP</Link>
                </div>
              </div>
              <Link href="#planos" className="text-gray-700 hover:text-gray-900 font-medium">Planos</Link>
              <Link href="#materiais" className="text-gray-700 hover:text-gray-900 font-medium">Materiais para download</Link>
            </nav>
          )}

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {isTesteGratis ? (
              <button
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-200"
                onClick={() => {
                  const form = document.getElementById('form-testegratis');
                  if (form) form.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }}
              >
                Teste Grátis
              </button>
            ) : (
              <Link href="https://wa.me/5511999999999" className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-200 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                Fale conosco via WhatsApp
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-gray-900 p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {!isTesteGratis && <>
                <Link href="#services" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md">Serviços</Link>
                <Link href="#portfolio" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md">Portfólio</Link>
                <Link href="/briefing" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md">Briefing</Link>
                <Link href="#pricing" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md">Preços</Link>
                <Link href="#about" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md">Sobre</Link>
              </>}
              <div className="pt-4 border-t border-gray-200">
                {isTesteGratis ? (
                  <button
                    className="block w-full px-3 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-md mt-2"
                    onClick={() => {
                      setIsMenuOpen(false);
                      const form = document.getElementById('form-testegratis');
                      if (form) form.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }}
                  >
                    Teste Grátis
                  </button>
                ) : (
                  <Link href="#" onClick={e => {e.preventDefault(); setIsMenuOpen(false); const form = document.getElementById('formulario-contato'); if (form) form.scrollIntoView({ behavior: 'smooth', block: 'center' });}} className="block px-3 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-md mt-2">Solicitar Orçamento</Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header 