import React from "react";

const Weapon = ({ name, picture }) => {
  return (
    <div>
      {name}
      <img src={picture} />
    </div>
  );
};

export default Weapon;
