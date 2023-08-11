import React from "react";

const HangmanImage = ({ incorrectGuesses }) => {
  // Use a ternary operator to conditionally set the image source
  const imageSrc =
    incorrectGuesses > 0
      ? `/hangmandrawings/state${incorrectGuesses}.gif`
      : "/hangmandrawings/state0.gif"; // Use your placeholder image source here

  return (
    <div>
      <img src={imageSrc} alt={`Hangman state ${incorrectGuesses}`} />
    </div>
  );
};

export default HangmanImage;
