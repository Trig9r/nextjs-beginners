'use client';
import React from 'react';
import Link from 'next/link';
import { shallow } from 'zustand/shallow';

import { usePosts } from '@/store';

export const Posts = () => {
  const [posts, loading, getAllPosts] = usePosts(
    (state) => [state.posts, state.loading, state.getAllPosts],
    shallow,
  );

  React.useEffect(() => {
    getAllPosts();
  }, []);

  if (loading) return <h3>Загрузка...</h3>;
  if (posts.length === 0) return <div>Нету постов с таким названием</div>;

  return (
    <ul>
      {posts.map((post: any) => (
        <li key={post.id}>
          <Link href={`/blog/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
};
