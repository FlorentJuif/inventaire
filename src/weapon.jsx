import React from 'react'

const Weapon=({nom,image})=>{
    let nom='Ak'
    let image='https://www.destockage-games.com/catalogue-fusil-mitrailleur-kalashnikov-ak47-aeg-electrique-kalachnikov-ak-47-120903/image/3559961209030_000_kalashnikov_ak47_crosse_pleine_340bbs_aeg_0_8j_120903_.jpg.webp'
    return(
        <div >
            {nom}
           <img src={image}/>
            
        </div>
    )
}

export default Weapon