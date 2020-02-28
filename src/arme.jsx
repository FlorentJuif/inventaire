import React from "react";

const Arme = ({ nom, image,onClick }) => {
  return (
    <div className="arme"onClick={onClick}>
      {nom}
      <img src={image} />
    </div>
  );
};

export default Arme;
