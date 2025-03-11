import { DetailPokemon } from '@/interfaces/pokemon.interface'
import { getColorFromUrl } from '@/utils/colors';
import React, { useEffect, useState } from 'react'



interface PokemonAvatarProps {
    pokemon: DetailPokemon
}

const PokemonAvatar = ({pokemon}: PokemonAvatarProps) => {
    
  return (
    <section
      className="max-w-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden"
      style={{ backgroundColor: pokemon.color }}
    >
      <div className="cardimage">
        <img
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt={pokemon.name}
          className="w-full h-64 object-contain"  
        />
      </div>
      <div className="cardcontent p-6">  
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold capitalize">{pokemon.name}</h1>  
          <h2 className="text-xl text-gray-600">#{pokemon.id}</h2>
        </div>
      </div>
    </section>
  );
  
  
}

export default PokemonAvatar