import React from 'react'
import Link from 'next/link'
import Heading from '@/components/Heading'
import { getReviews } from "@/lib/reviews"
// reviewspage

export const metadata = {
  title: 'reviews',
}

const page = async () => {
  const reviews = await getReviews()

  return (
    <>
      <Heading>Reviews</Heading>

      <ul className='flex flex-row flex-wrap gap-3'>
        {reviews.map((review) => (
          <li className=' bg-white border w-80 rounded-md overflow-hidden shadow-md  hover:shadow-xl'>
            <Link href={`/reviews/${review.slug}`} >
              <img
                src={review.image}
                alt={review.title}
                width="320"
                height="180"
                className='rounded-t'
              />

              <h2 className=' py-1 text-center font-orbitron font-semibold'>
                {review.title}
              </h2>

            </Link>
          </li>
        ))}
      </ul>


    </>
  )
}

export default page