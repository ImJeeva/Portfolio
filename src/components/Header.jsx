import "./Header.css";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";
function Header() {
  return (
    <header className="headers">
      <div className="header_container" >
        <div className="headers_content">
          <a href="#">
            <img className="headers_logo" src={Logo} alt="logo" />
          </a>
        </div>

      </div>
    </header>
  )
}

export default Header
