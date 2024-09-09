import React from 'react';

const ResultScreen = ({ resultText, resultImage, onReset, onShare }) => (
  <div>
    <h3>O seu candidato é:</h3>
    <img src={resultImage} alt="Foto do candidato" style={{ display: 'block', margin: 'auto' }} />
    <button onClick={onReset} style={{ display: 'block', margin: '20px auto' }}>Reiniciar Quiz</button>
    <button onClick={onShare} style={{ display: 'block', margin: '10px auto' }}>Compartilhar no WhatsApp</button>
  </div>
);

export default ResultScreen;