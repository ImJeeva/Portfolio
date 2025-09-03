//css
import "./Banner.css";
//icons
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

//image
import image from "../assets/avtar.png";
//type animation
import { TypeAnimation } from "react-type-animation";
//motion
import { motion } from "framer-motion";
//varients
import { fadeIn } from "../Varient";
import { Link } from "react-scroll";

function Banner() {
  return (
    <div className="banner" id="home">
      <div className="banner_container">
        <div className="banner_content">
          {/*text */}
          <div className="banner_text">
            <motion.h1
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="banner_name"
            >
              JEEVA
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="banner_texts"
            >
              <span className="banner_span">I am a </span>
              <TypeAnimation
                sequence={[
                  "Java Full Stack Developer", 2000, 
                  "Full Stack Developer", 2000,
                  "React Developer", 2000,
                  "Backend Developer", 2000
                ]}
                speed={50}
                className="banner_textanime"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="banner_summary"
            >
              I am a Java Full Stack Developer with 1+ years of experience, working on real-world projects including a Dubai construction admin system. I am passionate about building scalable and maintainable applications, mentoring aspiring developers, and delivering high-quality solutions that drive your business success.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="banner_center"
            >
              <a
                className="banner_btn"
                href="https://drive.google.com/file/d/1Yryd5aTP_L8-_WR9IOcKxiq2TpuBqgOF/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                My Resume
              </a>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="banner_btn_secondary"
              >
                Contact Me
              </Link>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="banner_media"
            >
              <a
                className="media"
                href="https://github.com/ImJeeva"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <GitHubIcon />
              </a>
              <a
                className="media"
                href="https://www.linkedin.com/in/imjeeva/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <LinkedInIcon />
              </a>
              <a
                className="media"
                href="mailto:romanjeeva22@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email Contact"
              >
                <EmailIcon />
              </a>
            </motion.div>
          </div>
          {/*image */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="banner_images"
          >
            <div className="banner_image_container">
              <img className="banner_image" src={image} alt="Jeeva - Full Stack Developer" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Banner;