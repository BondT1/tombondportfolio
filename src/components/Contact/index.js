import React, { useState } from "react";

// helper function that checks if the email is valid
import axios from 'axios';
import { validateEmail } from "../../utils/helpers";

function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Based on the input type, we set the state of either email, username, and message
    if (name === "email") {
      setEmail(value);
    } else if (name === "userName") {
      setUserName(value);
    } else {
      setMessage(value);
    }
  };

  const handleFormSubmit = async (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !userName || !message) {
      setErrorMessage("Email or Name, or Message is invalid");
      return;
      
    }

    if (!message) {
      setErrorMessage(`Message is required.`);
      return;
    }

// DEVELOPMENT TESTING - NEEDS TO BE CHANGED WHEN SITE IS HOSTED

    try {
      // fake email sending library
      if (process.env.NODE_ENV === 'development') {
        // Simulates sending the email locally
        console.log('Simulating email sending:', { email, userName, message });
      } else {
        // request to the real email sending endpoint
        await axios.post('http://localhost:2525', `Subject: Contact Form Submission\n\nHello ${userName},\n\n${message}`);
        //   personalizations: [
        //     {
        //       to: [{ email }],
        //       subject: 'Contact Form Submission',
        //     },
        //   ],
        //   from: { email: 'your-email@example.com' },
        //   content: [{ type: 'text/plain', value: `Hello ${userName},\n\n${message}` }],
        // });
      }

    // clear out the input after submission.
    setUserName("");
    setMessage("");
    setEmail("");

    setFormSubmitted(true);
  } catch (error) {
    console.error('Error sending email:', error);
    setErrorMessage('Error sending email. Please try again.');
  }
  };

  // END OF DEV TESTING CODE

  return (
    <section id="reach-out" className="contact">
      <div className="flex-row">
        <h2 className="section-title secondary-border">Reach Out</h2>
      </div>

      <div className="contact-info">
        <div>
          <h3>Hello {userName}</h3>
          <p>Want to get in contact?</p>
          <address>
            Birmingham, UK<br />
            P: <a href="tel:07860803600">07860803600</a>
            <br />
            E:{" "}
            <a href="mailto://tombond258@gmail.com">
              tombond258@gmail.com
            </a>
          </address>
        </div>

        {/* contact form section  */}
        <div className="contact-form">
          {formSubmitted ? (
            <div>
              <p className="success-text">Email sent successfully!</p>
            </div>
          ) : (
           <>
          <h3>Contact Me</h3>
          <form className="form">
            {/* Name */}
            <label for="contact-name">Your Name</label>
            <input
              value={userName}
              name="userName"
              onChange={handleInputChange}
              type="text"
              id="contact-name"
              placeholder="Your Name"
            />

            {/* Email */}
            <label for="contact-email">Your Email</label>
            <input
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              id="contact-email"
              placeholder="Your Email"
            />

            {/* Message */}
            <label for="contact-message">Message</label>
            <textarea
              value={message}
              name="message"
              onChange={handleInputChange}
              type="message"
              id="contact-message"
              placeholder="Your Message"
            />
            <button type="button" onClick={handleFormSubmit}>
              Submit
            </button>
          </form>
        
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </>
    )}
  </div>
  </div>
</section>
);
}

export default Contact;
