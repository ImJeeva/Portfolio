
import "./Contact.css"
//motion
import { motion } from "framer-motion";
//varients
import { fadeIn } from "../Varient";
function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="container">
        <div className="content">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            className="con">
            <div>
              <h4 className="head1">Get In Touch</h4>
              <h2 className="head2">Let's Work <br /> Together!</h2>
            </div>
          </motion.div>
          <motion.form
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView={"show"}
            className="form">
            <input
              className="form_input"
              type="text"
              placeholder="Your Name"
            />
            <input
              className="form_input"
              type="text"
              placeholder="Your Email"
            />
            <textarea className="form_textarea" placeholder="Your Message" />
            <button className="headers_btn">Send Message</button>
          </motion.form>
        </div>
      </div>
    </div>
  )
}

export default Contact
