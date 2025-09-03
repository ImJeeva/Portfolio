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

function About() {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <div className="about" id="about" ref={ref}>
      <div className="about_container">
        <div className="about_content">

          {/* Image Section */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="about_img">
            <img className="about_image" src="https://erkab.esdm.go.id/front_layout/img/about-img.svg" alt="Jeeva Portfolio" />
          </motion.div>

          {/* Text Section */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="about_text">

            <h2 className="about1">About Me.</h2>
            <h3 className="about2">Hello! I’m <span className="about3">JEEVA</span>.</h3>
            <h3>Java Full Stack Developer at <span className="about3">Greensoft Groups</span></h3>

            <p>Hi, I'm Jeeva from Trichy, Tamil Nadu. I hold a B.Sc in Chemistry from Jamal Mohamed College (CGPA: 8.2/10).</p>

            <p>
  I transitioned into technology by completing a Java Full Stack Web Development course at TAB Academy, Bengaluru.
   I gaining proficiency in Core Java, JSP, JEE, Servlet, Spring Boot, Hibernate, MySQL, PostgreSQL, REST API, AWS (EC2, RDS), Hostinger HTML, CSS, and JavaScript,
  to strengthen my full-stack development expertise.
</p>


            <p>I have 1+ years of professional experience at Greensoft Groups, 
              Currently developing a Construction ERP System (Richart Groups) and deployed on AWS(EC2 , RDS) with secure domain configuration via Hostinger.</p>

            <p>In addition to my professional work, I have mentored 50+ students in internal training at Greensoft Groups and 
              conducted a 4-day workshop at CARE College of Engineering Trichy for 100+ students, receiving excellent feedback from both students and professors.</p>

            <p>My focus is on creating robust, maintainable full-stack applications with clean code, efficient database integration, and smooth UI/UX.</p>

            <div className="about_bottom">
              <div>
                <div className="about_count">
                  {inView ? <Countup start={0} end={1} duration={2} /> : 1+"+"}
                </div>
                <div className="about_exp">
                  Years Of <br /> Experience
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default About
