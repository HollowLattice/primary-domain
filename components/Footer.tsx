"use client";

import Link from "next/link";
import * as Separator from "@radix-ui/react-separator";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-cream-dark/40">
      <Separator.Root className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="max-w-[1100px] mx-auto px-6 py-10 flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <span className="font-display text-base text-ink">Hollow Lattice</span>
          <span className="text-border">|</span>
          <p className="text-xs text-ink-faint">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-6">
          {[
            { href: "/privacy", label: "Privacy Policy" },
            { href: "/#contact", label: "Contact" },
          ].map((link) => (
            <motion.div key={link.href} whileHover={{ y: -1 }} transition={{ duration: 0.15 }}>
              <Link
                href={link.href}
                className="text-xs font-medium text-ink-faint no-underline transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </footer>
  );
}
