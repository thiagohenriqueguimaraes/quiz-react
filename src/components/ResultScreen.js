import React from 'react';
import { FaWhatsapp, FaFacebook } from 'react-icons/fa';
import './variables.css';  // Importando variáveis
import './ResultScreen.css';

const ResultScreen = ({ resultText, resultImage, onReset, onShare }) => {

  const handleFacebookShare = () => {
    const quizUrl = 'https://quiz-candidato-ideal.web.app/';
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(quizUrl)}`;
    window.open(facebookUrl, '_blank');
    window.gtag('event', 'quiz_results_shared_facebook'); // Tagueamento para o resultado
  };

  const handleWhatsAppShare = () => {
    const message = `${resultText}. Faça o quiz você também!`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    window.gtag('event', 'quiz_results_shared_whatsapp'); // Tagueamento para o resultado
  };

  return (
    <div>
      <h3 className='result-text'>O seu candidato é:</h3>
      <img src={resultImage} alt="Foto do candidato" className='result-image' style={{ display: 'block', margin: 'auto' }} />
      <p>{resultText}</p>
      
      <button 
        onClick={() => {
          onReset();
          window.gtag('event', 'quiz_restarted');
        }} 
        style={{
          display: 'block',
          margin: '1.25rem auto',
          padding: 'var(--button-padding)',
          backgroundColor: 'var(--primary-color)',
          color: 'var(--text-color)',
          border: 'none',
          borderRadius: 'var(--button-radius)',
          fontSize: 'var(--font-size-large)',
          cursor: 'pointer',
          textTransform: 'uppercase',
          transition: 'background-color 0.3s ease',
          filter: 'brightness(1)'
        }}
        onMouseOver={(e) => e.target.style.filter = 'brightness(0.8)'}
        onMouseOut={(e) => e.target.style.filter = 'brightness(1)'}
      >
        Reiniciar Quiz
      </button>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '0.625rem', marginTop: '0.625rem' }}>
        <button 
          onClick={handleWhatsAppShare} 
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: 'var(--button-padding)',
            backgroundColor: 'var(--secondary-color)',
            color: 'var(--text-color)',
            border: 'none',
            borderRadius: 'var(--button-radius)',
            fontSize: 'var(--font-size-medium)',
            cursor: 'pointer',
            filter: 'brightness(1)'
          }}
          onMouseOver={(e) => e.target.style.filter = 'brightness(0.8)'}
          onMouseOut={(e) => e.target.style.filter = 'brightness(1)'}
        >
          <FaWhatsapp style={{ marginRight: '0.5rem' }} /> WhatsApp
        </button>

        <button 
          onClick={handleFacebookShare} 
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: 'var(--button-padding)',
            backgroundColor: 'var(--facebook-color)',
            color: 'var(--text-color)',
            border: 'none',
            borderRadius: 'var(--button-radius)',
            fontSize: 'var(--font-size-medium)',
            cursor: 'pointer',
            filter: 'brightness(1)'
          }}
          onMouseOver={(e) => e.target.style.filter = 'brightness(0.8)'}
          onMouseOut={(e) => e.target.style.filter = 'brightness(1)'}
        >
          <FaFacebook style={{ marginRight: '0.5rem' }} /> Facebook
        </button>
      </div>
    </div>
  );
};

export default ResultScreen;