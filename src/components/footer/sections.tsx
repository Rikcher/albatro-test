import Link from 'next/link';
import React from 'react';

import { SECTIONS } from '@/constants/footer-sections';

const Sections = () => {
  return (
    <div className="flex gap-[min(5rem,max(1rem,4vw))] mb-auto">
      {SECTIONS.map((section) => (
        <div
          key={section.id}
          className="flex flex-col text-center md:text-start"
        >
          <p className="text-md font-semibold mb-3">{section.title}</p>
          {section.links.map((link) => (
            <Link
              key={link.id}
              href={link.path}
              className="text-sm text-muted-foreground hover:underline"
            >
              {link.label}
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Sections;
