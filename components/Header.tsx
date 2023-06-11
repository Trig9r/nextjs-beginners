import Link from 'next/link';
import React from 'react';

export const Header = () => {
  return (
    <header>
      <Link href={'/'}>Главная</Link>
      <Link href={'/blog'}>Блог</Link>
      <Link href={'/about'}>О нас</Link>
    </header>
  );
};
