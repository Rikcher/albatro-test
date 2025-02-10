import React from 'react';

import Link from 'next/link';
import { Icons } from '@/components/ui/icons';
import Sections from '@/components/footer/sections';

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex w-full flex-col items-start justify-between gap-10 md:gap-4 py-10 md:h-[15rem] md:flex-row md:pb-2 md:pt-4 px-4 md:px-6">
        <Link
          href="/"
          className="mr-6 flex items-center font-bold text-nowrap text-xl"
        >
          Albatro Test
        </Link>
        <Sections />
        <div className="mt-auto flex justify-between w-full md:w-auto md:flex-col items-end">
          <div className="flex items-center gap-4 mb-2">
            <a href="/" target="_blank" rel="noreferrer">
              <Icons.facebook className="w-7 h-7 invert-0 dark:invert" />
            </a>
            <a href="/" target="_blank" rel="noreferrer">
              <Icons.twitter className="w-7 h-7 invert-0 dark:invert" />
            </a>
            <a href="/" target="_blank" rel="noreferrer">
              <Icons.instagram className="w-7 h-7 invert-0 dark:invert" />
            </a>
            <a href="/" target="_blank" rel="noreferrer">
              <Icons.whatsapp className="w-7 h-7 invert-0 dark:invert" />
            </a>
          </div>
          <p className="text-sm text-muted-foreground text-end">
            © 2024 Albatro Test. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
