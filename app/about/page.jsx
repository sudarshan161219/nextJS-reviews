import React from 'react'
import Heading from '@/components/Heading'


//about page

export const metadata = {
    title: 'About',
  }

const page = () => {
    return (
        <div>
            <Heading>About us</Heading>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dicta eum eligendi ex. Perferendis cumque, molestiae voluptate maxime, possimus iste illo consectetur assumenda autem culpa deserunt, rerum aliquid consequatur libero!</p>
        </div>
    )
}

export default page