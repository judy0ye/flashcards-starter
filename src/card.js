const createCard = (id, question, answers, correctAnswer) => {
  return {
    id,
    question,
    answers,
    correctAnswer
  };
};

const evaluateGuess = (guess, correctAnswer) => {
  if (guess === correctAnswer) {
    return 'correct!'
  } else {
    return 'incorrect!'
  }
}

const createDeck = (cards) => {
    return cards
}

const countCards = deck => deck.length

const createRound = (deck, currentCard = deck[0], turns = 0, incorrectGuesses = []) => {
  return {
    deck,
    currentCard,
    turns,
    incorrectGuesses
  }
}

const takeTurn = (guess, round) => {
  const result = evaluateGuess(guess, round.currentCard.correctAnswer)

  if (result === 'incorrect!') {
    round.incorrectGuesses.push(round.currentCard.id)
  }

  round.turns++;  
  round.currentCard = round.deck[round.turns]

  return result     
}

const calculatePercentCorrect = (round) => {
  let incorrectGuesses = round.incorrectGuesses.length
   
  return (round.turns - incorrectGuesses) / round.turns * 100
}

module.exports = {
  createCard,
  evaluateGuess, 
  createDeck,
  countCards,
  createRound,
  takeTurn,
  calculatePercentCorrect
};
