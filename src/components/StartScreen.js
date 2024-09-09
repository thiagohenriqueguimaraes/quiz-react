import React from 'react';

const StartScreen = ({ onStart }) => (
  <div style={{ textAlign: 'center', marginTop: '50px' }}>
    <h2>Escolha as principais propostas dos candidatos à prefeitura de São Paulo</h2>
    <button onClick={onStart} style={{ padding: '10px 20px', fontSize: '18px', marginTop: '20px' }}>
      Começar
    </button>
  </div>
);

export default StartScreen;
