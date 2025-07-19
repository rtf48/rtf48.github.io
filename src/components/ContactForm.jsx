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
        id="MessageInput"
        className="form-control"
        rows="8"
        onInput={handleInput}
        style={{ overflow: "hidden", resize: "none" }} 
        name="message"
      />
    </>
  );
}

function FormBackend() {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "252ecc86-2653-48bb-8aa5-ececf348c499");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
        }
      };

      return (
        <form onSubmit={onSubmit}>
            <div className="mb-3">
                <label htmlFor="NameInput" className="form-label">
                    Name
                </label>
                <input type="text" className="form-control" id="NameInput" name="name"/>
              </div>
              <div className="mb-3">
                <label htmlFor="EmailInput" className="form-label">
                  Email address
                </label>
                <input type="email" className="form-control" id="EmailInput" name="email" />
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
            <FormBackend />
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
