"use client";

import usePokemons from '@/hooks/usePokemons';
import { IndexedType } from '@/interfaces/pokemon.interface';
import React, { useState } from 'react';

const Header = () => {
  const { pokemonTypes, setSelectedType, selectedType, setPokemons } = usePokemons();
  const [showTypes, setShowTypes] = useState(false);

  const handleSelectType = (type: IndexedType | null) => {
    if (type) {
      // Set the selected type and log to confirm
      setSelectedType(type);
      console.log('Selected type:', type.name);
    } else {
      // Reset pokemons and type when "None" is selected
      setPokemons([]);
      setSelectedType(null);
      console.log('Cleared type selection');
    }
  };

  return (
    <nav className='w-screen h-20 grid place-items-center bg-white/50 fixed top-0 left-0 z-[1] border-b-4 backdrop-blur-[20px]'>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Toggle Button for Types */}
        <div className="relative">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg focus:outline-none"
            onClick={() => setShowTypes(!showTypes)}
          >
            Types
          </button>

          {/* Dropdown for Types */}
          {showTypes && (
            <div className="absolute z-10 bg-white shadow-lg rounded-lg mt-2 w-full max-w-xs">
              <div className="flex flex-wrap justify-start p-4 space-x-2 space-y-2">
                {pokemonTypes.map((type) => (
                  <button
                    key={type.name}
                    style={{ background: type.color }}
                    className={`text-white py-1 px-3 rounded-lg focus:outline-none ${
                      selectedType && selectedType.name === type.name ? 'ring-2 ring-blue-500' : ''
                    }`}
                    onClick={() => handleSelectType(type)}
                  >
                    {type.name}
                  </button>
                ))}
                {/* None button */}
                <button
                  className="bg-gray-500 text-white py-1 px-3 rounded-lg focus:outline-none"
                  onClick={() => handleSelectType(null)}
                >
                  None...
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Search Bar */}
        <div className="w-1/3">
          <input
            type="text"
            placeholder="Search Pokémon"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Light/Dark Mode Switch (Placeholder) */}
        <div>
          <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg">
            Light/Dark Mode
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
