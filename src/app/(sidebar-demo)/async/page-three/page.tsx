import React, { use } from 'react';
import PlaceholderText from '@/components/ui/PlaceholderText';
import { fetchData } from '@/lib/utils';

const AsyncPageThree = () => {
  const data = use(fetchData());

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Async Page Three</h1>
      <PlaceholderText />
    </div>
  );
};
export default AsyncPageThree;
