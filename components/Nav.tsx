"use client";

import Link from "next/link";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-cream/85 backdrop-blur-xl border-b border-border">
      <div className="max-w-[1100px] mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-xl text-ink no-underline tracking-tight"
        >
          Hollow Lattice
        </Link>

        {/* Desktop nav */}
        <NavigationMenu.Root className="hidden md:block">
          <NavigationMenu.List className="flex items-center gap-1">
            {[
              { href: "/#services", label: "What We Build" },
              { href: "/#contact", label: "Contact" },
              { href: "/privacy", label: "Privacy" },
            ].map((link) => (
              <NavigationMenu.Item key={link.href}>
                <NavigationMenu.Link asChild>
                  <Link
                    href={link.href}
                    className="px-3.5 py-2 text-sm font-medium text-ink-light no-underline rounded-lg transition-colors hover:text-ink hover:bg-cream-dark"
                  >
                    {link.label}
                  </Link>
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            ))}
            <NavigationMenu.Item>
              <NavigationMenu.Link asChild>
                <Link
                  href="/#contact"
                  className="ml-2 px-4 py-2 text-sm font-medium text-white bg-accent rounded-lg no-underline transition-all hover:bg-accent-dark hover:-translate-y-px"
                >
                  Get in Touch
                </Link>
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          </NavigationMenu.List>
        </NavigationMenu.Root>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-ink-light hover:text-ink transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-cream px-6 py-4 flex flex-col gap-1 animate-in fade-in slide-in-from-top-2 duration-200">
          {[
            { href: "/#services", label: "What We Build" },
            { href: "/#contact", label: "Contact" },
            { href: "/privacy", label: "Privacy" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="px-3 py-2.5 text-sm font-medium text-ink-light no-underline rounded-lg transition-colors hover:text-ink hover:bg-cream-dark"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-1 px-4 py-2.5 text-sm font-medium text-white bg-accent rounded-lg no-underline text-center transition-all hover:bg-accent-dark"
          >
            Get in Touch
          </Link>
        </div>
      )}
    </header>
  );
}
