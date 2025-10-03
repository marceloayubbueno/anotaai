import type { Metadata } from 'next'
import './globals.css'
import PixelAndConsentProvider from '../components/PixelAndConsentProvider';

export const metadata: Metadata = {
  title: 'Anota AI - Gestão Completa para Restaurantes | Cardápio Digital, Atendente Virtual e Automações',
  description: 'Automatize seu restaurante com a Anota AI. Cardápio digital, atendente virtual, pagamentos online e gestão completa em uma única plataforma. Teste grátis por 7 dias.',
  keywords: 'restaurante, cardápio digital, atendente virtual, automação restaurante, gestão restaurante, pagamento online, delivery, automação, N8N, sistema restaurante',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        
        {/* Resource Hints para Performance */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="preconnect" href="https://img.youtube.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.youtube.com" />
        
        {/* Preload Critical Resources */}
        <link rel="preload" href="/images/anota ai/logo.svg" as="image" type="image/svg+xml" />
        
        {/* Google Analytics - Otimizado para Performance */}
        <script dangerouslySetInnerHTML={{
          __html: `
            // Carregar GA de forma não-bloqueante
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0P6BBWC2L1', {
              'send_page_view': false
            });
            
            // Carregar script após DOM
            window.addEventListener('load', function() {
              const script = document.createElement('script');
              script.async = true;
              script.src = 'https://www.googletagmanager.com/gtag/js?id=G-0P6BBWC2L1';
              document.head.appendChild(script);
            });
          `,
        }} />
        {/* Meta Pixel será controlado por componente client-side */}
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <div className="min-h-screen bg-white">
          {children}
        </div>
        <PixelAndConsentProvider />
      </body>
    </html>
  )
} 