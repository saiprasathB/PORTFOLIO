import { Link } from "react-scroll";
import '../CSS/NavBar.css'
import { useState } from 'react';

const NavBar = () => {  
    const [showDropdown, setShowDropdown] = useState(false);
return (
    <nav className="Navbar" >
        <ul
        style={{display: "flex", justifyContent:"space-evenly" , listStyleType:"none"}}>
        <li className="navli"><Link to="Home" smooth={true} duration={500} >Home</Link></li>
        <li className="navli"><Link to="About" smooth={true} duration={500} >About</Link></li>
        <li className="navli"><Link to="Education" smooth={true} duration={500} >Education</Link></li>
        <li className="navli"><Link to="Skills" smooth={true} duration={500} >Skills</Link></li>
        <li className="navli"><Link to="Projects" smooth={true} duration={500}>Projects</Link></li>
        <li className="navli"><Link to="Internship" smooth={true} duration={500}>Internship</Link></li>
        <li className="navli"><Link to="Achivements" smooth={true} duration={500}>Achivements</Link></li>
        <li className="navli"><Link to="Contact" smooth={true} duration={500}>Contact</Link></li>



        <li 
                    className="resume-dropdown"
                    onMouseEnter={() => setShowDropdown(true)}
                    onMouseLeave={() => setShowDropdown(false)}
                >
                    <button className="resume-btn">Resume ▼</button>
                    
                    {showDropdown && (
                        <div className="dropdown-menu">
                            <a href="https://drive.google.com/file/d/1NJ_sHDYQZ8TQ9bV-c1SSE8PKXj28vzlu/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="dropdown-item">View Resume</a>
                            <a href="\public\SaiPrasath-Resume .pdf" download="Sai_Prasath_Resume.pdf" className="dropdown-item">Download Resume</a>
                        </div>
                    )}
                </li>
       
        </ul>

    </nav>
)
    
}
export default NavBar;  