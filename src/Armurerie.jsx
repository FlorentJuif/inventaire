import React from "react";
import Weapon from "./weapon";

const Armory = ({weapons,onClick}) => {


  return (
    <div className="armurerie">
      {weapons.map(weapon => (
        <Weapon key={weapon.name} name={weapon.name} picture={weapon.name} />
      ))}
      <button onClick={onClick}>Add Weapon</button>
    </div>
  );
};

export default Armory;
