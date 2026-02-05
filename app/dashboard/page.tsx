import Button from '@/components/Button';
import Image from 'next/image';
import React from 'react'

interface Post{
    id: number,
    slug: string,
    url: string,
    title: string,
    content: string,
    image: string,
    thumbnail: string,
    status: string,
    category: string,
    publishedAt: string,
    updatedAt: string,
    userId: number
}

const Dashboard = async () => {
    // nextjs by default caches fetched data, to stop caching provide cache: 'no-store'
    // it will fetches fresh data for every requests. Given changes make this component as dynamic component.
    const res = await fetch('https://jsonplaceholder.org/posts', {cache: 'no-store'});

    if(!res.ok){
        throw new Error("Failed to fetch posts.");
    }

    const posts: Post[] = await res.json();

  return (
    <div>
        {/* we imported poppins in layout.tsx and  declared in global.css to use as tailwind class*/}
        <h1 className='font-poppins font-bold text-4xl text-red-700'>Posts</h1>
        <Posts posts={posts.slice(0,10)} />
    </div>
  )
}

const Posts = ({posts} : { posts: Post[] }) => {
    return(
        <>
            <div className='max-h-[600px] flex flex-col gap-2 overflow-y-scroll'>
                {posts.map((p, i) => (
                    <div key={i} className='h-full w-[500px] flex gap-2 border-2 rounded-3xl p-4'>
                        {/* For URL image, need to configure in next.config.ts */}
                        <Image
                            src={p.thumbnail}
                            width={100}
                            height={100}
                            alt='Thumbnail'
                        />
                        <div>
                            <p>ID: {p.id}</p>
                            <p>Title: {p.title}</p>
                            <p>PublishedAt: {p.publishedAt}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='m-4'>
                <Button />
            </div>
        </>
    )
}

export default Dashboard;