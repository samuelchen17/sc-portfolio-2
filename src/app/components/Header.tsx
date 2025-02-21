"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    name: "home",
    href: "/",
  },
  {
    name: "about",
    href: "/about",
  },
  {
    name: "contact",
    href: "/contact",
  },
];

const Header = () => {
  const path = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-background/75 py-6 backdrop-blur-sm">
      <nav className="flex items-center justify-between">
        <ul className="flex gap-4 sm:gap-8">
          {navLinks.map((nav, id) => (
            <li key={id} className="">
              <Link
                href={nav.href}
                className={
                  path === `${nav.href}` ? "text-red-500" : "text-blue-500"
                }
              >
                {nav.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
