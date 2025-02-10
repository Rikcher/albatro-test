'use client';

import React from 'react';

import Link from 'next/link';

import ThemeToggle from '@/components/ui/ThemeToggle';
import DesktopNav from '@/components/header/DesktopNav';
import MobileNav from '@/components/header/MobileNav';
import ProfileControls from '@/components/header/ProfileControls';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 w-full items-center px-4 md:px-6">
        <div className="flex items-center flex-1">
          <Link
            href="/"
            className="mr-6 flex items-center font-bold text-nowrap text-xl"
          >
            Albatro Test
          </Link>
          <nav className="flex w-full">
            <DesktopNav />
            <MobileNav />
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <ProfileControls />
        </div>
      </div>
    </header>
  );
};

export default Header;
