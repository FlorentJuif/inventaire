import React from "react";
import MainDroite from "./mainDroite";
import MainGauche from "./mainGauche";
import Ceinture from "./ceinture";

const Stuff = props => {
  
  return (
    <div className="stuff">
      <MainDroite arme={props.armeDroite}
      onClick={props.onClickMd}/>
      <MainGauche arme={props.armeGauche}
      onClick={props.onClickMg}/>
      <Ceinture arme={props.armeCeinture}
      onClick={props.onClickCeinture}/>
    </div>
  );
};

export default Stuff;
