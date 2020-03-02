import React from "react";
import Arme from "./arme";

const Armurie = props => {
  let armes = props.armes;
  let armeSelectionee = props.armeSelectionee;
  return (
    <div className="armurie">
      {armes.map(arme => (
        <Arme
          selected={arme === armeSelectionee}
          nom={arme.nom}
          image={arme.image}
          onClick={() => props.onClickArme(arme)}
        />
      ))}
    </div>
  );
};

export default Armurie;
