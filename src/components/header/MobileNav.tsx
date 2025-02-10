import React from 'react';

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { NAV_LINKS } from '@/constants/nav-links';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

const MobileNav = () => {
  return (
    <div className="flex md:hidden ml-auto mr-6">
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="md:hidden">
          <Button variant="ghost" size="icon" className="cursor-pointer">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-screen mt-2">
          <ul className="px-2 py-4 bg-background">
            {NAV_LINKS.map((link) => (
              <li key={`${link.id}-mobile-nav-link`}>
                <DropdownMenuItem asChild className="w-full p-2 mb-2">
                  <Link href={link.path} className="text-lg font-medium">
                    {link.label}
                  </Link>
                </DropdownMenuItem>
              </li>
            ))}
          </ul>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
export default MobileNav;
