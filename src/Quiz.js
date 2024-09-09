import React, { useState } from 'react';
import { candidatos } from './source';
import StartScreen from './components/StartScreen';
import Question from './components/Question';
import ResultScreen from './components/ResultScreen';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [votes, setVotes] = useState({});
  const [quizFinished, setQuizFinished] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false); // Estado para controlar início do quiz
  const [resultText, setResultText] = useState('');
  const [resultImage, setResultImage] = useState('');

  const areas = [...new Set(candidatos.map(c => c.area))];
  const propostasPorArea = candidatos.filter(c => c.area === areas[currentQuestion]);

  // Função para embaralhar as opções
  const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);
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
      // Tagueamento GA4
      window.gtag('event', 'quiz_finished', {
        event_category: 'quiz',
        event_label: winner,
        value: votes[winner]
      });
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

  const handleStartQuiz = () => {
    setQuizStarted(true); // Começar o quiz
  };

  if (!quizStarted) {
    return <StartScreen onStart={handleStartQuiz} />;
  }

  if (quizFinished) {
    return (
      <ResultScreen 
        resultText={resultText}
        resultImage={resultImage}
        onReset={handleReset}
        onShare={handleWhatsAppShare}
      />
    );
  }

  return (
    <Question 
      questionNumber={currentQuestion}
      area={areas[currentQuestion]}
      propostas={shuffledPropostas}
      onAnswer={handleAnswer}
    />
  );
};

export default Quiz;