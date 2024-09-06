import React, { useState } from 'react';

import { candidatos } from './source';

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [votes, setVotes] = useState({});
  const [quizFinished, setQuizFinished] = useState(false);

  const areas = [...new Set(candidatos.map(c => c.area))];
  const propostasPorArea = candidatos.filter(c => c.area === areas[currentQuestion]);

  const handleNext = () => {
    if (selectedAnswer) {
      const candidato = candidatos.find(c => c.proposta === selectedAnswer).candidato;
      setVotes({
        ...votes,
        [candidato]: (votes[candidato] || 0) + 1
      });
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    }
  };

  const handleFinish = () => {
    if (selectedAnswer) {
      const candidato = candidatos.find(c => c.proposta === selectedAnswer).candidato;
      setVotes({
        ...votes,
        [candidato]: (votes[candidato] || 0) + 1
      });
      setQuizFinished(true);
    }
  };

  const getMostVotedCandidate = () => {
    const maxVotes = Math.max(...Object.values(votes));
    return Object.entries(votes).find(([candidato, votoCount]) => votoCount === maxVotes);
  };

  if (quizFinished) {
    const [mostVotedCandidate] = getMostVotedCandidate() || [];
    return (
      <div>
        <h3>Resultado final:</h3>
        {mostVotedCandidate ? (
          <p>O candidato mais votado é <strong>{mostVotedCandidate[0]}</strong> com <strong>{mostVotedCandidate[1]}</strong> votos.</p>
        ) : (
          <p>Nenhum candidato recebeu votos.</p>
        )}
      </div>
    );
  }

  return (
    <div>
      <h2>Questão {currentQuestion + 1}: {areas[currentQuestion]}</h2>
      <p>Selecione a proposta para <strong>{areas[currentQuestion]}</strong>:</p>
      <ul>
        {shuffleArray(propostasPorArea).map((item, index) => (
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
