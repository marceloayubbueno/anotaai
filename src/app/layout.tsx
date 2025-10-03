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
        
        {/* Critical CSS Inline */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Critical CSS para performance */
            * { box-sizing: border-box; }
            body { margin: 0; font-family: system-ui, -apple-system, sans-serif; }
            .container { max-width: 1200px; margin: 0 auto; padding: 0 1rem; }
            .bg-gradient-to-br { background: linear-gradient(to bottom right, #1e3a8a, #1e40af, #0891b2); }
            .text-white { color: #ffffff; }
            .font-bold { font-weight: 700; }
            .flex { display: flex; }
            .items-center { align-items: center; }
            .justify-center { justify-content: center; }
            .w-full { width: 100%; }
            .h-screen { height: 100vh; }
            .min-h-screen { min-height: 100vh; }
            .py-20 { padding-top: 5rem; padding-bottom: 5rem; }
            .px-4 { padding-left: 1rem; padding-right: 1rem; }
            .mx-auto { margin-left: auto; margin-right: auto; }
            .relative { position: relative; }
            .absolute { position: absolute; }
            .inset-0 { top: 0; right: 0; bottom: 0; left: 0; }
            .overflow-hidden { overflow: hidden; }
            .bg-white { background-color: #ffffff; }
            .shadow-sm { box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); }
            .border-b { border-bottom-width: 1px; }
            .border-gray-200 { border-color: #e5e7eb; }
            .fixed { position: fixed; }
            .top-0 { top: 0; }
            .left-0 { left: 0; }
            .w-full { width: 100%; }
            .z-50 { z-index: 50; }
            .h-16 { height: 4rem; }
            .h-20 { height: 5rem; }
            .flex-shrink-0 { flex-shrink: 0; }
            .hidden { display: none; }
            .md\\:flex { display: flex; }
            .md\\:h-20 { height: 5rem; }
            .sm\\:px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
            .lg\\:px-8 { padding-left: 2rem; padding-right: 2rem; }
            @media (min-width: 640px) { .sm\\:px-6 { padding-left: 1.5rem; padding-right: 1.5rem; } }
            @media (min-width: 768px) { .md\\:flex { display: flex; } .md\\:h-20 { height: 5rem; } }
            @media (min-width: 1024px) { .lg\\:px-8 { padding-left: 2rem; padding-right: 2rem; } }
          `
        }} />
        
        {/* Google Analytics - Carregamento Condicional Otimizado */}
        <script dangerouslySetInnerHTML={{
          __html: `
            // Inicializar GA apenas quando necessário
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            
            // Carregar GA apenas após interação do usuário ou 3 segundos
            let gaLoaded = false;
            const loadGA = () => {
              if (gaLoaded) return;
              gaLoaded = true;
              
              gtag('js', new Date());
              gtag('config', 'G-0P6BBWC2L1', {
                'send_page_view': false,
                'anonymize_ip': true
              });
              
              const script = document.createElement('script');
              script.async = true;
              script.src = 'https://www.googletagmanager.com/gtag/js?id=G-0P6BBWC2L1';
              document.head.appendChild(script);
              
              // Remover listeners após carregamento
              document.removeEventListener('click', loadGA);
              document.removeEventListener('scroll', loadGA);
              document.removeEventListener('keydown', loadGA);
            };
            
            // Carregar após interação ou timeout
            document.addEventListener('click', loadGA, { once: true });
            document.addEventListener('scroll', loadGA, { once: true });
            document.addEventListener('keydown', loadGA, { once: true });
            setTimeout(loadGA, 3000);
          `,
        }} />
        
        {/* Service Worker Registration */}
        <script dangerouslySetInnerHTML={{
          __html: `
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', function() {
                navigator.serviceWorker.register('/sw.js')
                  .then(function(registration) {
                    console.log('SW registered: ', registration);
                  })
                  .catch(function(registrationError) {
                    console.log('SW registration failed: ', registrationError);
                  });
              });
            }
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