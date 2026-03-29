import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Hollow Lattice LLC. All rights
          reserved.
        </p>
        <ul className="footer-links">
          <li>
            <Link href="/privacy">Privacy Policy</Link>
          </li>
          <li>
            <Link href="/#contact">Contact</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
