import React, { use } from 'react';
import PlaceholderText from '@/components/ui/PlaceholderText';
import { fetchData } from '@/lib/utils';

const AsyncPageOne = () => {
  const data = use(fetchData());

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Async Page One</h1>
      <PlaceholderText />
    </div>
  );
};
export default AsyncPageOne;
