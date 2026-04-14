import React from "react";

function Universe() {
  return (
    <div className="container">
      <div className="row text-center  mt-5">
        <h4>The Zerodha Universe</h4>
        <p className="mt-3 mb-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-4">
          <img
            src="media\image\zerodhaFundhouse.png"
            style={{ width: "50%" }}
          />
          <p className="text-small text-muted mt-3">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-4">
          <img src="media\image\sensibullLogo.svg" style={{ width: "60%" }} />
          <p className="text-small text-muted mt-4">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 p-4">
          <img src="media\image\streakLogo.png" style={{ width: "50%" }} />
          <p className="text-small text-muted mt-3">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-4 p-4">
          <img src="media\image\smallcaseLogo.png" style={{ width: "60%" }} />
          <p className="text-small text-muted mt-3">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-4">
          <img src="media\image\dittoLogo.png" style={{ width: "50%" }} />
          <p className="text-small text-muted mt-3">
            Personalized advice on life and health insurance. No spam and no
            mis-selling
          </p>
        </div>
        <div className="col-4 p-4">
          <img src="media\image\goldenpiLogo.png" style={{ width: "50%" }} />
          <p className="text-small text-muted mt-3">
            GoldenPi is an Indian platform that allows users to invest in bonds
            and earn fixed returns with relatively low risk.
          </p>
        </div>
        <button
          className="p-2 mb-5 btn btn-primary fs-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
