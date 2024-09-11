import React from 'react';
import './Question.css';

const images = {
  "Educação": "/assets/illustrations/educacao.webp",
  "Meio Ambiente": "/assets/illustrations/meio_ambiente.webp",
  "Saúde": "/assets/illustrations/saude.webp",
  "Segurança": "/assets/illustrations/seguranca.webp",
  "Transporte": "/assets/illustrations/transporte.webp"
};

// Função para capitalizar a primeira letra de cada palavra
const capitalizeArea = (area) => {
  return area
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const Question = ({ questionNumber, totalQuestions, area, propostas, onAnswer }) => {
  // Padroniza a capitalização do nome da área
  const formattedArea = capitalizeArea(area);

  const progressDots = Array.from({ length: totalQuestions }, (_, index) => (
    <span
      key={index}
      className={`dot ${index <= questionNumber ? 'active' : ''}`}
    />
  ));

  return (
    <div className="question-container">
      {/* Barra de progresso */}
      <div className="progress-bar">{progressDots}</div>
      
      {/* Imagem da área */}
      <img 
        src={images[formattedArea]} 
        alt={formattedArea} 
        className="question-image" 
      />
      
      {/* Texto da pergunta */}
      <p className="question-area">Selecione a proposta para <strong>{formattedArea}</strong>:</p>

      {/* Lista de propostas */}
      <ul className="proposals-list">
        {propostas.map((item, index) => (
          <li 
            key={index} 
            className="proposal-item"
            onClick={() => onAnswer(item.proposta)}
          >
            {item.proposta}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
