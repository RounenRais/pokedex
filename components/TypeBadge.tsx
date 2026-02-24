import Image from 'next/image';

interface TypeBadgeProps {
  type: string;
}

const TYPE_COLORS: Record<string, string> = {
  normal: 'bg-[#9099a1]',
  fire: 'bg-[#ff4422]',
  water: 'bg-[#3399ff]',
  electric: 'bg-[#ffcc33]',
  grass: 'bg-[#77cc55]',
  ice: 'bg-[#66ccff]',
  fighting: 'bg-[#bb5544]',
  poison: 'bg-[#aa5599]',
  ground: 'bg-[#ddbb55]',
  flying: 'bg-[#8899ff]',
  psychic: 'bg-[#ff5599]',
  bug: 'bg-[#aabb22]',
  rock: 'bg-[#bbaa66]',
  ghost: 'bg-[#6666bb]',
  dragon: 'bg-[#7766ee]',
  dark: 'bg-[#775544]',
  steel: 'bg-[#aaaabb]',
  fairy: 'bg-[#ee99ee]',
};

export default function TypeBadge({ type }: TypeBadgeProps) {
  const color = TYPE_COLORS[type] ?? 'bg-[#9099a1]';
  return (
    <span
      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-white text-xs font-bold uppercase tracking-wide ${color}`}
    >
      <Image
        src={`/types/${type}.svg`}
        alt=""
        width={12}
        height={12}
        aria-hidden="true"
      />
      {type}
    </span>
  );
}
