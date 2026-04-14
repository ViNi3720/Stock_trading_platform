import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row border-top p-3 mt-5">
        <h1 className="text-center">People</h1>
      </div>
      <div className="row p-3 " style={{ lineHeight: "1.8", fontSize: "18px" }}>
        <div className="col text-center p-3">
          <img
            src="media\image\vishal_new_photo.jpeg"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-5">Vishal Chauhan</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col p-3">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Homepage
            </a>{" "}
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
