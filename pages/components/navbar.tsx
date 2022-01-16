// pages/components/navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="w-screen flex items-center center-text py-2 space-x-4 z-50">
      <div className="text-2xl font-bold">
        <a href="/">Bulloch Alliance</a>
      </div>
      <div className="space-x-4">
        <Link href="/">
          <a className="">Home</a>
        </Link>
        <Link href="/about">
          <a className="">About</a>
        </Link>
        <Link href="/mentors">
          <a className="">Mentors</a>
        </Link>
        <a>Sponsors</a>
        <a>Resources</a>
      </div>
    </div>
  )
}
