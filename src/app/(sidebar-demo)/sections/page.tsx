import React from 'react';
import PlaceholderText from '@/components/ui/PlaceholderText';
import { Skeleton } from '@/components/ui/skeleton';

const SectionsPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Sections Page</h1>
      <div className="space-y-3">
        {[...Array(3)].map((_, index) => (
          <div
            key={`section-${index + 1}`}
            id={`section-${index + 1}`}
            style={{ scrollMarginTop: '5rem' }}
          >
            <h3 className="text-xl font-semibold border-b pb-1 mb-2 text-primary/70">
              {`Section ${index + 1}`}
            </h3>
            <PlaceholderText />
          </div>
        ))}
      </div>
    </div>
  );
};
export default SectionsPage;
