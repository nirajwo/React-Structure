import React from "react";
import "./style.css";
import { Button, Modal } from "react-bootstrap";

/* Modal for Edit/Add/Delete User */
const CommonModal = ({
  show,
  handleClose,
  content,
  modalTitle,
  handleSubmit,
  submitBtnText,
}) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header className="d-flex">
        <Modal.Title>{modalTitle}</Modal.Title>
        <div className="align-self-center mr-2 close-btn" onClick={handleClose}>
          X
        </div>
      </Modal.Header>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Modal.Body>{content}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit">
            {submitBtnText}
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default CommonModal;
