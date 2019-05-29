import React from "react";

const TouristInfoCard = props => {
  return (
    <div className="card col-3" style={{ width: "18rem" }}>
      <img className="card-img-top" src={props.imge} alt={props.cityName} />
      <div className="card-body">
        <h5 className="card-title">{props.cityName}</h5>
        <p className="card-text">{props.cityDescription}</p>
        <a href={props.website} className="btn btn-primary">
          Read more..
        </a>
      </div>
    </div>
  );
};

export default TouristInfoCard;
