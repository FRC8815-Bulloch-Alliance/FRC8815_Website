// pages/components/navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="flex items-center center-text py-2 space-x-4 z-50 border-b border-neutral-400">
      <div className="text-2xl font-bold">
        <a href="/">Bulloch Alliance</a>
      </div>
      <div className="space-x-4">
        <Link href="/">
          <a
            className="hover:underline underline-offset-8">Home</a>
        </Link>
        <Link href="/about">
          <a className="hover:underline underline-offset-8">About</a>
        </Link>
        <Link href="/mentors">
          <a className="hover:underline underline-offset-8">Mentors</a>
        </Link>
        <a className="hover:underline underline-offset-8">Sponsors</a>
        <a className="hover:underline underline-offset-8">Resources</a>
      </div>
    </div>
  )
}
