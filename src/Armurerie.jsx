import React, { useState } from "react";
import Weapon from "./weapon";

const Armurerie = () => {
    const [armes, setArmes] = useState([
    {
      nom: "AK",
      image:
        "data:image/png;base64,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"
    },
    {
      nom: "M4",
      image:
        "data:image/jpeg;base64,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"
    }
  ]);

  return (
    <div className="armurerie">
      {armes.map(armes => (
        <Weapon nom={armes.nom} image={armes.image} />
      ))}
      <button onClick={()=>setArmes([{nom:'NewWeapon',image:'data:image/jpeg;base64,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'},...armes])}>
        Add Weapon
      </button>
    </div>
  );
};

export default Armurerie;
