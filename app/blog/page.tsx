import { Metadata } from 'next';
import { Posts } from '@/components/Posts';
import { Search } from '@/components/Search';

export const metadata: Metadata = {
  title: 'Блог | NextJs',
};

export default async function Blog() {
  return (
    <>
      <h1>Блог</h1>
      <Search />
      <Posts />
    </>
  );
}
