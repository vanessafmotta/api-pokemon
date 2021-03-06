import React from 'react';
import Card from '../Card/Card';
import './style.css';

export default function PokemonList({ loading, prev, next, pokemonData, favourites, setFavorites, props }) {
  return (
    <>
      <div className="PokemonList">
        <img alt="" src='pokemonicon.png' />
      </div>
      <div>
        {loading ? <h1 style={{ textAlign: 'center' }}>Loading...</h1> : (
          <>
            <div className="btn">
              <button onClick={prev}>Voltar</button>
              <button onClick={next}>Próximo</button>
            </div>
            <div className="grid-container">
              {pokemonData.map((pokemon, i) => {
                return <Card key={i} pokemon={pokemon} favourites={favourites} setFavorites={setFavorites} />
              })}
            </div>
          </>
        )}
      </div>
    </>
  );
}
