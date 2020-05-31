import React from 'react';

import './styles.css';

function ChallengeItem({dev}){
    return(


      <li className="dev-item">
      <div>
        <strong>Desafio</strong>
      </div>
        <img src={dev.avatar_url} alt={dev.name}/>
        <p>Mate em tanto jogam as brancas</p>
      </li>

    );
}

export default ChallengeItem;