import React from 'react';
import { cn } from '@/lib/utils';

interface TextLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

const TextLink: React.FC<TextLinkProps> = ({ href, children, className, ...props }) => {
  return (
    <a
      href={href}
      className={cn(
        'text-sm font-medium text-primary hover:text-primary/90 hover:underline',
        'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 rounded-sm',
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
};

export default TextLink;
