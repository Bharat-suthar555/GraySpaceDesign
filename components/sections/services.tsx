'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { services } from '@/lib/data';
import { ArrowIcon } from '@/components/ui/icons';

export function Services() {
  return (
    <section
      id='services'
      className='relative border-b border-line bg-panel/40 py-20 sm:py-24'
    >
      <div className='absolute inset-0 blueprint-grid opacity-30' />
      <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className='max-w-xl'
        >
          <p className='font-mono text-[12px] uppercase tracking-[0.18em] text-blueprint'>
            Services
          </p>
          <h2 className='mt-2 font-display text-3xl font-semibold leading-tight text-studio sm:text-5xl'>
            End-to-end design and build solutions.
          </h2>
        </motion.div>

        <div className='mt-12 grid gap-3 md:grid-cols-2 xl:grid-cols-4'>
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ y: 32, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -8 }}
              className='group relative min-h-[430px] overflow-hidden border border-line bg-ink'
            >
              <Image
                src={service.image}
                alt={`${service.title} visual by Gray Space Design`}
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw'
                className='object-cover opacity-0 transition-all duration-700 ease-premium group-hover:opacity-100 group-hover:scale-105'
              />
              <Image
                src='/images/blueprint-texture.png'
                alt=''
                fill
                sizes='(max-width: 768px) 100vw, 25vw'
                className='object-cover opacity-[0.64] transition-opacity duration-700 group-hover:opacity-0'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-ink via-ink/58 to-transparent' />
              <div className='relative z-10 flex h-full min-h-[430px] flex-col justify-end p-5'>
                <p className='font-display text-2xl font-semibold text-blueprint'>
                  {service.index}
                </p>
                <h3 className='mt-3 font-display text-2xl font-medium text-studio'>
                  {service.title}
                </h3>
                <p className='mt-3 text-sm leading-7 text-studio/70'>
                  {service.body}
                </p>
                <p className='mt-5 border-l border-blueprint pl-3 font-mono text-[11px] uppercase leading-5 tracking-[0.14em] text-studio/64'>
                  {service.technical}
                </p>
                <div className='mt-8 flex justify-end text-studio/78 transition-colors group-hover:text-blueprint'>
                  <ArrowIcon />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
