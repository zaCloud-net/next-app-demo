import { LucideIcon } from 'lucide-react';

interface HeroHighlightProps {
  icon: LucideIcon;
  text: string;
}

export function HeroHighlight({ icon: Icon, text }: HeroHighlightProps) {
  return (
    <div className="flex items-center justify-center gap-x-3 rounded-xl bg-white/50 px-6 py-4 shadow-sm ring-1 ring-gray-900/10">
      <Icon className="h-6 w-6 text-primary" />
      <span className="text-sm font-medium text-gray-900">{text}</span>
    </div>
  );
}