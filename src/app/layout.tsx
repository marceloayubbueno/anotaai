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
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-0P6BBWC2L1"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0P6BBWC2L1');
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