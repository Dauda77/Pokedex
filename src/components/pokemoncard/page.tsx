"use client"
import React, { useEffect, useState } from 'react';
import { IndexedPokemon, ListPokemon, PokemonType } from '@/interfaces/pokemon.interface';
import { getColorFromUrl } from '@/utils/colors';
import Link from 'next/link';
import usePokemons from '@/hooks/usePokemons';

interface PokemonCardProps {
  pokemon: ListPokemon;
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const [pokemonColor, setPokemonColor] = useState<string>('white');
  // const {pokemonTypes} = usePokemons();



  const getPokemonColor = async () => {
    const color = await getColorFromUrl(pokemon.image)
    if ( color ) setPokemonColor(color);
  };

  useEffect(() => {
    getPokemonColor();
  }, []);

  return (
    <div>
      <Link href={`/pokemondetail/${pokemon.name}`} passHref>
      <div
    className="shadow-md rounded-lg p-4 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:brightness-125"
    style={{
      backgroundColor: pokemonColor, 
      backgroundImage: 'linear-gradient(145deg, rgba(255,255,255,0.3), rgba(255,255,255,0.1))', 
    }}
  >
      <h2 className="text-lg font-semibold text-gray-800">{pokemon.name}</h2>

          {/* Check if the image is defined */}
    {pokemon.image ? (
      <div className="w-full h-48 md:h-56 lg:h-64 flex justify-center items-center">
        <img
          src={pokemon.image}
          alt={pokemon.name}
          className="max-w-full max-h-full object-contain"
        />
      </div>
    ) : (
      <p className="text-red-500">No image available</p>
    )}

      {/* <div className="mt-2 text-sm text-gray-600">
      {pokemonTypes.map((type) => (
      <p>
        Type: {type.name}
      </p>
    )) }
      </div> */}
    </div>
      </Link>
    </div>
  );
};

export default PokemonCard;





