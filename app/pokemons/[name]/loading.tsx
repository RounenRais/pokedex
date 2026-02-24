export default function Loading() {
  return (
    <main className="min-h-screen px-4 py-10">
      <div className="max-w-2xl mx-auto animate-pulse">
        <div className="w-32 h-5 rounded bg-white/10 mb-8" />

        <div className="rounded-3xl bg-white/5 border border-white/10 overflow-hidden">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-center gap-6 p-8 border-b border-white/10">
            <div className="w-44 h-44 rounded-full bg-white/10 shrink-0" />
            <div className="flex flex-col gap-3 items-center sm:items-start w-full">
              <div className="w-12 h-3 rounded bg-white/10" />
              <div className="w-48 h-10 rounded bg-white/10" />
              <div className="flex gap-2">
                <div className="w-16 h-6 rounded-full bg-white/10" />
                <div className="w-16 h-6 rounded-full bg-white/10" />
              </div>
              <div className="w-64 h-12 rounded bg-white/10" />
            </div>
          </div>

          {/* Info row */}
          <div className="grid grid-cols-2 divide-x divide-white/10 border-b border-white/10">
            <div className="flex flex-col items-center py-4 gap-1">
              <div className="w-12 h-3 rounded bg-white/10" />
              <div className="w-16 h-6 rounded bg-white/10" />
            </div>
            <div className="flex flex-col items-center py-4 gap-1">
              <div className="w-12 h-3 rounded bg-white/10" />
              <div className="w-16 h-6 rounded bg-white/10" />
            </div>
          </div>

          {/* Stats */}
          <div className="p-8 flex flex-col gap-3">
            <div className="w-20 h-3 rounded bg-white/10 mb-2" />
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-16 h-3 rounded bg-white/10" />
                <div className="w-8 h-4 rounded bg-white/10" />
                <div className="flex-1 h-2 rounded-full bg-white/10" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
