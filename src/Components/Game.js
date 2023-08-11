import React, { useState, useEffect } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import HangmanImage from "./HangmanImage"; // gets code for hangman image  to display once a random letter is selected
import GameResultModal from "./GameResultModal"; // gets code for game result such pop to say if they have won
import LetterButton from './LetterButton';  // gets code to  letter button for keyboard
import WordDisplay from './WordDisplay'; // gets code to display word


const words = ["powerball", "hangman", "react", "javascript", "bootstrap"];
const initialGuesses = 11;  // Increased the initial guess limit to 11

const Game = () => {
  const [word, setWord] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [isGameWon, setIsGameWon] = useState(false);
  const [incorrectGuesses, setIncorrectGuesses] = useState(initialGuesses);
  const [isGameResultModalOpen, setIsGameResultModalOpen] = useState(false);

  useEffect(() => {
    setWord(words[Math.floor(Math.random() * words.length)]);
  }, []);

  useEffect(() => {
    if (guesses.length > 0) {
      const displayWord = word
        .split("")
        .map((letter) => (guesses.includes(letter.toLowerCase()) ? letter : "_"))
        .join("");
      if (displayWord.toLowerCase() === word.toLowerCase()) {
        setIsGameWon(true);
        setIsGameResultModalOpen(true);
      }
    }

    if (incorrectGuesses <= 0) {
      setIsGameResultModalOpen(true);
    }
  }, [guesses, word, incorrectGuesses]);

  const handleGuess = (letter) => {
    const normalizedLetter = letter.toLowerCase();
    if (normalizedLetter.length === 1 && !guesses.includes(normalizedLetter)) {
      setGuesses([...guesses, normalizedLetter]);

      if (!word.toLowerCase().includes(normalizedLetter)) {
        setIncorrectGuesses((prevIncorrectGuesses) => prevIncorrectGuesses - 1);
      }
    }
  };

  const handleRestartGame = () => {
    setWord(words[Math.floor(Math.random() * words.length)]);
    setGuesses([]);
   
    setIsGameWon(false);
    setIncorrectGuesses(initialGuesses);
    setIsGameResultModalOpen(false);
  };

  const handleCloseLossModal = () => {
    setIsGameWon(false);
  };
  
  return (
    <Container>
      <h1 className="mt-3 text-center">Hangman Game</h1>
      <Row className="mt-4">
        <Col md={6}>
          <div className="letter-table">
            {Array.from(Array(26), (_, i) => String.fromCharCode(65 + i)).map((letter) => (
              <LetterButton
                key={letter}
                letter={letter}
                variant={guesses.includes(letter.toLowerCase()) ? "success" : "primary"}
                onClick={handleGuess}
              />
            ))}
          </div>
          <Button variant="info" onClick={handleRestartGame} className="mt-3" block>
            Restart Game
          </Button>
        </Col>
        <Col md={11}>
          <h3 className="text-center">Word to Guess:</h3>
          <WordDisplay word={word} guesses={guesses} />
          <HangmanImage incorrectGuesses={initialGuesses - incorrectGuesses} />
        </Col>
      </Row>
      <GameResultModal
        isGameWon={isGameWon}
        isGameLost={incorrectGuesses <= 0}
        onClose={handleCloseLossModal}
        show={isGameResultModalOpen}
      />
    </Container>
  );
};

export default Game;
// For game over to restart game  refresh  page
// To start game or blank  image for game select a random letter
