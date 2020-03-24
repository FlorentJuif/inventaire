import React from "react";
import Weapon from "./weapon";

const Armurerie = props => {
  let armes = props.armes;
  return (
    <div className="armurie">
      {armes.map(arme => (
        <Weapon
          nom={arme.nom}
          image={arme.image}
        />
      ))}
    </div>
  );
};

export default Armurerie;
