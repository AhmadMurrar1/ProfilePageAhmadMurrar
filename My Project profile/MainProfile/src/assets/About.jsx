import "../assets/about.css";
import bgImage from "../Images/minecraft.jpg"
function About() {
    return (
        <section id="aboutSection" className="about">
            <h1>About Me</h1>
            <div class="card">
              <section className="backgroundimage"></section>
  <div class="container">
    <h4>sample of my projects</h4>
    <h4><b>Minecraft2d</b></h4> 
    <a href="https://minecraft-mc.netlify.app">Link of it here</a>
  </div>
</div>
            <div className="aboutMeInfos"><p>
    Ahmad Murrar, a Full Stack Developer based in El-Esawyaa, passionate about technology since high school. Beyond coding, my journey includes hands-on experience in construction, working alongside my father to structure buildings, infusing a practical understanding of design and structure into my skill set.
  </p>
  <p>
    Additionally, I've savored diverse experiences, including time in the bustling environment of a restaurant, where I honed communication and teamwork skills amid fast-paced settings.
  </p>
  <p>
    Beyond my professional pursuits, I find joy and balance in various activities. When not immersed in coding, you'll find me engrossed in video games, finding solace in the digital landscapes they offer. Football is another love, both for its teamwork dynamics and the rush of the game. And amidst it all, swimming stands as my serene retreat, a place where the mind finds tranquility in motion.
  </p>
  <p>
    These diverse experiences and passions have not only shaped my skills but also contributed to a well-rounded perspective that I bring to my work as a Full Stack Developer.
  </p></div>
  <div aria-label="Orange and tan hamster running in a metal wheel" role="img" class="wheel-and-hamster">
	<div class="wheel"></div>
	<div class="hamster">
		<div class="hamster__body">
			<div class="hamster__head">
				<div class="hamster__ear"></div>
				<div class="hamster__eye"></div>
				<div class="hamster__nose"></div>
			</div>
			<div class="hamster__limb hamster__limb--fr"></div>
			<div class="hamster__limb hamster__limb--fl"></div>
			<div class="hamster__limb hamster__limb--br"></div>
			<div class="hamster__limb hamster__limb--bl"></div>
			<div class="hamster__tail"></div>
		</div>
	</div>
	<div class="spoke"></div>
</div>
        </section>
    )
}

export default About;