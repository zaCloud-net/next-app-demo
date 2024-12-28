'use client';

import { Home, Info } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function Navigation() {
  const pathname = usePathname();
  
  const links = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/about', label: 'About', icon: Info },
  ];

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex space-x-8">
            {links.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  'inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors duration-200',
                  pathname === href
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-muted-foreground hover:text-primary'
                )}
              >
                <Icon className="w-4 h-4 mr-2" />
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}