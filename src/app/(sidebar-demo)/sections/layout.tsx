import React from 'react';
import { LayoutPanelLeft } from 'lucide-react';
import Link from 'next/link';

interface SidebarLayoutProps {
  children: React.ReactNode;
}

const SidebarLayoutSection: React.FC<SidebarLayoutProps> = ({ children }) => {
  return (
    <div className="mx-6 flex flex-col md:flex-row gap-4 md:relative">
      <aside className="px-4 py-6 bg-secondary shadow-md rounded-md md:w-[20rem] md:max-h-[15rem] md:sticky md:top-21">
        <div className="flex items-center gap-2 pb-2 border-b border-foreground/20 mb-4">
          <LayoutPanelLeft className="w-6 h-6 text-primary" />
          <h3 className="text-xl font-semibold">Sidebar for sections</h3>
        </div>
        <nav className="flex flex-col ml-3 gap-2 [&>*]:hover:underline ">
          <Link href="#section-1">Section 1</Link>
          <Link href="#section-2">Section 2</Link>
          <Link href="#section-3">Section 3</Link>
        </nav>
      </aside>
      <div className="flex-1">{children}</div>
    </div>
  );
};
export default SidebarLayoutSection;
