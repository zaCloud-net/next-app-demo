import { PricingCard } from './PricingCard';

const tiers = [
  {
    name: 'Starter',
    price: 29,
    features: [
      '5 Projects',
      'Basic Analytics',
      'Email Support',
      '1GB Storage',
      'Basic API Access',
      'Community Forums'
    ],
  },
  {
    name: 'Pro',
    price: 99,
    features: [
      'Unlimited Projects',
      'Advanced Analytics',
      'Priority Support',
      '10GB Storage',
      'Advanced API Access',
      'Team Collaboration'
    ],
    isPopular: true,
  },
  {
    name: 'Enterprise',
    price: 299,
    features: [
      'Custom Solutions',
      'Dedicated Support',
      'SLA Guarantee',
      'Unlimited Storage',
      'Custom Integrations',
      'Advanced Security'
    ],
  },
];

export default function Pricing() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Pricing</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Choose the perfect plan for your needs
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Simple, transparent pricing that grows with you. Try any plan free for 30 days.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier) => (
            <PricingCard
              key={tier.name}
              name={tier.name}
              price={tier.price}
              features={tier.features}
              isPopular={tier.isPopular}
            />
          ))}
        </div>
      </div>
    </div>
  );
}