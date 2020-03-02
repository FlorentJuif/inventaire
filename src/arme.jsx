import React from "react";
import cn from "classnames";

const Arme = ({ nom, image, onClick, selected }) => {
  return (
    <div className={cn("arme",{selected})} onClick={onClick}>
      {nom}
      <img src={image} />
    </div>
  );
};

export default Arme;
