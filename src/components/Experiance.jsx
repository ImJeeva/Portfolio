//css
import "./About.css";
//countup
import Countup from "react-countup";
//interaction observer
import { useInView } from "react-intersection-observer";
//motion
import { motion } from "framer-motion";
//varients
import { fadeIn } from "../Varient";
import { Link } from "react-scroll";

function Experiance() {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <div className="about" id="experiance" ref={ref}>
      <div className="about_container">
        <h2 className="exphead">Experience</h2>

        {/* Greensoft Groups */}
        <div className="about_content">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="about_img"
          >
            <img
              className="about_image"
              src="data:image/jpeg;base64,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"
              alt="Greensoft Groups"
            />
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="about_text"
          >
            <h3 className="about2">
              <span className="about3">Greensoft Groups</span>
            </h3>
            <h3 style={{ color: "lightgreen" }}>Java Full Stack Developer</h3>
<p>✨ Developed and maintained full-stack applications with a focus on scalability and performance.</p>
<p>✨ Mentored 50+ students through internships and provided guidance on real-time project practices.</p>
<p>✨ Implemented secure authentication and optimized database queries for better efficiency.</p>
<p>✨ Currently working on a construction admin system for <b>Richart Groups, Dubai</b> as a client project.</p>
<p>✨ Deployed applications using <b>AWS EC2</b>, managed relational databases with <b>AWS RDS</b>, and utilized <b>Hostinger</b> for hosting solutions.</p>
<p>
  Tech Stack : Java | Spring | Hibernate | MySQL | AWS (EC2, RDS) | Hostinger | HTML | CSS | JavaScript
</p>

          </motion.div>
        </div>

        {/* CARE College Workshop */}
        <div className="about_content">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="about_img_care"
          >
            <img
              className="about_image"
              src="https://care.ac.in/engineering/wp-content/uploads/sites/7/2025/02/cropped-cropped-Engg-College-Full.png"
              alt="CARE College Workshop"
            />
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="about_text"
          >
            <h3 className="about2">
              <span className="about3">CARE College</span>
            </h3>
            <h3 style={{ color: "lightgreen" }}>Technical Workshop Facilitator</h3>
            <p>✨ Conducted a 4-day training program for 100+ students on Java & Full Stack concepts.</p>
            <p>✨ Received excellent feedback from students and professors for teaching style and practical approach.</p>
            <p>✨ Helped students apply theoretical concepts to hands-on coding sessions.</p>
            <p>Topics: Java | Web Development Basics | Database Integration</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Experiance;
