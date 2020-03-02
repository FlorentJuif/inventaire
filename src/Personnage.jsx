import React, { useState } from "react";
import Armurie from "./armurie";
import Stuff from "./Stuff";

const Personnage = () => {
  const [armes, setArmes] = useState([
    {
      nom: "Ak",
      image:
        "https://lh5.googleusercontent.com/proxy/besdPgtzQWvsO3vPL9qRO4uhpEXdiR78U9p0zqqRq9q8faAyFu2b_bGv0ybm-KGM_EkWWunsBjHG02YyACDBsG1YlOnHJWOYN3IA"
    },
    {
      nom: "m4",
      image: "https://csgotestout.com/images/weapons/M4A4%20Asiimov.png"
    },
    { nom: "USP", image: "https://gocase.pro/assets/weapon2/usp.png" },
    {
      nom: "Glock",
      image:
        "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_glock_cu_glock_wasteland_rebel_light_large.284899ab35e5a29c6edb64b2af194cee19a0ed89.png"
    }
  ]);

  const [armeDroite, setArmeDroite] = useState();
  const [armeCeinture, setArmeCeinture] = useState();
  const [armeGauche, setArmeGauche] = useState();
  const [quelArme, setQuelArme] = useState();

  return (
    <div className="personnage">
      <Stuff
        onClickMd={() => {
          if (armeDroite === undefined) { // si armeDroite est undefined alors :
            setArmeDroite(quelArme);  // mise a jour de QuelArme avec quelArme en parametre
            setArmes(armes.filter(restant => restant !== quelArme)); // on met une arme 
            setQuelArme(undefined); 
          } else {
            setArmeDroite(setArmes([...armes, armeDroite])); // on repose l'arme dans l'armurerie
          }
        }}
        onClickMg={() => {
          if (armeGauche === undefined) {
            setArmeGauche(quelArme);
            setArmes(armes.filter(restant => restant !== quelArme));
            setQuelArme(undefined);
          } else {
            setArmeGauche(setArmes([...armes, armeGauche]));
          }
        }}
        onClickCeinture={() => {
          if (armeCeinture === undefined) {
            setArmeCeinture(quelArme);
            setArmes(armes.filter(restant => restant !== quelArme));
            setQuelArme(undefined);
          } else {
            setArmeCeinture(setArmes([...armes, armeCeinture]));
          }
        }}
        armeDroite={armeDroite}
        armeGauche={armeGauche}
        armeCeinture={armeCeinture}
      />
      <Armurie
        armes={armes}
        onClickArme={arme => {
          setQuelArme(arme);

          /* if (armeDroite === undefined) {
            // si pas d'arme à droite
            setArmes(armes.filter(restant => restant !== arme)); // supprime une arme de l'amurie
            setArmeDroite(arme); // met l'arme dans la main droite
          } else if (armeGauche === undefined) {
            // si pas d'arme à gauche
            setArmes(armes.filter(restant => restant !== arme)); // supprime une arme de l'amurie
            setArmeGauche(arme); // met l'arme dans la main gauche
          } else if (armeCeinture === undefined) {
            // si pas d'arme ceinture
            setArmes(armes.filter(restant => restant !== arme)); // supprime une arme de l'amurie
            setArmeCeinture(arme); // met l'arme à la ceinture
          } */
        }}
      />
    </div>
  );
};

export default Personnage;
