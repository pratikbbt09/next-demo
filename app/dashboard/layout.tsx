import type { Metadata } from "next";
import Link from "next/link";
import React from 'react'

export const metadata: Metadata = {
    title: "Dashboard",
    description: "Main Dashboard of the website",
};

export default function DashboardLayout ({
    children
}: {
    children: React.ReactNode
}) {
  return (
    <div className="border-2 m-2 p-4 rounded-lg ">
        <div>
            <Link href={'/dashboard/profile'}>Profile </Link>
            <Link href={'/dashboard/settings'}>Settings</Link>
        </div>
        <div>
            {children}
        </div>
    </div>
  )
}
