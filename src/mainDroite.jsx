import React from "react";
import Arme from "./arme";

const MainDroite = props => {
  return (
    <>
      <div className="mainDroite" onClick={props.onClick}>
        Main Droite
        {props.arme && <Arme nom={props.arme.nom} image={props.arme.image} />}
      </div>
    </>
  );
};
// Au clic déplacer l'arme dans l'inventaire.

export default MainDroite;
