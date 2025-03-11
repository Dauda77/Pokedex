export async function generateStaticParams() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
    const data = await response.json();
  
    return data.results.map((pokemon: { name: string }) => ({
      pokemonName: pokemon.name,
    }));
  }
  
  export default function PokemonLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return <>{children}</>;
  }
  