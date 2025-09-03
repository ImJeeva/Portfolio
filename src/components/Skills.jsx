import "./Skills.css";
import Card from '@mui/material/Card';
//motion
import { motion } from "framer-motion";
//varients
import { fadeIn } from "../Varient";

function Skills() {
  return (
    <div className="skillss" id="skills">
      <h1 className="skills_head">Skills & Tools</h1>

      <motion.div
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView={"show"}
        className="skills_container"
      >
        {/* Programming Languages & Frameworks */}
        <Card className="skills_card">
          <img className="skills_img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" />
          <h2 className="skills_text">Java</h2>
        </Card>

        <Card className="skills_card">
          <img className="skills_img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="Spring Boot" />
          <h2 className="skills_text">Spring Boot</h2>
        </Card>

        <Card className="skills_card">
          <img className="skills_img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg" alt="Hibernate" />
          <h2 className="skills_text">Hibernate</h2>
        </Card>

      

        {/* Databases */}
        <Card className="skills_card">
          <img className="skills_img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" />
          <h2 className="skills_text">MySQL</h2>
        </Card>

        <Card className="skills_card">
          <img className="skills_img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" />
          <h2 className="skills_text">PostgreSQL</h2>
        </Card>

     {/* Cloud & Hosting */}
<Card className="skills_card">
  <img className="skills_img" src="https://cdn.worldvectorlogo.com/logos/aws-2.svg" alt="AWS" />
  <h2 className="skills_text">AWS</h2>
</Card>
{/* Hostinger */}
<Card className="skills_card">
  <img className="skills_img" src="https://cdn.worldvectorlogo.com/logos/hostinger.svg" alt="Hostinger" />
  <h2 className="skills_text">Hostinger</h2>
</Card>






        {/* Frontend */}
        <Card className="skills_card">
          <img className="skills_img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" />
          <h2 className="skills_text">HTML5</h2>
        </Card>

        <Card className="skills_card">
          <img className="skills_img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" />
          <h2 className="skills_text">CSS3</h2>
        </Card>

        <Card className="skills_card">
          <img className="skills_img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
          <h2 className="skills_text">JavaScript</h2>
        </Card>

     {/* Tools */}
<Card className="skills_card">
  <img className="skills_img" src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="Postman" />
  <h2 className="skills_text">Postman</h2>
</Card>

        <Card className="skills_card">
          <img className="skills_img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
          <h2 className="skills_text">Git</h2>
        </Card>

        <Card className="skills_card">
          <img className="skills_img" src="https://w7.pngwing.com/pngs/646/324/png-transparent-github-computer-icons-github-logo-monochrome-head-thumbnail.png" alt="GitHub" />
          <h2 className="skills_text">GitHub</h2>
        </Card>

        <Card className="skills_card">
          <img className="skills_img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eclipse/eclipse-original.svg" alt="Eclipse IDE" />
          <h2 className="skills_text">Eclipse IDE</h2>
        </Card>

        <Card className="skills_card">
          <img className="skills_img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg" alt="IntelliJ IDEA" />
          <h2 className="skills_text">IntelliJ IDEA</h2>
        </Card>

        <Card className="skills_card">
          <img className="skills_img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VS Code" />
          <h2 className="skills_text">VS Code</h2>
        </Card>


        

      </motion.div>
    </div>
  );
}

export default Skills;
