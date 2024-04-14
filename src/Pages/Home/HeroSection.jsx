export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Dinesh Kumar</p>
          <h1 className="hero--section--title">
          <span className="hero--section-title--color">
              <span>F</span><span>u</span><span>l</span><span>l</span> <span>S</span><span>t</span><span>a</span><span>c</span><span>k</span> <span>D</span><span>e</span><span>v</span><span>e</span><span>l</span><span>o</span><span>p</span><span>e</span><span>r</span>
            </span>         
            </h1>
          <p className="hero--section-description">
          "I am a skilled full-stack Java developer proficient in frontend and backend development. With expertise in frameworks like Spring Boot for backend and technologies like HTML, CSS, and JavaScript for frontend, I create robust and responsive web applications. My experience includes database management using MySQL and PostgreSQL, ensuring efficient data storage and retrieval. I excel in delivering end-to-end solutions that meet business requirements and user expectations." <br /><br/>
          </p>
        </div>
        <div>
       <a href="Resume.pdf" className="btn btn-primary">Download Resume</a> 
       </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
