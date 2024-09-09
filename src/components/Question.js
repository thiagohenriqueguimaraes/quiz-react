import React from 'react';

const Question = ({ questionNumber, area, propostas, onAnswer }) => (
  <div>
    <h2>Questão {questionNumber + 1}: {area}</h2>
    <p>Selecione a proposta para <strong>{area}</strong>:</p>
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {propostas.map((item, index) => (
        <li key={index} style={{ textAlign: 'left', marginLeft: '20px', marginBottom: '20px' }}>
          <label>
            <input 
              type="radio" 
              name="proposta" 
              value={item.proposta} 
              onChange={() => onAnswer(item.proposta)} 
            />
            {item.proposta}
          </label>
        </li>
      ))}
    </ul>
  </div>
);

export default Question;