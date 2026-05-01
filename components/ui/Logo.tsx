import { cn } from '@/lib/utils';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}

export function Logo({ variant = 'light', className }: LogoProps) {
  const isLight = variant === 'light';
  const textColor = isLight ? '#FFFFFF' : '#1A1A1A';
  const lineColor = isLight ? '#C4B5FD' : '#4C1D95';

  return (
    <a
      href='#home'
      className={cn('group inline-flex items-center', className)}
      aria-label='Mavelle Fashion — home'>
      <svg
        viewBox='0 0 360 110'
        className={cn(
          'block h-12 shrink-0 transition-opacity duration-200 group-hover:opacity-90',
          isLight ? 'text-white' : 'text-[#1A1A1A]',
        )}
        role='img'
        aria-hidden='true'>
        <text
          x='180'
          y='55'
          textAnchor='middle'
          fill={textColor}
          fontFamily='var(--font-playfair), Georgia, serif'
          fontSize='46'>
          Mavelle
        </text>
        <line
          x1='135'
          y1='72'
          x2='225'
          y2='72'
          stroke={lineColor}
          strokeWidth='1.4'
        />
        <text
          x='180'
          y='91'
          textAnchor='middle'
          fill={textColor}
          fontFamily='var(--font-inter), Arial, sans-serif'
          fontSize='10'
          style={{ letterSpacing: '0.38em' }}>
          FASHION
        </text>
      </svg>
      <span className='sr-only'>Mavelle Fashion</span>
    </a>
  );
}
