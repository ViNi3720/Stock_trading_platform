import React from "react";

function RightSection({
  productName,
  productDiscription,
  learnMore,
  imageURL,
}) {
  return (
    <div className="container mb-5 ">
      <div className="row ">
        <div className="col-6 p-5 mt-5">
          <h3 className='mt-5'>{productName}</h3>
          <p style={{ whiteSpace: "pre-line" }}>{productDiscription}</p>
          <a
            href={learnMore}
            style={{ textDecoration: "none" }}
          >
            Learn more <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
        <div className="col-6 ">
          <img src={imageURL} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
