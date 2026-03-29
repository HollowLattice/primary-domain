"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useCallback, type ReactNode, type MouseEvent } from "react";

interface AnimatedLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function AnimatedLink({ href, children, className, onClick }: AnimatedLinkProps) {
  const handleClick = useCallback(
    (e: MouseEvent<HTMLAnchorElement>) => {
      onClick?.();

      // For hash links on the same page, let default behavior handle it
      if (href.startsWith("#") || href.startsWith("/#")) return;

      e.preventDefault();

      // Small delay for the ripple/scale animation to play
      setTimeout(() => {
        window.location.href = href;
      }, 150);
    },
    [href, onClick]
  );

  return (
    <motion.div
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.1 }}
      className="inline-block"
    >
      <Link href={href} onClick={handleClick} className={className}>
        {children}
      </Link>
    </motion.div>
  );
}
