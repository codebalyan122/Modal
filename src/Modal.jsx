import React from "react";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

//this is custom styles from my Modal as we can here anything in the background

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Modal = ({ isModalOpen, closeModal, selectedUser }) => {
  //Using react-modal package and rendering the modal with the props passed from the parent function

  return (
    <ReactModal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      {selectedUser && (
        <div className="modal_div">
          <button onClick={() => closeModal()}>X</button>
          <h2>{selectedUser.name}</h2>

          <img
            src={`https://via.placeholder.com/150?text=${selectedUser.name}`}
            alt={selectedUser.name}
          />
        </div>
      )}
    </ReactModal>
  );
};

export default Modal;
