import { CheckCircle } from 'lucide-react';

const features = [
  'Next.js 13 with App Router',
  'TypeScript for type safety',
  'Tailwind CSS for styling',
  'Responsive design',
  'SEO optimized',
  'Performance focused',
  'Accessibility first',
  'Modern UI components',
];

export default function Features() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Features</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Built with modern technologies
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our stack is carefully chosen to provide the best development experience and end-user performance.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature}
                className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 hover:border-gray-400"
              >
                <div className="flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="absolute inset-0" aria-hidden="true" />
                  <p className="text-sm font-medium text-gray-900">{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}