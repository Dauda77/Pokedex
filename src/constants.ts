import { blue, blueGrey, brown, cyan, deepPurple, green, grey, pink, red, yellow } from "@mui/material/colors"
import { IndexedType } from "./interfaces/pokemon.interface"

export const POKEMON_API_BASE_URL = "https://pokeapi.co/api/v2"
export const POKEMON_API_POKEMON_URL = `${POKEMON_API_BASE_URL}/pokemon`
export const POKEMON_IMAGES_BASE_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/other/showdown"
export const POKEMON_TYPES: IndexedType[] =  [
    {
        name: "normal",
        url: "https://pokeapi.co/api/v2/type/1/",
        color: brown[100]
    },
    {
        name: "fighting",
        url: "https://pokeapi.co/api/v2/type/2/",
        color: grey[200]
    },
    {
        name: "flying",
        url: "https://pokeapi.co/api/v2/type/3/",
        color: deepPurple[400]
    },
    {
        name: "poison",
        url: "https://pokeapi.co/api/v2/type/4/",
        color: pink[600]
    },
    {
        name: "ground",
        url: "https://pokeapi.co/api/v2/type/5/",
        color: yellow[300]
    },
    {
        name: "rock",
        url: "https://pokeapi.co/api/v2/type/6/",
        color: grey[500]
    },
    {
        name: "bug",
        url: "https://pokeapi.co/api/v2/type/7/",
        color: green[900]
    },
    {
        name: "ghost",
        url: "https://pokeapi.co/api/v2/type/8/",
        color: cyan[700]
    },
    {
        name: "steel",
        url: "https://pokeapi.co/api/v2/type/9/",
        color: blueGrey[800]
    },
    {
        name: "fire",
        url: "https://pokeapi.co/api/v2/type/10/",
        color: red[900]
    },
    {
        name: "water",
        url: "https://pokeapi.co/api/v2/type/11/",
        color: blue[400]
    },
    {
        name: "grass",
        url: "https://pokeapi.co/api/v2/type/12/",
        color: green[800]
    },
    {
        name: "electric",
        url: "https://pokeapi.co/api/v2/type/13/",
        color: brown[100]
    },
    {
        name: "psychic",
        url: "https://pokeapi.co/api/v2/type/14/",
        color: brown[100]
    },
    {
        name: "ice",
        url: "https://pokeapi.co/api/v2/type/15/",
        color: brown[100]
    },
    {
        name: "dragon",
        url: "https://pokeapi.co/api/v2/type/16/",
        color: brown[100]
    },
    {
        name: "dark",
        url: "https://pokeapi.co/api/v2/type/17/",
        color: brown[100]
    },
    {
        name: "fairy",
        url: "https://pokeapi.co/api/v2/type/18/",
        color: brown[100]
    },
    {
        name: "stellar",
        url: "https://pokeapi.co/api/v2/type/19/",
        color: brown[100]
    }
  ]