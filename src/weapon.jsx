import React from "react";

const Weapon = ({ nom, image }) => {
  return (
    <div>
      {nom}
      <img src={image} />
    </div>
  );
};

export default Weapon;
