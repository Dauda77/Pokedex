import { DetailPokemon } from '@/interfaces/pokemon.interface'
import React from 'react'

interface PokemonStatsProps {
    pokemon: DetailPokemon
}

const PokemonStats =  ({pokemon}: PokemonStatsProps) => {
    return (
        <div className="card bg-white shadow-md rounded-lg p-6 mx-auto max-w-xl">
          <div className="cardcontent">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Stats</h3>
            {pokemon && (
              <table className="table-auto w-full text-left border-collapse">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-2 px-4 capitalize text-gray-700">Stat</th>
                    <th className="py-2 px-4 text-gray-700">Value</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {pokemon.stats.map((stat) => (
                    <tr key={stat.stat.name}>
                      <td className="py-2 px-4 capitalize text-gray-700">{stat.stat.name}</td>
                      <td className="py-2 px-4 text-gray-700">{stat.base_stat}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      );     
      
}

export default PokemonStats