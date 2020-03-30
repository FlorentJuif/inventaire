import React from "react";

const Weapon = ({ name, picture }) => {
  return (
    <div>
      {name}
      <img  src={picture} alt='Weapon Pic' />
    </div>
  );
};

export default Weapon;
