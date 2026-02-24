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

export default function Loading() {
  return (
    <main className="min-h-screen px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <div className="w-40 h-10 rounded bg-white/10 mx-auto mb-2 animate-pulse" />
        <div className="w-24 h-4 rounded bg-white/10 mx-auto mb-10 animate-pulse" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {Array.from({ length: 20 }).map((_, i) => (
            <CardSkeleton key={i} />
          ))}
        </div>
      </div>
    </main>
  );
}
