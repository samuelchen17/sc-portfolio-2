"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const path = usePathname();
  return (
    <nav>
      <Link href="/" className={path === "/" ? "font-bold" : "text-blue-500"}>
        Home
      </Link>
      <Link href="/about">About</Link>
    </nav>
  );
};

export default Navigation;
