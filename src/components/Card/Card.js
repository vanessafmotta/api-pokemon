
import typeColors from '../../helpers/typeColors'
import Lottie from 'react-lottie';
import './style.css';
/* import { FcLikePlaceholder, FcLike } from "react-icons/fc"; */
import React, { useState, useEffect } from "react";

import animationData from '../Card/animation.json'

console.log(animationData);



function Card({ pokemon, favorites, setFavorites }) {
  const [isLiked, setLikeState] = useState(false);
  const [animationState, setAnimationState] = useState({
    isStopped: true, isPaused: false,
    
  });

  const defaultOptions = {
    loop: false,
    autoplay: false, 
    animationData: animationData, 
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  function LikeButton() {
    if (!favorites.includes(pokemon.name)) setFavorites([...favorites, pokemon.name]);
    localStorage.setItem('favorite', favorites);
    console.log(favorites);
  }

  return (
    <div className="flip-container">

      <button className="btn-favorite" type='button' onClick={() => {
        setAnimationState({
          ...setAnimationState,
          isStopped: !animationState.isStopped,
        })

        setLikeState(!isLiked)
        LikeButton(pokemon.name)
      }}>{/* <FcLikePlaceholder style={{ fontSize: '20pt' }} /> */}
      <div className="animation">
        <Lottie
          options={defaultOptions}
          width={50}
          height={50}
          direction={animationState.direction}
          isStopped={animationState.isStopped}
          isPaused={animationState.isPaused}/>
      </div>
        <span>
          {isLiked ? 1 : 0}
        </span>
      </button>
      <div className="flipper">
        <div className="front">
          <div className="Card__img">
            <img src={pokemon.sprites.front_default} alt="" />
          </div>
          <div className="Card__name">
            {pokemon.name}
          </div>
        </div>
        <div className="back">

          <div className="Card__types">
            {
              (type => {
                return (
                  <div className="Card__type" style={{ backgroundColor: typeColors[type.type.name] }}>
                    {type.type.name}
                  </div>
                )
              })
            }
          </div>
          <div className="Card__info">
            <div className="Card__data Card__data--weight">
              <p className="title">Weight</p>
              <p>{pokemon.weight}</p>
            </div>
            <div className="Card__data Card__data--weight">
              <p className="title">Height</p>
              <p>{pokemon.height}</p>
            </div>
            <div className="Card__data Card__data--ability">
              <p className="title">Ability</p>
              <p>{pokemon.abilities[0].ability.name}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;