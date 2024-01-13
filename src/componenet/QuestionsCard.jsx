import React from "react";

import "../style/QuistionCard.css";

function QuestionsCard() {
  return (
    <div>
      <div className="card-main shadow mb-5 bg-body-tertiary rounded ms-2 rounded">
        <div
          className="card-sec1 text-white"
          style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}
        >
          <div style={{ borderBottom: "40px red" }}>
            <div className="d-flex ">
              <div>
                <h6
                  style={{ width: "40vw", padding: "25px" }}
                  className="fw-bold"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem molestias, architecto quas minima natus
                  voluptatem unde recusandae doloribus, similique, rem in
                  nesciunt sint!
                </h6>
              </div>
              <div className="inc-dic" style={{ padding: "25px" }}>
                <div className="d-flex inc-dic-conatiner rounded-3">
                  <div
                    style={{
                      width: "3rem",
                      textAlign: "center",
                      borderRight: "2px solid white",
                    }}
                  >
                    -
                  </div>
                  <div
                    style={{
                      width: "3rem",
                      textAlign: "center",
                      borderRight: "2px solid white",
                    }}
                  >
                    103
                  </div>
                  <div style={{ width: "3rem", textAlign: "center" }}>+</div>
                </div>
              </div>
            </div>
            <div
              style={{ border: "1px solid white ", marginTop: "10px" }}
            ></div>
            <div className="d-flex p-4 px-5">
              <div className="d-flex" style={{ width: "20vw" }}>
                <div style={{ marginRight: "40%" }}>
                  <div
                    style={{
                      width: "30px",
                      height: "30Px",
                      borderRadius: "50%",
                      backgroundColor: "white",
                      color: "black",
                      textAlign: "center",
                    }}
                  >
                    p
                  </div>
                </div>
                <div className="count fw-bold">Count</div>
              </div>
              <div className="d-flex  ms-5" style={{ width: "50vw" }}>
                <div
                  style={{
                    borderRight: "2px solid white",
                    paddingRight: "5rem",
                    marginLeft: "10%",
                    marginRight: "10%",
                  }}
                >
                  year/month
                </div>
                <div
                  style={{
                    borderRight: "2px solid white",
                    paddingRight: "5rem",
                  }}
                >
                  Activ date
                </div>
                <div style={{ marginLeft: "10%" }}>Viewed</div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-sec2 d-flex flex-column">
          <div className="p-3">
            <div className="para1 mt-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              maxime illum dolore aut quas cumque sequi accusamus optio odio
              architecto.
            </div>
            <div className="para2 mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              maxime illum dolore aut quas cumque sequi accusamus optio odio
              architecto.
            </div>
            <div className="para3 mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              maxime illum dolore aut quas cumque sequi accusamus optio odio
              architecto.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionsCard;
