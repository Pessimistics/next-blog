import React from 'react'
import Image from 'next/image'
type StaticImageData = {
  src: string
  height: number
  width: number
  blurDataURL?: string
};
export default function ImageBg({ src, content }: { src: StaticImageData, content: string }) {
  return (
    <div>
      <div className='h-screen relative'>
        <div className='absolute inset-0 -z-10'>
          <Image src={src} fill style={{ objectFit: 'cover' }} alt='' />
          <div className='absolute inset-0 bg-gradient-to-r '></div>
        </div>
        <div className='flex justify-center pt-48'>
          <h1 className='text-white text-6xl'>{content}</h1>
        </div>
      </div>
    </div>
  )
}
