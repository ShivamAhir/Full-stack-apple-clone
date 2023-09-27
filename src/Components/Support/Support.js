import './Support.css';
import React from 'react';

function Support() {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // You can handle form submission logic here, such as sending an email
    // or performing other actions with the form data.
  };

  return (
    <div className="supprt-main-page">
      <h1 id="heading">How can we help you?</h1>
      <p>
        <i className="fa-solid fa-mobile"></i>
        <a className="contact" href="tel:+917701891644">
          Call us
        </a>
      </p>
      <p>
        <i className="fa-solid fa-envelope"></i>
        <a className="contact" href="mailto:11shivam00@gmail.com">
          Mail us
        </a>
      </p>
      <form onSubmit={handleFormSubmit}>
        <div className="form-child">
          <label className="customer-name-label">Customer Name:</label>
          <input
            className="customer-name"
            type="text"
            name="sname"
            placeholder="Enter Your Name"
          />
        </div>
        <div className="form-child">
          <label className="customer-complain-label">Customer Complain:</label>
          <br />
          <input
            className="costomer-feedbak"
            type="text"
            name="ssubject"
            placeholder="Customer Feedback"
          />
        </div>
        <div className="form-child">
          <input
            className="mail-submit-button"
            type="submit"
            value="Send"
          />
        </div>
      </form>
    </div>
  );
}

export default Support;
