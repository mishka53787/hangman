import React from "react";

const WordDisplay = ({ word, guesses }) => {
  const getDisplayWord = () => {
    return word
      .split("")
      .map((letter) => (guesses.includes(letter.toLowerCase()) ? letter : "_"))
      .join(" ");
  };

  return (
    <div>
      <h3 className="text-center">Word to Guess:</h3>
      <p className="display-word text-center">{getDisplayWord()}</p>
    </div>
  );
};
// code to display a letter and display word when clicked on the letter button

export default WordDisplay;
