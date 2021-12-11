import React from 'react';
import Card from '../Card/Card';
import './style.css';

function Home({loading, prev, next, pokemonData}) {
  return (
  <> 
    <div className="Home">
      <img  alt="" src='pokemonicon.png' />
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
             return <Card key={i} pokemon={pokemon} />
           })}
         </div>
       </>
     )}
   </div>
   </> 
  );
}


export default Home;