import React, { useEffect, useState } from 'react';

interface CookieConsentBannerProps {
  onConsentChange?: (consent: boolean) => void;
}

const CONSENT_KEY = 'cookie_consent';

const CookieConsentBanner: React.FC<CookieConsentBannerProps> = ({ onConsentChange }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (consent === null) {
      setVisible(true);
    } else if (onConsentChange) {
      onConsentChange(consent === 'true');
    }
  }, [onConsentChange]);

  const handleConsent = (consent: boolean) => {
    localStorage.setItem(CONSENT_KEY, consent ? 'true' : 'false');
    setVisible(false);
    if (onConsentChange) onConsentChange(consent);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 w-full z-[1000] px-0"
      role="dialog"
      aria-live="polite"
      aria-label="Aviso de cookies"
    >
      <div className="w-full backdrop-blur-md bg-blue-900/95 border-t border-blue-500/30 shadow-2xl flex flex-col items-center py-6 px-4 md:px-0 animate-fade-in">
        <div className="max-w-3xl w-full flex flex-col md:flex-row items-center justify-center gap-4">
          <span className="text-center md:text-left text-gray-100 text-base md:text-lg flex-1">
            Utilizamos cookies para melhorar sua experiência e para fins de análise e marketing. Saiba mais em nossa{' '}
            <a href="/privacidade" className="underline text-cyan-400 hover:text-cyan-300 transition-colors" target="_blank" rel="noopener noreferrer">Política de Privacidade</a>.
          </span>
          <div className="flex gap-3 flex-row flex-shrink-0 mt-3 md:mt-0">
            <button
              onClick={() => handleConsent(true)}
              className="!bg-gradient-to-r !from-blue-600 !to-cyan-600 hover:!from-blue-700 hover:!to-cyan-700 !text-white font-semibold py-2 px-6 rounded-lg shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(to right, #1d4ed8, #0891b2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(to right, #2563eb, #06b6d4)';
              }}
              style={{ 
                background: 'linear-gradient(to right, #2563eb, #06b6d4)',
                color: 'white'
              }}
              autoFocus
            >
              Aceitar
            </button>
            <button
              onClick={() => handleConsent(false)}
              className="bg-transparent border border-blue-500/50 text-gray-200 hover:bg-blue-500/10 hover:border-blue-400 hover:text-white font-semibold py-2 px-6 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Recusar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsentBanner; 