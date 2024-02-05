import React from "react";
import myResume from "../../assets/files/Resume.pdf"
import { BsCloudDownload } from "react-icons/bs";

function Resume() {
  return (
    <div>
      <section id="welcome-section" className="download-intro">
        <div className="flex-row">
          <h2 className="section-title primary-border">My CV</h2>
        </div>
        <div className="flex-row">
          <div className="download-info">
            <div className="download-text">
              <a href={myResume} className="download-logo" download>
                <BsCloudDownload />
              </a>
              <p>
                Download my CV here
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Resume;
