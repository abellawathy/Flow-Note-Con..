import Link from 'next/link'

export default function Navbar() {
  return (
    <nav>
      <h1>FlowNote</h1>
      <div>
        <Link href="/">Home</Link>
        <Link href="/team">Team</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  )
}