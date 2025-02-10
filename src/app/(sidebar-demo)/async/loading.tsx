import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const Loading = () => {
  return (
    <div>
      <Skeleton className="h-10 w-60 mb-4" />
      <div className="space-y-6">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="space-y-2">
            <Skeleton className="h-6 w-[80%]" />
            <Skeleton className="h-6 w-[60%]" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-[20%]" />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Loading;
