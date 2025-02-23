import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import '../CSS/Contact.css'
const Contact = () => {
    return (
        <section id="Contact">
            <h2>Get In Touch</h2>
            <p>
                Whether you want to discuss a project, brainstorm ideas, explore career opportunities, 
                or just have a meaningful conversation, feel free to connect with me.
            </p>

            <div className="contact-container">
                <a href="https://www.linkedin.com/in/saiprasath2805/">
                    <FaLinkedin /> LinkedIn
                </a>

                <a href="https://github.com/saiprasathB">
                    <FaGithub /> GitHub
                </a>

                <a href="mailto:saiprasath2805@gmail.com">
                    <FaEnvelope /> Email
                </a>

                <a href="tel:+919150136434">
                    <FaPhone /> Phone
                </a>
            </div>
        </section>
    );
};

export default Contact;
