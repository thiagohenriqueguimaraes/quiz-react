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
    <div className="question-container">
      {/* Barra de progresso com pontos */}
      <div className="progress-bar">
        {progressDots}
      </div>

      <p className="question-area">Selecione a proposta para <strong>{area}</strong>:</p>

      <ul className="proposals-list">
        {propostas.map((item, index) => (
          <li 
            key={index} 
            className="proposal-item"
            onClick={() => onAnswer(item.proposta)}  // Evento de clique para selecionar a proposta
          >
            {item.proposta}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
