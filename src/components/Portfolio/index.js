import React from "react";
import WeatherDashImage from "../../assets/small/Weather_Dash.png";
import BlissfulBeginnings from "../../assets/small/blissful beginnings.png";
import VisualVault from "../../assets/small/Visual-Vault.png";
import NoteTaker from "../../assets/small/Note-Taker.png";
import WorkDaySheduler from "../../assets/small/Work-Day-Scheduler.png";


function Portfolio() {
  return (
    <div>
      <section id="work" className="jobs">
        <div className="flex-row">
          <h2 className="section-title secondary-border">Projects</h2>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/AshtonJ7/blissful-beginnings">
                {" "}
                <img
                  src={BlissfulBeginnings}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="BlissfulBeginnings"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Blissful Beginnings</h4>
              <p>
              Blissful-beginnings is an ecommerce shop built using the MERN (MongoDB, Express.js, React.js, Node.js) stack, designed to cater to the needs of both new and experienced parents. 
              The goal was to provide a seamless and enjoyable shopping experience for all of your baby essentials, from adorable clothing to safe and innovative baby gear.
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/AMillsy/Visual-Vault">
                {" "}
                <img
                  src={VisualVault}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="VisualVault"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Visual Vault</h4>
              <p>
              The challenge of this project was to work collaboratively as a team to create our very first full stack application. 
              Our application is called 'Visual Vault'. It is a website that serves as a platform for developers to show off their project repositories. It also allows users to actively engage with other developers by giving reactions using emojis. 
              This creates a fun environment for developers to interact with each other. Furthermore, we hope that the website can become a platform for employers to view projects of potential candidates. Registered users will be able to add their social profiles including; Facebook, Twitter, Instagram and LinkedIn. This will allow for further interaction between employers and developers beyond Visual Vault.
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://bondt1.github.io/Weather-Dashboard/">
                {" "}
                <img
                  src={WeatherDashImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="WeatherDash"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Weather Dashboard</h4>
              <p>
              The aim of this project was to create a fully functional weather dashboard which, using the Open Weather API, presents the current weather corresponding to your city input, 
              as well as a five day weather forecast. These include the temperature, wind speed and humidity, alongside a corresponding weather icon. 
              A search history list is also presented with buttons that taking you to previously searched city forecasts.
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://note-taker-express-t-d56f6cd95532.herokuapp.com/">
                {" "}
                <img
                  src={NoteTaker}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="NoteTaker"
                />
              </a>
            </div>
            <div className="job-text">
              <h4> Express.js Note Taker </h4>
              <p>
              The aim of this project was to create a fully functional note taker using Express.js, which allows the user to create new notes, save them to a sidebar, and delete them. 
              The application was deployed with Heroku and contains an introductory page and the main note taker page. The main task was to create the back-end code for the application, creating a simple API and linking this to the front-end code already present.
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://bondt1.github.io/Work-Day-Scheduler/">
                {" "}
                <img
                  src={WorkDaySheduler}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="WorkDayScheduler"
                />
              </a>
            </div>
            <div className="job-text">
              <h4> Work Day Scheduler</h4>
              <p>
              The aim of this project was to create a fully functional work day scheduler using Javascript, Jquery, moment.js, Bootstrap CSS and HTML. 
              With the assistance of HTML and CSS starter code, the work day scheduler portrays the current date and time, time blocks for standard business hours which are actively colour coded in regards to the current time, and a save button which saves events to local storage.
              </p>
            </div>
          </div>
        </div>
       </section>
     </div>
  );
}

export default Portfolio;
