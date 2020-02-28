import React from "react";
import Arme from "./arme";

const Armurie = props => {
  

  let armes = props.armes;
  return (
    <div className="armurie">
      {armes.map(arme => (
        <Arme nom={arme.nom} image={arme.image} onClick={()=>props.onClickArme(arme)} />
      ))}
    </div>
  );
};

export default Armurie;
