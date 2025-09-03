import "./Project.css";
import rg from "../assets/rg.png";

//motion
import { motion } from "framer-motion";
//varients
import { fadeIn } from "../Varient";

import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";

function Project() {
  return (
    <div className="project" id="project">
      <h1 className="project_head">My Projects</h1>

      <motion.div
        variants={fadeIn("right", 0.6)}
        initial="hidden"
        whileInView={"show"}
        className="display"
      >
        {/* 🏗️ Real World Project */}
        <div className="card">
<img
  className="card_imagess"
  // src={rg}
  src="https://media.istockphoto.com/id/931042070/vector/website-construction-line-style-illustration.jpg?s=612x612&w=0&k=20&c=nEB37_J5y3j08MKqhAGlgK7OmBwPFoEsU_JuTrOaIh4="
  alt="Richart Groups Dubai"
/>
          <div className="card_body">
            <h1 className="card_title">Construction Project Management (Richart Groups - Dubai)</h1>
            <p className="card_info">
              A real-world project for a Dubai-based client. Managing construction projects with authentication, scalability, and optimized queries. 
              Deployed on <b>AWS EC2</b>, database on <b>AWS RDS</b>, and <b>Hostinger</b> for hosting.
            </p>
            <div className="tech_stack">
              <h3 className="card_info">Tech_Stack : </h3>
              <p className="card_info">Java | Spring | Hibernate | MySQL | AWS (EC2, RDS) | Hostinger | HTML | CSS | JS</p>
            </div>
          </div>
        </div>

        {/* 🍔 Localhost Projects */}
        <div className="card">
          <img
            className="card_imagess"
            src="https://img.freepik.com/free-photo/people-taking-photos-food_23-2149303524.jpg"
            alt="Food Delivery"
          />
          <div className="card_body">
            <h1 className="card_title">Food Delivery (Ordering App)</h1>
            <p className="card_info">
              A full-stack food delivery application with cart, ordering system, and order history features.
            </p>
            <div className="tech_stack">
              <h3 className="card_info">Tech_Stack : </h3>
              <p className="card_info">Java | JEE | JSP | JDBC | MySQL | HTML | CSS | JS</p>
            </div>
            <div className="btn">
              <a
                href="https://github.com/YourGitHub/Food-Delivery-App"
                target="_blank"
                className="card_btn1"
              >
                <GitHubIcon />
              </a>
            </div>
          </div>
        </div>



        <div className="card">
          <img
            className="card_imagess"
            src="https://static.vecteezy.com/system/resources/thumbnails/005/611/252/small_2x/human-resource-management-selects-a-new-manager-recruiting-the-concept-of-human-resource-management-employee-selection-cv-application-illustration-in-flat-design-free-vector.jpg"
            alt="Customer Management"
          />
          <div className="card_body">
            <h1 className="card_title">Customer Management System</h1>
            <p className="card_info">
              Customer Record System With One - click CRUD Operations
            </p>
            <div className="tech_stack">
              <h3 className="card_info">Tech_Stack : </h3>
              <p className="card_info">Java | Spring MVC | Hibernate | MySQL | HTML | CSS | JS.</p>
              
            </div>
            <div className="btn">
              <a
                href="https://github.com/YourGitHub/Customer-Management"
                target="_blank"
                className="card_btn1"
              >
                <GitHubIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="card">
          <img
            className="card_imagess"
            src="https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D"
            alt="Food Recommendation"
          />
          <div className="card_body">
            <h1 className="card_title">Healthy Food Recommendation App</h1>
            <p className="card_info">
              Suggests food items & restaurants based on user preferences and recommendations.
            </p>
            <div className="tech_stack">
              <h3 className="card_info">Tech_Stack : </h3>
              <p className="card_info">Java | Spring MVC | Hibernate | MySQL | HTML | CSS | JS.</p>
            </div>
            <div className="btn">
              <a
                href="https://github.com/YourGitHub/Food-Recommendation-App"
                target="_blank"
                className="card_btn1"
              >
                <GitHubIcon />
              </a>
            </div>
          </div>
        </div>



                <div className="card">
          <img
            className="card_imagess"
            src="https://png.pngtree.com/png-vector/20191027/ourmid/pngtree-testing-video-blogger-vector-blog-channel-man-popular-video-streamer-blogger-png-image_1893992.jpg"
            alt="Blog Website"
          />
          <div className="card_body">
            <h1 className="card_title">Blog Website</h1>
            <p className="card_info">
              Blog platform with authentication, post creation, and search features.
            </p>
            <div className="tech_stack">
              <h3 className="card_info">Tech_Stack : </h3>
              <p className="card_info">Java | JEE | JSP | JDBC | MySQL | HTML | CSS | JS.</p>
              <p className="card_info">MVC & DAO DESIGN PATTERN</p>
            </div>
            <div className="btn">
              <a
                href="https://github.com/YourGitHub/Blog-Website"
                target="_blank"
                className="card_btn1"
              >
                <GitHubIcon />
              </a>
            </div>
          </div>
        </div>

        
      </motion.div>
    </div>
  );
}

export default Project;
