import { createPortal } from "react-dom";
import React, { useRef } from "react";

export default function ContactForm() {
  return (
    <>
      <button
        type="button"
        className="btn btn-light"
        data-bs-toggle="modal"
        data-bs-target="#contactModal"
      >
        <h4>Contact Me</h4>
      </button>

      <ContactFormPortal />
    </>
  );
}

function ResizingMessageInput() {
  const textareaRef = useRef(null);

  const handleInput = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px";
    }
  };

  return (
    <>
      <label htmlFor="MessageInput" className="form-label">
        Message
      </label>
      <textarea
        ref={textareaRef}
        className="form-control"
        rows="8"
        onInput={handleInput}
        style={{ overflow: "hidden", resize: "none" }} 
      />
    </>
  );
}

function ContactFormPortal() {
  return createPortal(
    <div className="modal fade" id="contactModal" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-4">Contact Me:</h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>

          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label htmlFor="EmailInput" className="form-label">
                  Email address
                </label>
                <input type="email" className="form-control" id="EmailInput" />
              </div>
              <div className="mb-3">
                <ResizingMessageInput />
              </div>
              <div className="container text-center">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
