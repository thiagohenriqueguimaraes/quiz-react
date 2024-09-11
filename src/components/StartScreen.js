import React from 'react';
import { FaWhatsapp, FaFacebook } from 'react-icons/fa';
import './variables.css';  // Importando variáveis

const StartScreen = ({ onStart }) => {

  const handleFacebookShare = () => {
    const quizUrl = 'https://quiz-candidato-ideal.web.app/';
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(quizUrl)}`;
    window.open(facebookUrl, '_blank');
    window.gtag('event', 'quiz_shared_facebook'); // Tagueamento para o início
  };

  const handleWhatsAppShare = () => {
    const quizUrl = 'https://quiz-candidato-ideal.web.app/';
    const message = `Confira o quiz dos candidatos à prefeitura! Faça você também: ${quizUrl}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    window.gtag('event', 'quiz_shared_whatsapp'); // Tagueamento para o início
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '3.125rem' }}>
      <h2>Escolha as principais propostas dos candidatos à prefeitura de São Paulo</h2>
      
      <button 
        onClick={() => {
          onStart();
          window.gtag('event', 'quiz_started');
        }}
        style={{
          padding: 'var(--button-padding)',
          fontSize: 'var(--font-size-large)',
          marginTop: '1.25rem',
          backgroundColor: 'var(--primary-color)',
          color: 'var(--text-color)',
          border: 'none',
          borderRadius: 'var(--button-radius)',
          cursor: 'pointer',
          filter: 'brightness(1)',
          transition: 'filter 0.3s ease'
        }}
        onMouseOver={(e) => e.target.style.filter = 'brightness(0.8)'}
        onMouseOut={(e) => e.target.style.filter = 'brightness(1)'}
      >
        Começar
      </button>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '0.625rem', marginTop: '1.25rem' }}>
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

export default StartScreen;