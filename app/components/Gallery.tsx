"use client"

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const images = [
  '/assets/gallery1.jpg',
  '/assets/gallery2.jpg',
  '/assets/gallery3.jpg',
  '/assets/gallery4.jpg',
  '/assets/gallery5.jpg',
  '/assets/gallery6.jpg'
]

export const Gallery = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    gsap.fromTo(
      sectionRef.current,
      {
        opacity: 0,
        scale: 0.96,
        filter: 'blur(6px)'
      },
      {
        opacity: 1,
        scale: 1,
        filter: 'blur(0px)',
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  }, [])

  return (
    <div
      ref={sectionRef}
      className='min-h-screen bg-gradient-to-b from-[#0f172a] via-[#020617] to-black py-16'
    >
      <div className='flex justify-center mb-10'>
        <span className='text-xl md:text-3xl text-center font-bold bg-[#EC4899] px-8 py-3 rounded-full tracking-wide text-white transition-all duration-300 hover:scale-95 hover:shadow-lg hover:shadow-[#EC4899]/30'>
          Cowork Gallery
        </span>
      </div>

      <div className='max-w-7xl mx-auto px-6'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
          {images.map((img, index) => (
            <div
              key={index}
              className='group relative overflow-hidden rounded-3xl shadow-2xl bg-[#0f172a] transform-gpu transition-all duration-700 hover:rotate-[1.5deg] hover:scale-[1.02]'
            >
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className='w-full h-80 object-cover transition-all duration-700 group-hover:scale-110 group-hover:blur-[1px]'
              />

              <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700'>
                <div className='absolute -inset-1 bg-gradient-to-tr from-pink-500/20 via-purple-500/10 to-cyan-400/20 animate-pulse rounded-3xl'></div>
              </div>

              <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end'>
                <div className='p-6 text-white transform scale-95 group-hover:scale-100 transition duration-500'>
                  <h3 className='text-lg font-semibold'>Workspace {index + 1}</h3>
                  <p className='text-sm text-gray-300'>Modern & creative environment</p>
                </div>
              </div>

              <div className='absolute inset-0 border border-white/10 rounded-3xl pointer-events-none'></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
