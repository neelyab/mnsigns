import React, {Component} from 'react';
import './RequestQuote.css';
import emailjs from 'emailjs-com';


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
  
      emailjs.sendForm('service_yynnpew', 'template_s6dsvyl', e.target, 'user_DEKpP7HbUkuZX7llgJ1zd')
        .then(() => {
            this.setState({success: true})
        }, () => {
            this.setState({error:true})
        });
        e.target.reset();
    }

    return (
        <div className="request-quote-container">
      <form className="quote-form" onSubmit={(e) => sendEmail(e)}>
        <input type="hidden" name="contact_number" />
        <label>Name</label>
        <input required type="text" name="name" />
        <label>Email</label>
        <input required type="email" name="email" />
        <label>Message</label>
        <textarea required name="message" />
        <input type="submit" value="Send" className = "send-button" />
      </form>
      <p className="success-message">{this.state.success ? 'Request submitted!' : ''}</p>
      <p className="error-message">{this.state.error ? 'Something went wrong, please try again.' : ''}</p>
      </div>
    );
  }
}
export default RequestQuote;
