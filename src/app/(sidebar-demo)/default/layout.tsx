import React from 'react';
import { LayoutPanelLeft } from 'lucide-react';
import Link from 'next/link';
import GoBackButton from '@/components/ui/GoBackButton';

interface SidebarLayoutProps {
  children: React.ReactNode;
}

const SidebarLayoutDefault: React.FC<SidebarLayoutProps> = ({ children }) => {
  return (
    <div className="mx-6 flex flex-col md:flex-row gap-4">
      <aside className="px-4 py-6 bg-secondary shadow-md rounded-md md:w-[20rem] md:max-h-[15rem]">
        <div className="flex items-center gap-2 pb-2 border-b border-foreground/20 mb-4">
          <LayoutPanelLeft className="w-6 h-6 text-primary" />
          <h3 className="text-xl font-semibold">Sidebar for default</h3>
        </div>
        <nav className="flex flex-col ml-3 gap-2 [&>*]:hover:underline ">
          <Link href="/default/page-one">Default Page One</Link>
          <Link href="/default/page-two">Default Page Two</Link>
          <Link href="/default/page-three">Default Page Three</Link>
        </nav>
      </aside>
      <div className="flex-1">
        <GoBackButton page="default" />
        {children}
      </div>
    </div>
  );
};
export default SidebarLayoutDefault;
