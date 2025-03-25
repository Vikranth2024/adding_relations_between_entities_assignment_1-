import React from "react";

const DestinationCard = ({ destination }) => {
  const { name, location, image, description, price } = destination;

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        textAlign: "center",
        backgroundColor : "orange",
        fontFamily : "Sans Mono",
        color : "black",
        
        
      }}
    >
      <img
        src={image}
        alt={name}
        style={{ width: "100%", borderRadius: "8px 8px 0 0" }}
      />
      <h1>{name}</h1>
      <h4>{location}</h4>
      <p>{description}</p>
      <strong>{price}</strong>
    </div>
  );
};

export default DestinationCard;
