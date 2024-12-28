'use client';

import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroContent() {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
        Transform your digital presence with{' '}
        <span className="text-primary">modern solutions</span>
      </h1>
      
      <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl">
        Leverage the power of cutting-edge technology to build scalable, performant, 
        and beautiful web applications that drive business growth.
      </p>

      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Button size="lg" className="px-8">
          Get started
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <Button variant="outline" size="lg">
          Learn more
        </Button>
      </div>
    </div>
  );
}