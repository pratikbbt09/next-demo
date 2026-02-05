import Image from 'next/image';
import ProfileImage from '@/public/next.svg'
import React from 'react'

const Profile = () => {
  return (
    <div className='m-4'>
      {/* <Image
        src={'/next.svg'}
        width={100}
        height={100}
        alt='Next Image'
        quality={100}
      /> */}

    {/* If Image src provided like this, it prevents layout shift */}
    {/* <Image
      src={ProfileImage}
      alt="Picture of the author"
      // width={500} automatically provided
      // height={500} automatically provided
      // blurDataURL="data:..." automatically provided
      // placeholder="blur" // Optional blur-up while loading
    /> */}

    {/* if we provide fill={true} then image will take 100% width height of parent, no need to give width and height */}
    {/* quality property is default 75 for optimization, but we can provide value upto 100 for more good quality of image */}
    
    <Image
      src={ProfileImage}
      width={100}
      height={100}
      alt="Picture of the author"
      quality={100}
      priority={false}
      placeholder="blur" // Optional blur-up while loading
      blurDataURL="data:..." // automatically provided
    />
    </div>
  )
}

export default Profile;