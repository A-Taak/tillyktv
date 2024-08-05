
import React from "react";
import "./cosplayComponent.css";


const CosplayComponent = (props) => {
  const { imgSrc } = props.cosplay;
  return (
    <div className="item">
      <div className="polaroid">
        <img
          src={require("./../assets/Images/cosplay/" + imgSrc + ".jpg")}
          alt=""
        />
        <div className="caption"> </div>
      </div>
    </div>
  );
};

export default CosplayComponent;
