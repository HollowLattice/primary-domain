import Link from "next/link";
import * as Separator from "@radix-ui/react-separator";

export default function Footer() {
  return (
    <footer>
      <Separator.Root className="h-px bg-border" />
      <div className="max-w-[1100px] mx-auto px-6 py-8 flex items-center justify-between flex-wrap gap-4">
        <p className="text-xs text-ink-faint">
          &copy; {new Date().getFullYear()} Hollow Lattice LLC. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          {[
            { href: "/privacy", label: "Privacy Policy" },
            { href: "/#contact", label: "Contact" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs text-ink-faint no-underline transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
