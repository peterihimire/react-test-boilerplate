import React from "react";
import ProfilePix from "../../assets/images/ProfilePix.png";

import "./styles.scss";

const homePage = () => {
  return (
    <div className='homepage'>
      <div className='wrapper'>
        <div className="test-wrapper">
          <h3>Homepage</h3>
          <img src={ProfilePix} alt='' />
        </div>
      </div>
    </div>
  );
};

export default homePage;
