'use client';
import React from 'react';
import useSWR from 'swr';

import { usePosts } from '@/store';
import { getPostsBySearch } from '@/utils/api/hooks/getPosts';

export const Search = () => {
  const { mutate } = useSWR('posts');
  const [searchValue, setSearchValue] = React.useState('');
  // const getPostsBySearch = usePosts((state) => state.getPostsBySearch);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const posts = await getPostsBySearch(searchValue);
    mutate(posts);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Поиск"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <button type="submit">Поиск</button>
    </form>
  );
};
