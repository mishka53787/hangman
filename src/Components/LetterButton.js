import React from "react";
import { Button } from "react-bootstrap";

const LetterButton = ({ letter, onClick, isGuessed }) => {
  return (
    <Button
      variant={isGuessed ? "success" : "primary"}
      onClick={() => onClick(letter)}
    >
      {letter}
    </Button>
  );
};
// for each of the letters button from alphabet
export default LetterButton;
