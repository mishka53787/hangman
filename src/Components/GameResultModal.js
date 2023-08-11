import React from "react";
import { Modal, Button } from "react-bootstrap";

const GameResultModal = ({ isGameWon, isGameLost, onClose }) => {
  let title = "";
  let message = "";

  if (isGameWon) {
    title = "Congratulations!";
    message = "You have won the game!";// message to user tell them that they have won
  } else if (isGameLost) {
    title = "Game Over";
    message = "You have lost the game. Better luck next time!"; // to tell user after 11 guess if they have gotten the word  that its game over  to restart refresh page
  }

  return (
    <Modal show={isGameWon || isGameLost} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{message}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default GameResultModal;

