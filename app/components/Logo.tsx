import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  variant?: 'default' | 'white';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function Logo({ variant = 'default', size = 'md', className = '' }: LogoProps) {
  const sizes = {
    sm: { height: 32, width: 140 },
    md: { height: 44, width: 190 },
    lg: { height: 56, width: 240 },
  };

  const s = sizes[size];

  return (
    <Link href="/" className={`block group ${className}`}>
      <Image
        src="/logo-arianne.png"
        alt="Arianne Lindhout Bedrijfsgeneeskunde"
        width={s.width}
        height={s.height}
        className="transition-transform duration-300 group-hover:scale-105"
        priority
      />
    </Link>
  );
}
