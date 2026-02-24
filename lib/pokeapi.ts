const BASE_URL = 'https://pokeapi.co/api/v2';

export interface PokemonType {
  slot: number;
  type: { name: string; url: string };
}

export interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: { name: string; url: string };
}

export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: PokemonType[];
  stats: PokemonStat[];
  sprites: {
    other: {
      'official-artwork': { front_default: string };
    };
  };
}

export interface PokemonListItem {
  name: string;
  url: string;
}

export interface PokemonItem {
  id: number;
  name: string;
  cost: number;
  category: { name: string; url: string };
  sprites: {
    default: string | null;
  };
}

export async function getPokemon(name: string): Promise<Pokemon> {
  const res = await fetch(`${BASE_URL}/pokemon/${name}`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error(`Pokemon "${name}" not found`);
  return res.json() as Promise<Pokemon>;
}

export async function getPokemonDescription(name: string): Promise<string> {
  const res = await fetch(`${BASE_URL}/pokemon-species/${name}`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) return '';
  const data = (await res.json()) as {
    flavor_text_entries: Array<{
      flavor_text: string;
      language: { name: string };
    }>;
  };
  const entry = data.flavor_text_entries.find((e) => e.language.name === 'en');
  return entry?.flavor_text.replace(/[\f\n]/g, ' ') ?? '';
}

export async function getPokemonNameById(id: number): Promise<string> {
  const res = await fetch(`${BASE_URL}/pokemon/${id}`);
  if (!res.ok) throw new Error(`Pokemon #${id} not found`);
  const data = (await res.json()) as { name: string };
  return data.name;
}

export async function getPokemonList(
  limit = 20,
  offset = 0
): Promise<{ count: number; results: PokemonListItem[] }> {
  const res = await fetch(
    `${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`,
    { next: { revalidate: 3600 } }
  );
  if (!res.ok) throw new Error('Failed to fetch pokemon list');
  return res.json() as Promise<{ count: number; results: PokemonListItem[] }>;
}

export async function getItem(name: string): Promise<PokemonItem> {
  const res = await fetch(`${BASE_URL}/item/${name}`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error(`Item "${name}" not found`);
  return res.json() as Promise<PokemonItem>;
}

export async function getItemList(
  limit = 40,
  offset = 0
): Promise<{ count: number; results: PokemonListItem[] }> {
  const res = await fetch(
    `${BASE_URL}/item?limit=${limit}&offset=${offset}`,
    { next: { revalidate: 3600 } }
  );
  if (!res.ok) throw new Error('Failed to fetch item list');
  return res.json() as Promise<{ count: number; results: PokemonListItem[] }>;
}
