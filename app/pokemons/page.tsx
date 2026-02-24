import { Suspense } from 'react';
import { getPokemonList } from '@/lib/pokeapi';
import PokemonCard from '@/components/PokemonCard';

function CardSkeleton() {
  return (
    <div className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white/5 border border-white/10 animate-pulse">
      <div className="w-24 h-24 rounded-full bg-white/10" />
      <div className="w-8 h-3 rounded bg-white/10" />
      <div className="w-16 h-4 rounded bg-white/10" />
      <div className="w-20 h-5 rounded-full bg-white/10" />
    </div>
  );
}

export const metadata = {
  title: 'Pokédex',
  description: 'Browse all Pokémon',
};

export default async function PokemonsPage() {
  const { results } = await getPokemonList(40);

  return (
    <main className="min-h-screen px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-2 tracking-tight">
          Pokédex
        </h1>
        <p className="text-center text-gray-400 mb-10 text-sm">
          {results.length} Pokémon
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {results.map((pokemon) => (
            <Suspense key={pokemon.name} fallback={<CardSkeleton />}>
              <PokemonCard name={pokemon.name} />
            </Suspense>
          ))}
        </div>
      </div>
    </main>
  );
}
