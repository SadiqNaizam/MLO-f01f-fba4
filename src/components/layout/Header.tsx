import React from 'react';
import { cn } from '@/lib/utils';
import { Box } from 'lucide-react'; // Using Box as a generic logo icon, matching 'InsideBox' theme

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={cn('flex items-center', className)}>
      {/* The icon is purely decorative as the brand name is adjacent */}
      <Box
        className="h-8 w-8 text-primary" 
        strokeWidth={2.5} 
        aria-hidden="true"
      />
      <span className="ml-3 text-2xl font-semibold text-foreground tracking-tight">
        InsideBox
      </span>
    </header>
  );
};

export default Header;
