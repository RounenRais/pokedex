import Image from 'next/image';
import { getItem } from '@/lib/pokeapi';

interface ItemCardProps {
  name: string;
}

function formatLabel(value: string) {
  return value.replace(/-/g, ' ');
}

export default async function ItemCard({ name }: ItemCardProps) {
  const item = await getItem(name);

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:border-cyan-200/30 hover:bg-white/10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.14),transparent_55%)] opacity-0 transition-opacity duration-200 group-hover:opacity-100" />

      <div className="relative flex items-start gap-3">
        <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-black/20">
          {item.sprites.default ? (
            <Image
              src={item.sprites.default}
              alt={item.name}
              width={40}
              height={40}
              className="object-contain drop-shadow-[0_6px_12px_rgba(0,0,0,0.35)] transition-transform duration-200 group-hover:scale-110"
            />
          ) : (
            <span className="text-xs text-white/50">N/A</span>
          )}
        </div>

        <div className="min-w-0 flex-1">
          <div className="mb-1 flex items-center justify-between gap-2">
            <span className="text-xs tracking-[0.2em] text-white/50">
              #{item.id.toString().padStart(3, '0')}
            </span>
            <span className="rounded-full border border-amber-200/20 bg-amber-300/10 px-2 py-0.5 text-[11px] text-amber-100">
              {item.cost}$
            </span>
          </div>

          <h2 className="truncate text-sm font-semibold capitalize text-white">
            {formatLabel(item.name)}
          </h2>

          <p className="mt-1 truncate text-xs capitalize text-cyan-100/80">
            {formatLabel(item.category.name)}
          </p>
        </div>
      </div>
    </article>
  );
}
