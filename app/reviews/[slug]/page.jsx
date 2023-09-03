import React from 'react'
import Link from 'next/link'
import { getReview, getSlugs } from "@/lib/reviews"
import Heading from '@/components/Heading'
import ShareLinkButton from '@/components/ShareLinkButton'


export async function generateStaticParams() {
  const slugs = await getSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata ({ params: { slug } }) {
const review = await getReview(slug)
return {
  title: review.title
}
}

//stardew-valley
const Reviewpage = async ({ params: { slug } }) => {
  const review = await getReview(slug)
  const { title, date, image, body } = review
  return (
    <div>
      <Link href="/reviews" >back</Link>
      <Heading>{title}</Heading>
      <div className=' flex my-2 items-centre gap-3'>
      <p className=' italic pb-2'>{date}</p>
      <ShareLinkButton />
      </div>
      <img
        src={image}
        alt={title}
        width="640"
        height="360"
        className=' mb-2 rounded-md'
      />
      <article className=' max-w-screen-sm prose prose-slate font-sans' dangerouslySetInnerHTML={{ __html: body }} />
    </div>
  )
}

export default Reviewpage