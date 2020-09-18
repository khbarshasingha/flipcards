import React from "react";

const Card = ({ frontsrc, backsrc }) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={frontsrc} width="300" height="400" />
        </div>
        <div class="flip-card-back ">
          <img src={backsrc} width="350" height="450" />
        </div>
      </div>
    </div>
  );
};
export default Card;
