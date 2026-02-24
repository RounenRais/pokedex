interface StatBarProps {
  name: string;
  value: number;
  max?: number;
}

const STAT_LABELS: Record<string, string> = {
  hp: 'HP',
  attack: 'ATK',
  defense: 'DEF',
  'special-attack': 'Sp.ATK',
  'special-defense': 'Sp.DEF',
  speed: 'SPD',
};

const STAT_COLORS: Record<string, string> = {
  hp: '#4ade80',
  attack: '#f87171',
  defense: '#60a5fa',
  'special-attack': '#c084fc',
  'special-defense': '#34d399',
  speed: '#fbbf24',
};

export default function StatBar({ name, value, max = 255 }: StatBarProps) {
  const percentage = Math.min((value / max) * 100, 100);
  const label = STAT_LABELS[name] ?? name;
  const color = STAT_COLORS[name] ?? '#94a3b8';

  return (
    <div className="flex items-center gap-3">
      <span className="w-16 text-right text-xs font-semibold text-gray-400 uppercase shrink-0">
        {label}
      </span>
      <span className="w-8 text-right text-sm font-bold shrink-0">{value}</span>
      <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-700 ease-out"
          style={{ width: `${percentage}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
}
