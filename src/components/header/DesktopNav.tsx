import React from "react";

import Link from "next/link";

import { NAV_LINKS } from "@/constants/nav-links";

const DesktopNav = () => {
return (
    <ul className="hidden md:flex items-center space-x-6 text-sm font-medium">
      {NAV_LINKS.map((link) => (
        <li key={`${link.id}-nav-link`} className="relative group">
          <Link
            href={link.path}
            className="transition-colors hover:text-primary"
          >
            {link.label}
          </Link>
          <div className="absolute h-0.5 w-0 group-hover:w-full transition-all duration-300 ease-in-out bg-primary" />
        </li>
      ))}
    </ul>
  );
};
export default DesktopNav;
