import React from "react";
import WeatherDashImage from "../../assets/small/Weather_Dash.png";
// import homeBrewImage from "../../assets/small/HomeBrew.png";
// import summerPunchImage from "../../assets/small/Summer_Punch.png";
// import weatherDashImage from "../../assets/small/Weather_Dash.png";
// import noteTakerImage from "../../assets/small/NoteTaker.png";
// import twilightImage from "../../assets/small/Twilight_Ristorante.png";
// import flowerImage from "../../assets/small/Sweet-Pea-Flowers.png";
// import sphereImage from "../../assets/small/Sphere.png";

function Portfolio() {
  return (
    <div>
      <section id="work" className="jobs">
        <div className="flex-row">
          <h2 className="section-title secondary-border">Work</h2>
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


//       </section>
//     </div>
  );
}

export default Portfolio;
