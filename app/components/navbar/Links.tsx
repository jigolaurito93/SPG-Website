"use client";

import Link from "next/link";

interface LinkType {
  title: string;
  path: string;
}

const links: LinkType[] = [
  { title: "Home", path: "/" },
  { title: "Services", path: "/services" },
  { title: "About Us", path: "/about" },
  { title: "Contact", path: "/contact" },
];

const Links = () => {
  return (
    <div className="flex gap-10">
      {links.map((link) => (
        <Link href={link.path} className="font-semibold text-lg tracking-wide">
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default Links;
