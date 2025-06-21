'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

type NavLinkProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

export function NavLink({ href, className, children }: NavLinkProps) {
  const pathname = usePathname();

  const isActive = pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={clsx(className, isActive && 'text-secondary ')}
    >
      {children}
    </Link>
  );
}
