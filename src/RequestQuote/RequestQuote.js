import React, {Component} from 'react';
import './RequestQuote.css';
import emailjs from 'emailjs-com';
import { Helmet } from 'react-helmet';
import config from '../config';

class RequestQuote extends Component {
        constructor(props) {
            super(props);
            this.state = {
              success: false,
              error: null
            }
        };
        render(){
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm(config.SERVICE_ID, config.TEMPLATE_ID, e.target, config.PUBLIC_KEY)
        .then(() => {
            this.setState({success: true})
        }, () => {
            this.setState({error:true});
        });
        e.target.reset();
    }

    return (
      <div>
      <Helmet>
      <meta charSet="utf-8" />
      <title>Request a Quote | Mikes Signs 4 Less | Custom Sign Shop Fredericksburg VA</title>
      <meta
      name="description"
      content= "Get a price quote on custom signage at Mikes Signs 4 Less, a local sign shop located in Fredericksburg VA."
      />
  </Helmet>
  <h1 className="request-quote-title"> Request a Quote </h1>
        <div className="request-quote-container">
          <p className="form-instructions">Please fill out the form below with a brief description of the product or service you are interested in and we will get in touch with you.</p>
      <form className="quote-form" onSubmit={(e) => sendEmail(e)}>
        <input type="hidden" name="contact_number" />
        <label>Name</label>
        <input required type="text" name="name" />
        <label>Email</label>
        <input required type="email" name="email" />
        <label>Phone Number</label>
        <input required type="number" name="number" />
        <label>Message</label>
        <textarea required name="message" />
        <input type="submit" value="Send" className = "send-button" />
      </form>
      <p className="success-message">{this.state.success ? 'Request submitted!' : ''}</p>
      <p className="error-message">{this.state.error ? 'Something went wrong, please try again.' : ''}</p>
      </div>
      </div>
    );
  }
}
export default RequestQuote;
