import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

interface SubmitButtonProps {
  children?: React.ReactNode;
  className?: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ children, className }) => {
  const {
    formState: { isSubmitting },
  } = useFormContext();

  return (
    <Button
      disabled={isSubmitting}
      type="submit"
      className={cn(
        'text-lg py-5 w-full cursor-pointer',
        isSubmitting && 'bg-foreground/20  text-foreground/50',
        className
      )}
    >
      {isSubmitting ? (
        <div className="flex items-center justify-center gap-2">
          <Loader2 className="animate-spin" />
          Please wait
        </div>
      ) : (
        children
      )}
    </Button>
  );
};

export default SubmitButton;
