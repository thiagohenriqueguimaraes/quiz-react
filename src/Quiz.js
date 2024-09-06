import React, { useState } from 'react';

import { candidatos } from './source';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [votes, setVotes] = useState({});
  const [quizFinished, setQuizFinished] = useState(false); // Adicionado para controlar o estado do fim do quiz

  const areas = [...new Set(candidatos.map(c => c.area))]; // Pega todas as áreas únicas
  const propostasPorArea = candidatos.filter(c => c.area === areas[currentQuestion]);

  const handleNext = () => {
    if (selectedAnswer) {
      const candidato = candidatos.find(c => c.proposta === selectedAnswer).candidato;
      setVotes({
        ...votes,
        [candidato]: (votes[candidato] || 0) + 1
      });
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null); // Resetar a resposta
    }
  };

  const handleFinish = () => {
    if (selectedAnswer) {
      const candidato = candidatos.find(c => c.proposta === selectedAnswer).candidato;
      setVotes({
        ...votes,
        [candidato]: (votes[candidato] || 0) + 1
      });
      setQuizFinished(true); // Finalizar o quiz
    }
  };

  if (quizFinished) {
    return (
      <div>
        <h3>Resultado final:</h3>
        <ul>
          {Object.entries(votes).map(([candidato, votoCount]) => (
            <li key={candidato}>{candidato}: {votoCount} votos</li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div>
      <h2>Questão {currentQuestion + 1}: {areas[currentQuestion]}</h2>
      <p>Selecione a proposta para <strong>{areas[currentQuestion]}</strong>:</p>
      <ul>
        {propostasPorArea.map((item, index) => (
          <li key={index}>
            <label>
              <input 
                type="radio" 
                name="proposta" 
                value={item.proposta} 
                checked={selectedAnswer === item.proposta} 
                onChange={() => setSelectedAnswer(item.proposta)} 
              />
              {item.proposta}
            </label>
          </li>
        ))}
      </ul>
      {currentQuestion < areas.length - 1 ? (
        <button onClick={handleNext} disabled={!selectedAnswer}>Próxima questão</button>
      ) : (
        <button onClick={handleFinish} disabled={!selectedAnswer}>Finalizar</button>
      )}
    </div>
  );
};

export default Quiz;
