import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDiscription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container ">
      <div className="row">
        <div className="col-6 ">
          <img src={imageURL} />
        </div>
        <div className="col-6 p-5 mt-5">
          <h3 style={{marginLeft:'40px'}}>{productName}</h3>
          <p style={{whiteSpace:"pre-line",marginLeft:'40px'}}>{productDiscription}</p>
          <div>
            <a href={tryDemo} style={{ textDecoration: "none",marginLeft:'40px'}}>
              Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a
              href={learnMore}
              style={{ marginLeft: "80px", textDecoration: "none" }}
            >
              Learn more{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
          <div className="mt-4">
            <a href={googlePlay} style={{ marginLeft: "40px" }}>
              <img src="media\image\googlePlayBadge.svg" />
            </a>
            <a href={appStore} style={{ marginLeft: "20px" }}>
              <img src="media\image\appstoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
