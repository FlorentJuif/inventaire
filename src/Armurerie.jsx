import React from "react";
import Weapon from "./weapon";

const Armory = ({props}) => {
  let weapons = props.weapons;

  return (
    <div className="armurerie">
      {weapons.map(weapon => (
        <Weapon key={weapon.name} name={weapon.name} picture={weapon.name} />
      ))}
      <button onClick={props.onClick}>Add Weapon</button>
    </div>
  );
};

export default Armory;
