import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { getPokemon, getPokemonDescription } from '@/lib/pokeapi';
import TypeBadge from '@/components/TypeBadge';
import StatBar from '@/components/StatBar';

interface PageProps {
  params: Promise<{ name: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { name } = await params;
  const capitalized = name.charAt(0).toUpperCase() + name.slice(1);
  return {
    title: `${capitalized} — Pokédex`,
    description: `View details for ${capitalized}`,
  };
}

export default async function PokemonDetailPage({ params }: PageProps) {
  const { name } = await params;

  let pokemon;
  try {
    pokemon = await getPokemon(name);
  } catch {
    redirect('/pokemons');
  }

  const description = await getPokemonDescription(name);
  const artwork = pokemon.sprites.other['official-artwork'].front_default;

  const heightM = (pokemon.height / 10).toFixed(1);
  const weightKg = (pokemon.weight / 10).toFixed(1);

  return (
    <main className="min-h-screen px-4 py-10">
      <div className="max-w-2xl mx-auto">
        <Link
          href="/pokemons"
          className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors mb-8"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Pokédex
        </Link>

        <div className="rounded-3xl bg-white/5 border border-white/10 overflow-hidden">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-center gap-6 p-8 border-b border-white/10">
            <div className="relative w-44 h-44 shrink-0">
              {artwork ? (
                <Image
                  src={artwork}
                  alt={pokemon.name}
                  fill
                  className="object-contain drop-shadow-2xl"
                  sizes="176px"
                  priority
                />
              ) : (
                <div className="w-full h-full bg-white/10 rounded-full" />
              )}
            </div>

            <div className="flex flex-col gap-3 text-center sm:text-left">
              <span className="text-gray-400 text-sm font-mono">
                #{pokemon.id.toString().padStart(4, '0')}
              </span>
              <h1 className="text-4xl font-extrabold capitalize tracking-tight">
                {pokemon.name}
              </h1>
              <div className="flex gap-2 flex-wrap justify-center sm:justify-start">
                {pokemon.types.map(({ type }) => (
                  <TypeBadge key={type.name} type={type.name} />
                ))}
              </div>
              {description && (
                <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
                  {description}
                </p>
              )}
            </div>
          </div>

          {/* Info row */}
          <div className="grid grid-cols-2 divide-x divide-white/10 border-b border-white/10">
            <div className="flex flex-col items-center py-4 gap-0.5">
              <span className="text-xs text-gray-400 uppercase tracking-wide">
                Height
              </span>
              <span className="font-bold text-lg">{heightM} m</span>
            </div>
            <div className="flex flex-col items-center py-4 gap-0.5">
              <span className="text-xs text-gray-400 uppercase tracking-wide">
                Weight
              </span>
              <span className="font-bold text-lg">{weightKg} kg</span>
            </div>
          </div>

          {/* Stats */}
          <div className="p-8">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">
              Base Stats
            </h2>
            <div className="flex flex-col gap-3">
              {pokemon.stats.map(({ stat, base_stat }) => (
                <StatBar key={stat.name} name={stat.name} value={base_stat} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
