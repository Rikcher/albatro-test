'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';

interface GoBackButtonProps {
  page: 'default' | 'async';
}

const GoBackButton: React.FC<GoBackButtonProps> = ({ page }) => {
  const router = useRouter();
  const pathname = usePathname();

  const onClick = () => {
    router.push(`/${page}`);
  };

  if (!pathname.startsWith(`/${page}/`)) {
    return null;
  }

  return (
    <Button variant="link" className="cursor-pointer" onClick={onClick}>
      <ArrowLeft />
      Go back
    </Button>
  );
};

export default GoBackButton;
