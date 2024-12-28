import { Sparkles, Rocket, Shield } from 'lucide-react';
import { HeroContent } from './HeroContent';
import { HeroHighlight } from './HeroHighlight';

const highlights = [
  {
    icon: Sparkles,
    text: 'Modern Technology Stack',
  },
  {
    icon: Rocket,
    text: 'Lightning Fast Performance',
  },
  {
    icon: Shield,
    text: 'Enterprise-Grade Security',
  },
];

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-secondary opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-24 pt-16 sm:pb-32 lg:px-8 lg:pt-32">
        <HeroContent />

        {/* Highlights */}
        <div className="mx-auto max-w-4xl">
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {highlights.map((highlight, index) => (
              <HeroHighlight
                key={index}
                icon={highlight.icon}
                text={highlight.text}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl">
        <div className="relative left-[calc(50%+11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-secondary opacity-20 sm:left-[calc(50%+15rem)] sm:w-[72.1875rem]" />
      </div>
    </div>
  );
}