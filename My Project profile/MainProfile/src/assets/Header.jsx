import "../assets/header.css";
import { TbCloudComputing } from "react-icons/tb";
function Header() {
    const scrollToSection = (sectionId,e) => {
        e.preventDefault();
        const section = document.getElementById(sectionId);
        if(section){
            section.scrollIntoView({behavior: 'smooth'});
        }
        };
    return (
        <section className="header">
            <h2><TbCloudComputing /> Programmer</h2>
            <ul>
                <li><a href="#heroSection" onClick={(e) => scrollToSection('heroSection', e)}>
            Home
            </a></li>
                <li><a href="#about" onClick={(e) => scrollToSection('aboutSection', e)}>
            About
            </a></li>
                <li><a href="#contact" onClick={(e) => scrollToSection('contactSection', e)}>
            Contact
            </a></li>
            </ul>
        </section>
    )
}

export default Header;