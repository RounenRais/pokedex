import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Redirect /pokemons/{number} → /pokemons/{name}
  const match = pathname.match(/^\/pokemons\/(\d+)$/);
  if (match) {
    const id = parseInt(match[1], 10);
    try {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${id}`,
        { next: { revalidate: 3600 } }
      );
      if (res.ok) {
        const data = (await res.json()) as { name: string };
        return NextResponse.redirect(
          new URL(`/pokemons/${data.name}`, request.url)
        );
      }
    } catch {
      // fall through — let the [name] page handle the error
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/pokemons/:path*',
};
