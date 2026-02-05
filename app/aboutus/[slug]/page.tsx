import React from 'react'

export default async function Page({
    params,
  }: {
    params: Promise<{ slug: string }>
  }) {

    const {slug} = await params

    return (
        <>
            <div>Slug in route</div>
            <div>{slug ?? "Nothing as slug"}</div>
        </>
    )
  }