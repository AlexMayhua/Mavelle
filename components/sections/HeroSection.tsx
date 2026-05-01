'use client';

import { motion } from 'motion/react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export function HeroSection() {
  return (
    <section
      id='home'
      className='relative min-h-screen bg-[#08070A] pt-16 overflow-hidden'
      aria-label='Hero'>
      <div
        className='pointer-events-none absolute inset-0 opacity-20'
        aria-hidden='true'
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 70% 40%, #4C1D95 0%, transparent 70%)',
        }}
      />

      <Container>
        <div className='flex min-h-[calc(100vh-4rem)] flex-col items-start justify-center py-20 md:flex-row md:items-center md:gap-16 lg:gap-24'>
          <div className='flex-1 max-w-xl'>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: 'easeOut' as const,
                delay: 0,
              }}>
              <span className='inline-block rounded-full border border-[#7C3AED]/40 bg-[#7C3AED]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-[#C4B5FD]'>
                Formal wear boutique in Lima, Peru
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: 'easeOut' as const,
                delay: 0.15,
              }}
              className='mt-6 text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl xl:text-8xl'
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
              Mavelle
              <br />
              <span className='text-[#C4B5FD]'>Fashion</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: 'easeOut' as const,
                delay: 0.3,
              }}
              className='mt-4 text-lg font-light tracking-wide text-[#A1A1AA] md:text-xl'>
              Formal elegance for every occasion.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: 'easeOut' as const,
                delay: 0.45,
              }}
              className='mt-5 max-w-lg text-base leading-relaxed text-[#A1A1AA]'>
              Discover elegant formal wear for men and women, including blazers,
              dress pants, formal shoes, ties, shirts, and accessories designed
              for confidence, presence, and professional style.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: 'easeOut' as const,
                delay: 0.6,
              }}
              className='mt-8 flex flex-wrap gap-3'>
              <Button variant='primary' href='#products'>
                Explore Collection
              </Button>
              <Button variant='secondary' href='#location'>
                Visit Our Store
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut' as const, delay: 0.3 }}
            className='mt-12 flex-1 md:mt-0'>
            <div className='relative mx-auto max-w-sm md:max-w-full'>
              {/* Decorative images placed to the right */}
              <div className='pointer-events-none absolute -right-8 top-0 hidden md:block'>
                <img
                  src='/mavelle-mujer.webp'
                  alt='Woman wearing formal outfit'
                  className='h-120 max-w-none translate-x-8 object-cover'
                />
              </div>
              <div className='pointer-events-none  -right-40 top-24 hidden lg:block'>
                <img
                  src='/mavelle-hombre.webp'
                  alt='Man wearing formal coat'
                  className='h-130 max-w-none translate-x-12 opacity-95 object-cover'
                />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
