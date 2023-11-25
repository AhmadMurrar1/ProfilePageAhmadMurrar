
import React from 'react';
import './heroSection.css'; 

function HeroSection() {
    const scrollToHeroSection = () => {
        const contactSection = document.getElementById('contactSection');
        contactSection.scrollIntoView({ behavior: 'smooth' });
        };
    return (
        <section id='heroSection' className="heroSection">
            <section className='main'>
                <h2>Ahmad Murrar</h2>
                <h6>Full Stack Developer & Gamer</h6>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJFR6pP-fRr-xUsUxtWDyN_DlqkiFb3MXviQ&usqp=CAU" alt="Face1" />
                <button onClick={scrollToHeroSection}>HIRE ME</button>
                <div class="bar">
    <div class="ball"></div></div>
            </section>
        </section>
    );
}

export default HeroSection;
