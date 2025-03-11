import React from 'react';
import { IndexedPokemon, ListPokemon } from '@/interfaces/pokemon.interface';
import PokemonCard from '../pokemoncard/page';

interface PokemonListProps {
  pokemons: ListPokemon[];
}

const PokemonList = ({ pokemons }: PokemonListProps) => {
  return (
    <div className="container mx-auto p-4">
      {pokemons.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {pokemons.map((p) => (
            <PokemonCard key={p.name} pokemon={p} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No Pokémon found.</p>
      )}
    </div>
  );
};

export default PokemonList;
