import React from "react";
import Weapon from "./weapon";

const Armurerie = props => {
  let armes = props.armes;

  return (
    <div className="armurerie">
      {armes.map(arme => (
        <Weapon
          key={arme.nom}
          nom={arme.nom}
          image={arme.image}/>
      ))}
     <button onClick={props.onClick}>Add Weapon</button>
    </div>
  );
};

export default Armurerie;
