import { Navigation } from './Navigation';

const navItems = [
  { href: '/', label: 'Главная' },
  { href: '/blog', label: 'Блог' },
  { href: '/about', label: 'О нас' },
];

export const Header = () => {
  return (
    <header>
      <Navigation links={navItems} />
    </header>
  );
};
