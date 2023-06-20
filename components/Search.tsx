'use client';
import React, { FormEventHandler } from 'react';

import { usePosts } from '@/store';

export const Search = () => {
  const [searchValue, setSearchValue] = React.useState('');
  const getPostsBySearch = usePosts((state) => state.getPostsBySearch);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    await getPostsBySearch(searchValue);
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
