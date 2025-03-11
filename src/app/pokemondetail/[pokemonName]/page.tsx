"use client";


import PokemonAvatar from '@/components/pokemonavatar/page';
import PokemonBasicInfo from '@/components/pokemonbasicinfo/page';
import PokemonStats from '@/components/pokemonstats/page';
import usePokemon from '@/hooks/usePokemon';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react';

const PokemonDetail = () => {
  const { pokemonName } = useParams(); // Ensure `pokemonName` matches the dynamic segment

  const { pokemon, isLoading } = usePokemon({ pokemonName });


  return (
    <section className="container mx-auto p-4 mt-20">
      <div className="flex flex-col items-center justify-center">
        <div className="w-full max-w-md">
          {isLoading ? (
            <div className="text-center text-gray-500">Loading...</div>
          ) : pokemon ? (
            <>
              <div className="mb-4">
                <PokemonAvatar pokemon={pokemon} />
              </div>
              <div className="mb-4">
                <PokemonBasicInfo pokemon={pokemon} />
              </div>
              <div className="mb-4">
                <PokemonStats pokemon={pokemon} />
              </div>
            </>
          ) : (
            <div className="text-center text-red-500">Pokemon not Found</div>
          )}
        </div>
        <div>
          <Link href={`/`}>
          <button>
            Go back to list
          </button>
          </Link>
        </div>
      </div>
    </section>
  );  
};

export default PokemonDetail;
