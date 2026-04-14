import React from "react";
import RightSection from "./RightSection";
import LeftSection from "./LeftSection";
import Hero from "./Hero";
import Universe from "./Universe";

import Navbar from "../Navbar";
import Footer from "../Footer";

function ProductsPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="media\image\kite.png"
        productName="Kite"
        productDiscription={
          "Our ultra-fast flagship trading platform with \nstreaming market data, advanced charts, an \nelegant UI, and more. Enjoy the Kite \nexperience seamlessly on your Android and \niOS devices."
        }
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection
        productName="Console"
        productDiscription={"The central dashboard for your Zerodha \naccount. Gain insights into your trades and \ninvestments with in-depth reports and \nvisualisations."}
        learnMore=""
        imageURL="media\image\console.png"
      />
      <LeftSection
        imageURL="media\image\coin.png"
        productName="Coin"
        productDiscription={
          "Buy direct mutual funds online, commission-\nfree, delivered directly to your Demat \naccount. Enjoy the investment experience \non your Android and iOS devices."
        }
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection
        productName="Kite Connect API"
        productDiscription={"Build powerful trading platforms and \nexperiences with our super simple \nHTTP/JSON APIs. If you are a startup, build \nyour investment app and showcase it to our \nclientbase."}
        learnMore=""
        imageURL="media\image\kiteconnect.png"
      />
      <LeftSection
        imageURL="media\image\varsity.png"
        productName="Varsity mobile"
        productDiscription={
          "An easy to grasp, collection of stock market \nlessons with in-depth coverage and \nillustrations. Content is broken down into \nbite-size cards to help you learn on the go."
        }
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <p className='text-center fs-5 mt-5 mb-5'>
        Want to know more about our technology stack? Check out the <a href="" style={{textDecoration:'none'}}>Zerodha.tech</a> blog.
      </p>
      <Universe />
    </>
  );
}

export default ProductsPage;
