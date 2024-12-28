import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from './components/Navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Modern Next.js App',
  description: 'A beautiful Next.js application with TypeScript and Tailwind CSS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-background`} suppressHydrationWarning>
        <div className="relative flex min-h-screen flex-col">
          <Navigation />
          <main className="flex-1 bg-gray-50">{children}</main>
        </div>
      </body>
    </html>
  );
}