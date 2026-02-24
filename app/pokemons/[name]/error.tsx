'use client';

import { useEffect } from 'react';
import Link from 'next/link';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4 px-4 text-center">
      <div className="text-6xl mb-2">?</div>
      <h2 className="text-2xl font-bold">Pokémon not found</h2>
      <p className="text-gray-400 text-sm max-w-xs">{error.message}</p>
      <div className="flex gap-3 mt-2">
        <button
          onClick={reset}
          className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-sm font-medium transition-colors"
        >
          Try again
        </button>
        <Link
          href="/pokemons"
          className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-sm font-medium transition-colors"
        >
          Back to Pokédex
        </Link>
      </div>
    </main>
  );
}
