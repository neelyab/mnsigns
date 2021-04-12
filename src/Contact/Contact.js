import React, {Component} from 'react';
import './Contact.css';


class Contact extends Component {
    render () {
        return (
            <div className="contact-container">
                <h2>Address</h2>
                <address>
                6307 Old Plank Rd, Fredericksburg, VA  22407
                </address>
                <h2>Email Us:</h2>
                <p><a href="mailto:mnsigns@msn.com">mnsigns@msn.com</a></p>
                <h2>Phone Number</h2>
                <p>(540) 548-2940</p>
                <div className="map-widget">
                <iframe className="map" title="map" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12526.18557627258!2d-77.5539889!3d38.2900066!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9e161f4020e62ea8!2sMike&#39;s%20Signs%204%20Less!5e0!3m2!1sen!2sus!4v1614093995498!5m2!1sen!2sus" ></iframe>
                </div>
            </div>
        )
    }
}

export default Contact;