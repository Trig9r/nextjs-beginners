'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavigationType = {
  label: string;
  href: string;
};

interface NavigationProps {
  links: NavigationType[];
}

export const Navigation = ({ links }: NavigationProps) => {
  const pathname = usePathname();

  return (
    <>
      {links.map(({ href, label }) => (
        <Link key={label} href={href} className={pathname === href ? 'active' : ''}>
          {label}
        </Link>
      ))}
    </>
  );
};
