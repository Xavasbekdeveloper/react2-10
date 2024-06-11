import React, { memo } from "react";
import "./modal.scss";

const Modal = ({ children, setShowModal, showModal }) => {
  return (
    <>
      <div className="modal">
        <div
          onClick={() => setShowModal(false)}
          className={`${showModal ? "modal__overlay" : ""}`}
        ></div>
        {children}
      </div>
    </>
  );
};

export default memo(Modal);
