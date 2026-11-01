import { useState } from "react";
import { CONTACT } from "../config";

export default function Contact({ year }) {
  const [sent, setSent] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: send form data to your backend, Google Form or email service.
    setSent(true);
  };
  return (
    <section className="container section" id="contact">
      <div className="glass two-col" id="contact-form">
        <div>
          <h2 className="section-title">Contact us</h2>
          <p style={{ marginTop: 10 }}>
            {CONTACT.address}
            <br />
            {CONTACT.email}
            <br />
            {CONTACT.phone}
          </p>
        </div>
        {sent ? (
          <p role="status">Thanks! We will get back to you soon.</p>
        ) : (
          <form className="contact-form" onSubmit={onSubmit}>
            <input
              name="name"
              placeholder="Your name"
              aria-label="Your name"
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              aria-label="Email"
              required
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Message"
              aria-label="Message"
              required
            />
            <button className="btn btn-primary" type="submit">
              Send message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
