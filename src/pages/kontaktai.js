import React from 'react';
import Layout from "../components/Layout/Layout"

const Kontaktai = props => {
  return (
    <Layout>

        <article>
          <form className="form contact-form"
                action="https://formspree.io/f/xnqlpjpy"
                method="POST"
          >
            <div className="form-row">
              <label htmlFor="name">your name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="form-row">
              <label htmlFor="email">your email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="form-row">
              <label htmlFor="message">message</label>
              <textarea name="message" id="message"></textarea>
            </div>
            <button type="submit" className="btn block">
              submit
            </button>
          </form>
        </article>
    </Layout>
  );
 }


export default Kontaktai;