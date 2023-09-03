import React from 'react'
import Heading from '@/components/Heading'
import Link from 'next/link'
import { getFeaturedReview } from "@/lib/reviews"



const Page = async () => {

  const featuredReview = await getFeaturedReview()

  const { image, title, slug } = featuredReview

  return (
    <div>
      <Heading>Indie Games</Heading>
      <p className='pb-3'>Only the best indie games, reviewed for you.</p>

      <div className=' bg-white border rounded-md overflow-hidden shadow-md  hover:shadow-xl w-80 sm:w-full'>
        <Link className=' flex flex-col sm:flex-row' href={`/reviews/${slug}`}>
          <img
            src={image}
            alt="Hollow Knight"
            width="320"
            height="180"
            className='rounded-t sm:rounded-l sm:rounded-r'
          />
          <h2 className=' py-1 text-center font-orbitron font-semibold'>
            {title}
          </h2>
        </Link>
      </div>

    </div>
  )
}

export default Page