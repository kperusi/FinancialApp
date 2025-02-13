import React from "react";
// import img1 from "./images/icon-complete.svg";
function Confirmation(props) {

  return (
    <div className="confirmation">
      {/* <img src={img1} alt="imagelogo" /> */}

      <h1 className="thanks" style={{ textAlign: "center" }}>
        THANK YOU!
      </h1>
      <p className="para" style={{ textAlign: "center" }}>
        We've added your card details
      </p>

      <button className="continue-button" style={{}} onClick={props.confirmationClickHandler}>
        continue
      </button>
    </div>
  );
}
export default Confirmation;
