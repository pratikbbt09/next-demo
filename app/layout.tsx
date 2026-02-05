import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Geist Mono is variable font so no require to mention weight
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Poppins is not variable font so it require to specify weights too.
// const poppins = Poppins({ 
//   subsets: ["latin"], 
//   weight: ["200","400","600","800"] 
// })

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["200","400","600","800"]
})

export const metadata: Metadata = {
  title: "Demo Next Project",
  description: "Next Project to understand Nextjs structure and new concepts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
        // className={poppins.className}
        // above line used to apply poppins font to whole project
      >
        {/* will be displayed on aboutus, contactus and root page also */}
        <div className="w-full h-[50] bg-gray-300 text-black font-bold flex justify-start items-center gap-[20px] pl-[20px]">
          <Link href={`/`}>Root</Link>
          <Link href={`/login`}>Login</Link>
          <Link href={`/dashboard`}>Dashboard</Link>
          <Link href={`/aboutus`}>About us</Link>
        </div>
        {children}
      </body>
    </html>
  );
}
