import { Suspense } from 'react';
import ItemCard from '@/components/ItemCard';
import { getItemList } from '@/lib/pokeapi';

function ItemCardSkeleton() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 animate-pulse">
      <div className="flex items-start gap-3">
        <div className="h-14 w-14 rounded-xl bg-white/10" />
        <div className="flex-1 space-y-2">
          <div className="h-3 w-full max-w-[120px] rounded bg-white/10" />
          <div className="h-4 w-full max-w-[170px] rounded bg-white/10" />
          <div className="h-3 w-full max-w-[100px] rounded bg-white/10" />
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: 'Pokemon Items',
  description: 'Browse Pokemon items from PokeAPI',
};

export default async function ItemsPage() {
  const { results, count } = await getItemList(48);

  return (
    <main className="min-h-screen bg-[#06080d] px-4 py-10 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="relative mb-8 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(45,212,191,0.16),transparent_45%),radial-gradient(circle_at_90%_10%,rgba(59,130,246,0.14),transparent_40%)]" />
          <div className="relative">
            <p className="mb-2 text-xs tracking-[0.28em] text-cyan-200/70">
              POKEAPI ITEM INDEX
            </p>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Pokemon Items
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-white/70">
              Showing the first {results.length} items. Images are loaded from
              each item&apos;s `sprites.default` field in the PokeAPI item
              detail response.
            </p>
            <p className="mt-3 inline-flex rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/80">
              Total available in API: {count}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {results.map((item) => (
            <Suspense key={item.name} fallback={<ItemCardSkeleton />}>
              <ItemCard name={item.name} />
            </Suspense>
          ))}
        </div>
      </div>
    </main>
  );
}
