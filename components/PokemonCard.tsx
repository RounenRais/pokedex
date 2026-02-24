import Image from 'next/image';
import Link from 'next/link';
import { getPokemon } from '@/lib/pokeapi';
import TypeBadge from '@/components/TypeBadge';

interface PokemonCardProps {
  name: string;
}

export default async function PokemonCard({ name }: PokemonCardProps) {
  const pokemon = await getPokemon(name);
  const artwork =
    pokemon.sprites.other['official-artwork'].front_default;

  return (
    <Link
      href={`/pokemons/${name}`}
      className="group flex flex-col items-center gap-2 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-white/25 hover:bg-white/10 transition-all duration-200"
    >
      <div className="relative w-24 h-24">
        {artwork ? (
          <Image
            src={artwork}
            alt={name}
            fill
            className="object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-200"
            sizes="96px"
          />
        ) : (
          <div className="w-full h-full bg-white/10 rounded-full" />
        )}
      </div>

      <span className="text-xs text-gray-400">
        #{pokemon.id.toString().padStart(3, '0')}
      </span>

      <h2 className="capitalize font-bold text-sm text-center">{name}</h2>

      <div className="flex gap-1 flex-wrap justify-center">
        {pokemon.types.map(({ type }) => (
          <TypeBadge key={type.name} type={type.name} />
        ))}
      </div>
    </Link>
  );
}
