"use client";

import PokemonList from '@/components/pokemonlist/page';
import usePokemons from '@/hooks/usePokemons';
import { Button, Grid } from '@mui/material';
import { IndexedType } from '@/interfaces/pokemon.interface'; 
import React from 'react'

const Home = () => {
  const {pokemons, hasMorePokemon, fetchNextPage , pokemonTypes, setSelectedType, selectedType, setPokemons} = usePokemons();

  console.log('Affiché', pokemons);
  const handleSelectType = (type: IndexedType | null) => {
    if (type) {
      setSelectedType(type);
    } else {
      setPokemons([]);
      setSelectedType(null);
    }
  }
  return (
    <div>
        <Grid container item xs={12} sx={{ display: "flex", justifyContent: "center"}}>
          {pokemonTypes.map((type) => (
            <Button
              variant="contained"
              sx={{
                "&.MuiButton-contained": {
                  background: type.color
                },
                m: 1,
              }}
              onClick={() => handleSelectType(type)}
            >
              {type.name}</Button>
          ))}
          <Button 
            variant="contained"
            sx={{
              m: 1,
            }}
            onClick={() => handleSelectType(null)}
          >
            ALL
          </Button>
        </Grid>
      <div className="container mx-auto p-4 mt-16">
      <PokemonList pokemons={pokemons} />
      
      {hasMorePokemon ? (
        <div className="mt-4 flex justify-center">
          <button 
            onClick={fetchNextPage}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300 ease-in-out"
          >
            Load More Pokémon
          </button>
        </div>
      ) : null}
    </div>
    </div>
  );
};

export default Home;

