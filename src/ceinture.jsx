import React from "react";
import Arme from './arme'
const Ceinture = props => {
  return <div className="ceinture"onClick={props.onClick}>
      Ceinture
     {props.arme && <Arme nom={props.arme.nom}image={props.arme.image}/>}
  </div>
};
export default Ceinture;
