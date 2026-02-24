import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-center gap-8 px-6 py-6 text-sm text-slate-300">
        <Link href="/" className="transition hover:text-white">
          Home
        </Link>
        <Link href="/pokemons" className="transition hover:text-white">
          Pokedex
        </Link>
        <Link href="/items" className="transition hover:text-white">
          Items
        </Link>
          
        
      </nav>

      <main className="mx-auto flex min-h-[calc(100vh-72px)] w-full max-w-6xl items-center justify-center px-6 py-10">
        <section className="grid w-full items-center gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm md:grid-cols-[1fr_auto_1fr] md:p-10">
          <div className="flex justify-center md:justify-end">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
              alt="Pikachu"
              className="h-40 w-40 object-contain drop-shadow-[0_10px_25px_rgba(250,204,21,0.25)] sm:h-52 sm:w-52"
            />
          </div>

          <div className="flex flex-col items-center text-center">
            <p className="mb-2 text-xs uppercase tracking-[0.25em] text-slate-400">
              Welcome
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
              Pokedex
            </h1>
            <p
              id="about"
              className="mt-3 max-w-xs text-sm leading-6 text-slate-300"
            >
              Explore Pokemon cards and details in a clean, modern interface.
            </p>
          </div>

          <div className="flex justify-center md:justify-start">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/778.png"
              alt="Mimikyu"
              className="h-40 w-40 object-contain drop-shadow-[0_10px_25px_rgba(148,163,184,0.22)] sm:h-52 sm:w-52"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
