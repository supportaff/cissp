import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const space = Space_Grotesk({ subsets: ['latin'], variable: '--font-space', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://cissp.example.com'),
  title: 'CISSP Prep by Prakash | Focused CISSP Training for $99',
  description:
    'Premium CISSP preparation without the premium price. Learn the CISSP mindset, all 8 domains, and scenario-based exam strategy for $99.',
  keywords: [
    'CISSP training',
    'CISSP preparation',
    'CISSP course',
    'CISSP training $99',
    'affordable CISSP training',
    'CISSP exam preparation',
    'CISSP study program',
    'CISSP certification preparation',
    'CISSP mindset',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'I Cleared CISSP. Now I’ll Help You Prepare for Yours.',
    description: 'Focused CISSP preparation for $99 with an eligible 100% training-fee refund guarantee.',
    type: 'website',
    images: [{ url: '/og.svg', width: 1200, height: 630, alt: 'CISSP Prep by Prakash' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CISSP Prep by Prakash — $99',
    description: 'Focused CISSP preparation without the premium price.',
    images: ['/og.svg'],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${space.variable}`}>
      <body>{children}</body>
    </html>
  );
}
