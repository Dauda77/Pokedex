import { DetailPokemon } from '@/interfaces/pokemon.interface'
import React from 'react'

interface PokemonBasicInfoProps {
    pokemon: DetailPokemon
}


const PokemonBasicInfo = ({pokemon}: PokemonBasicInfoProps) => {
    return (
        <section className="p-4">
          <div className="cardcontent">
            <div className="grid grid-cols-1 gap-4 text-center capitalize md:grid-cols-2 lg:grid-cols-4">
              <div className="grid">
                <h3 className="subtitle text-lg font-semibold">Height</h3>
                <h3 className="text-gray-700">{pokemon.height}</h3>
              </div>
              <div className="grid">
                <h3 className="subtitle text-lg font-semibold">Weight</h3>
                <h3 className="text-gray-700">{pokemon.weight}</h3>
              </div>
              <div className="grid">
                <h3 className="subtitle text-lg font-semibold">Abilities</h3>
                <h3 className="text-gray-700">
                  {pokemon.abilities.map((ability) => (
                    <h4 key={ability.ability.name}>{ability.ability.name}</h4>
                  ))}
                </h3>
              </div>
              <div className="grid">
                <h3 className="subtitle text-lg font-semibold">Types</h3>
                <h3 className="text-gray-700">
                  {pokemon.types.map((type) => (
                    <h4 key={type.type.name}>{type.type.name}</h4>
                  ))}
                </h3>
              </div>
            </div>
          </div>
        </section>
      );
      
}

export default PokemonBasicInfo