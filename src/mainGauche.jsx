import React from "react";
import Arme from "./arme";


const MainGauche = props => {
  return (
    <div className="mainGauche"onClick={props.onClick}>
      Main Gauche
      {props.arme && <Arme {...props.arme} />}
    </div>
  );
};

// au clic déplacer l'amre dans l'inventaire

export default MainGauche;
