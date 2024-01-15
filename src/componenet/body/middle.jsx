import React from "react";
import "./css/middle.css";

function middle() {
  return (
    <div className="middle">
      <div className="middle-container">
        <div className="middle-container-top">
          <div className="middle-top">
            <h4>
              Visual studio code and cmd : Cannot be Loaded because running
              scripts is disabled on this system
            </h4>
            <div className="buttons">
              <div className="btn">-</div>
              <div className="btn">103</div>
              <div className="btn" style={{ borderRight: "0px" }}>
                +
              </div>
            </div>
          </div>
          <div className="hr"></div>
          <div className="detials">
            <div className="owner-detial">
              <div className="detial">prfl</div>
              <div className="detial">Richardo Rocha</div>
              <div className="detial">9,038</div>
            </div>
            <div className="date-detial">
              <div className="yr-mnth">Year/month</div>
              <div className="day">Day</div>
              <div className="viwed">Viwed</div>
            </div>
          </div>
        </div>
        <div className="middle-conatiner-buttom">
          <div className="container-buttom">
            <div className="question">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              cum nobis, magni dolor consequatur dolorum quia autem quisquam
              nesciunt illum impedit, dignissimos rerum incidunt.
            </div>
            <div className="question">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              cum nobis, magni dolor consequatur dolorum quia autem quisquam
              nesciunt illum impedit, dignissimos rerum incidunt.
            </div>
            <div className="question">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              cum nobis, magni dolor consequatur dolorum quia autem quisquam
              nesciunt illum impedit, dignissimos rerum incidunt.
            </div>
          </div>
        </div>
      </div>
      <div className="answer">
        <h2>20 Answer</h2>
        <div className="options">
          <div className="option">Active</div>
          <div className="option">Oldest</div>
          <div className="option">Active</div>

        </div>
      </div>
    </div>
  );
}

export default middle;
