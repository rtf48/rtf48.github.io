import { createPortal } from "react-dom";
import React, { useRef } from "react";

/**
 * A wrapper component for the ContactForm, which renders the button to open 
 * the form, then a portal component containing the modal for the form itself.
 * @returns {JSX.Element} - The rendered wrapper component.
 */
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

/**
 * A component for a resizable text input field. Compatible with web3forms.
 * @returns {JSX.Element} - The rendered text input field.
 */
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

/**
 * A component for the backend of the contact form. Compatible with web3forms.
 * This component contains the input fields and submit button for the form, as
 * well as the code for accessing the web3forms API.
 * @returns {JSX.Element} - The rendered form.
 */
function FormBackend() {

  const formRef = useRef(null);

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
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      alert("Thanks! I'll get back to you as soon as possible.");
    } else {
      console.log("Error", res);
      alert("Your message could not be sent, please try again later.");
    }

    formRef.current.reset();
  };

  return (
    <form onSubmit={onSubmit} ref={formRef}>
      <div className="mb-3">
        <label htmlFor="NameInput" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="NameInput"
          name="name"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="EmailInput" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="EmailInput"
          name="email"
        />
      </div>
      <div className="mb-3">
        <ResizingMessageInput />
      </div>
      <div className="container text-center">
        <button
          type="submit"
          className="btn btn-primary"
          data-bs-dismiss="modal"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

/**
 * A component for the modal portal containing the contact form. This component
 * uses the createPortal function from React to render the modal in the body
 * element in order to avoid z-index issues.
 * @returns {JSX.Element} - The rendered modal portal containing the contact form.
 */
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
