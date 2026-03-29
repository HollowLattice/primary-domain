import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <div className="nav-inner">
        <Link href="/" className="logo">
          Hollow Lattice
        </Link>
        <ul className="nav-links">
          <li>
            <Link href="/#services">What We Build</Link>
          </li>
          <li>
            <Link href="/#contact">Contact</Link>
          </li>
          <li>
            <Link href="/privacy">Privacy</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
