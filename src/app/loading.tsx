import React from 'react';
import { Loader2 } from 'lucide-react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center mt-20">
      <Loader2 className="animate-spin text-primary" />
    </div>
  );
};
export default Loading;
