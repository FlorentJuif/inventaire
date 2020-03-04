import React, { useState } from "react";
import Armurie from "./armurie";
import Stuff from "./Stuff";
import { useEffect } from "react";

const Personnage = () => {
  const [armes, setArmes] = useState([]);

  useEffect(() => {
    fetch("/weapons")
      .then(info => {
        return info.json();
      })
      .then(data => {
        const apiArmes = data.map(({ name, imageUrl }) => {
          return {
            name,
            image:imageUrl
          };
        });
        setArmes(apiArmes);
      });
  }, []);

  const [armeDroite, setArmeDroite] = useState();
  const [armeCeinture, setArmeCeinture] = useState();
  const [armeGauche, setArmeGauche] = useState();
  const [quelArme, setQuelArme] = useState();

  return (
    <div className="personnage">
      <Stuff
        onClickMd={() => {
          if (armeDroite === undefined) {
            // si armeDroite est undefined alors :
            setArmeDroite(quelArme); // on met l'arme
            setArmes(armes.filter(restant => restant !== quelArme)); // suprime l'arme de l'inventaire quand posée sur MD
            setQuelArme(undefined); // une fois l'amre mise, le clic n'a plus d'arme
          } else {
            let newArmes = [...armes, armeDroite];
            setArmes(newArmes.filter(restant => restant !== quelArme));
            setArmeDroite(quelArme);
            setQuelArme(undefined);
          }
        }}
        onClickMg={() => {
          let newArmes = armes;
          if (armeGauche !== undefined) {
            newArmes = [...armes, armeGauche];
          }
          setArmes(newArmes.filter(restant => restant !== quelArme));
          setArmeGauche(quelArme);
          setQuelArme(undefined);
        }}
        onClickCeinture={() => {
          if (armeCeinture === undefined) {
            setArmeCeinture(quelArme);
            setArmes(armes.filter(restant => restant !== quelArme));
            setQuelArme(undefined);
          } else {
            let newArmes = [...armes, armeCeinture];
            setArmes(newArmes.filter(restant => restant !== quelArme));
            setArmeCeinture(quelArme);
            setQuelArme(undefined);
          }
        }}
        armeDroite={armeDroite}
        armeGauche={armeGauche}
        armeCeinture={armeCeinture}
      />
      <Armurie
        armes={armes}
        armeSelectionee={quelArme}
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
