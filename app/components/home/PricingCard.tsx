import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PricingCardProps {
  name: string;
  price: number;
  features: string[];
  isPopular?: boolean;
}

export function PricingCard({ name, price, features, isPopular = false }: PricingCardProps) {
  return (
    <div className={`flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10 ${
      isPopular ? 'ring-2 ring-primary shadow-lg scale-105' : ''
    }`}>
      <div>
        {isPopular && (
          <div className="mb-4">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">
              Most Popular
            </span>
          </div>
        )}
        <h3 className="text-lg font-semibold leading-8 text-gray-900">{name}</h3>
        <p className="mt-4 flex items-baseline">
          <span className="text-4xl font-bold tracking-tight text-gray-900">${price}</span>
          <span className="text-sm font-semibold leading-6 text-gray-600">/month</span>
        </p>
        <ul className="mt-8 space-y-3">
          {features.map((feature) => (
            <li key={feature} className="flex gap-x-3">
              <Check className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
              <span className="text-sm leading-6 text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <Button 
        className="mt-8" 
        variant={isPopular ? 'default' : 'outline'}
      >
        Get started
      </Button>
    </div>
  );
}