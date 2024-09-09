import React, { useState } from 'react';
import { candidatos } from './source';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [votes, setVotes] = useState({});
  const [quizFinished, setQuizFinished] = useState(false);
  const [resultText, setResultText] = useState('');
  const [resultImage, setResultImage] = useState('');

  const areas = [...new Set(candidatos.map(c => c.area))];
  const propostasPorArea = candidatos.filter(c => c.area === areas[currentQuestion]);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const shuffledPropostas = shuffleArray([...propostasPorArea]);

  const handleAnswer = (proposta) => {
    const candidato = candidatos.find(c => c.proposta === proposta).candidato;
    setVotes({
      ...votes,
      [candidato]: (votes[candidato] || 0) + 1
    });

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < areas.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      const winner = Object.entries(votes).reduce((a, b) => a[1] > b[1] ? a : b)[0];
      const winnerImagePath = `/assets/${winner}.webp`;
      setResultText(`Confira o candidato que mais combina comigo: ${winner}!`);
      setResultImage(winnerImagePath);
      setQuizFinished(true);
    }
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setVotes({});
    setQuizFinished(false);
  };

  const handleWhatsAppShare = () => {
    const quizUrl = 'https://quiz-candidato-ideal.web.app/'; // Substitua pela URL do seu quiz
    const message = `${resultText}. Faça o quiz você também: ${quizUrl}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (quizFinished) {
    return (
      <div>
        <h3>O seu candidato é:</h3>
        <img src={resultImage} alt={`Foto do candidato`} style={{ display: 'block', margin: 'auto' }} />
        <button onClick={handleReset} style={{ display: 'block', margin: '20px auto' }}>Reiniciar Quiz</button>
        <button onClick={handleWhatsAppShare} style={{ display: 'block', margin: '10px auto' }}>Compartilhar no WhatsApp</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Questão {currentQuestion + 1}: {areas[currentQuestion]}</h2>
      <p>Selecione a proposta para <strong>{areas[currentQuestion]}</strong>:</p>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {shuffledPropostas.map((item, index) => (
          <li key={index} style={{ textAlign: 'left', marginLeft: '20px', marginBottom: '20px'}}>
            <label>
              <input 
                type="radio" 
                name="proposta" 
                value={item.proposta} 
                checked={false} 
                onChange={() => handleAnswer(item.proposta)} 
              />
              {item.proposta}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Quiz;
