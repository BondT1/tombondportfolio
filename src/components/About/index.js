import React from "react";
import profileImage from "../../assets/large/Profile/Profile_pic.png";
function About() {
  return (
    <section id="about-me" className="my-5 intro">
      <div class="flex-row">
        <h1 id="about" className="section-title primary-border">
          About Me
        </h1>
      </div>
      <div className="flex-row">
        <div class="intro-info">
          <div class="intro-img">
            <img src={profileImage} style={{ width: "100%" }} alt="profile" />
          </div>
          <p>
          Graduate Full-Stack developer with a degree in English Language and Media. Trained at the University of Birmingham coding boot camp and achieved an A (98%) grade. Proactive problem solver, passionate about developing fully functional and innovative applications. Demonstrates adaptability and exploratory thinking combined with real pragmatism in web and application development. 
          <br>
          </br>
          <br></br>
          A solid team player and contributor with experience of successful collaboration with peers across multiple projects. Looking for an opportunity to embark on a career in web and application development with an employer that supports and develops new talent. Eager to apply my skills and knowledge to applications that add value and make a difference.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
