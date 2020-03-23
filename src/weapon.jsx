import React from 'react'

const Weapon=({nom,image,onClick})=>{
    return(
        <div onClick={onClick}>
            {nom}
           <img src={image}/>
            Je suis une arme
        </div>
    )
}

export default Weapon