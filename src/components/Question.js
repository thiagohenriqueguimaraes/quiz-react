import React from 'react';
import './Question.css';  // Adicionamos um arquivo CSS para estilização

const Question = ({ questionNumber, totalQuestions, area, propostas, onAnswer }) => {
  // Criar um array para representar os pontos de progresso
  const progressDots = Array.from({ length: totalQuestions }, (_, index) => (
    <span
      key={index}
      className={`dot ${index <= questionNumber ? 'active' : ''}`} // Adicionar classe 'active' para pontos completados
    />
  ));

  return (
    <div>
      {/* Barra de progresso com pontos */}
      <div className="progress-bar">
        {progressDots}
      </div>

      <p>Selecione a proposta para <strong>{area}</strong>:</p>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {propostas.map((item, index) => (
          <li key={index} style={{ textAlign: 'left', marginLeft: '20px', marginBottom: '20px' }}>
            <label>
              <input 
                type="radio" 
                name="proposta" 
                value={undefined} 
                onChange={() => onAnswer(item.proposta)} 
              />
              {item.proposta}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
