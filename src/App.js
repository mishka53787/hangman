import React, { useState } from "react";
import Game from './Components/Game'; // gets game and components thats imported in game js 
import ReactMarkdown from "react-markdown"; // gets rules for game from readmd for help button
import 'bootstrap/dist/css/bootstrap.min.css'; // gets boostrap css style for game

const App = () => {
  const [showHelp, setShowHelp] = useState(false);

  const helpContent = `
  # Hangman Game

Welcome to the Hangman game! Test your word-guessing skills by entering one letter at a time.

## Rules

- You have 11 incorrect guesses before the game ends.
- The word to guess is represented by dashes ('-') indicating the number of letters.
- Correctly guessed letters will be filled in the corresponding positions.
- You cannot guess the same letter more than once.

## How to install game

1. Clone the Repository:
git clone :https://github.com/mishka53787/hangman.git

2. Navigate to the Game Directory:
cd hangma

3. Install Dependencies:
npm install

4. Start the Game:
npm start


5. Open your web browser and go to url that has localhost:3000 to play the game.
## how to play game

1. Enter a letter in the input field (Hint: start with the letter A).
2. If the letter is correct, it will appear in the word.
3. If the letter is incorrect, you will be notified.
4. Keep guessing until you win by completing the word or lose by running out of guesses.

Have fun playing the Hangman game!
  `;
// useState is used for help to display of rules
  return (
    <div>
      <Game />
      <button onClick={() => setShowHelp(!showHelp)}>Help</button>
      {showHelp && (
        <div className="help-modal">
          <ReactMarkdown>{helpContent}</ReactMarkdown>
        </div>
      )}
    </div>
  );
};

export default App;

