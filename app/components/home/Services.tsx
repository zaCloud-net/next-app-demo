import { Code2, Smartphone, Palette, Gauge } from 'lucide-react';

const services = [
  {
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies.',
    icon: Code2,
  },
  {
    title: 'Mobile Solutions',
    description: 'Cross-platform mobile applications that work seamlessly.',
    icon: Smartphone,
  },
  {
    title: 'UI/UX Design',
    description: 'Beautiful and intuitive user interfaces that engage users.',
    icon: Palette,
  },
  {
    title: 'Performance',
    description: 'Optimized applications that load quickly and run smoothly.',
    icon: Gauge,
  },
];

export default function Services() {
  return (
    <div className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Our Services</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to build amazing products
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {services.map((service) => (
              <div key={service.title} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <service.icon className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
                  {service.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{service.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}