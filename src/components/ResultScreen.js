import React from 'react';

const ResultScreen = ({ resultText, resultImage, onReset, onShare }) => {
  
  // Função para compartilhar no Facebook
  const handleFacebookShare = () => {
    const quizUrl = 'https://quiz-candidato-ideal.web.app/'; // Substitua pela URL do seu quiz
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(quizUrl)}`;
    window.open(facebookUrl, '_blank');
  };

  return (
    <div>
      <h3>O seu candidato é:</h3>
      <img src={resultImage} alt="Foto do candidato" style={{ display: 'block', margin: 'auto' }} />
      <p>{resultText}</p>
      <button onClick={onReset} style={{ display: 'block', margin: '20px auto' }}>Reiniciar Quiz</button>
      <button onClick={onShare} style={{ display: 'block', margin: '10px auto' }}>Compartilhar no WhatsApp</button>
      {/* Botão de Compartilhar no Facebook */}
      <button onClick={handleFacebookShare} style={{ display: 'block', margin: '10px auto' }}>
        Compartilhar no Facebook
      </button>
    </div>
  );
};

export default ResultScreen;
