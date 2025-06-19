import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import type { ButtonProps } from '@/components/ui/button';

interface PrimaryButtonProps extends Omit<ButtonProps, 'variant'> {
  // children is already part of ButtonProps if using React.FC<ButtonProps>
  // However, to be explicit for this component's direct props:
  children: React.ReactNode;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children, className, ...props }) => {
  return (
    <Button
      variant="default" // This variant should use bg-primary and text-primary-foreground by default
      className={cn(
        'w-full h-10 px-4 py-2 text-sm font-medium',
        // Explicitly ensure primary styling if default variant is not customized enough
        // or if more specific overrides are needed for this context.
        // 'bg-primary text-primary-foreground hover:bg-primary/90',
        // Standard focus, disabled, and rounding from typical button setup:
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        'disabled:pointer-events-none disabled:opacity-50',
        'rounded-md',
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
