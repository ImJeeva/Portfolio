import "./Nav.css"
import { Link } from "react-scroll";
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MmsIcon from '@mui/icons-material/Mms';

function Nav() {
  return (
    <nav className="nav_container">
    <div className="nav" >
      <div  className="link">
        <Link activeClass="active" smooth={true} spy={true} offset={-900} to="home" className="links">
            <HomeIcon/>
        </Link>
        <Link activeClass="active" smooth={true} spy={true}  to="about" className="links">
            <PersonIcon/>
        </Link>
        <Link activeClass="active" smooth={true} spy={true} to="skills" className="links">
            <ContentPasteIcon/>
        </Link>
        <Link activeClass="active" smooth={true} spy={true}  to="project" className="links">
            <BusinessCenterIcon/>
        </Link>
        <Link activeClass="active" smooth={true} spy={true}  to="contact" className="links">
            <MmsIcon/>
        </Link>
      </div>
   
    
    </div>
    </nav>
  )
}

export default Nav
