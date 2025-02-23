import { Link } from "react-scroll";
import '../CSS/NavBar.css'
const NavBar = () => {  
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
       
        </ul>

    </nav>
)

}
export default NavBar;  