'use client';
import useSWR from 'swr';
import Link from 'next/link';
// import { shallow } from 'zustand/shallow';

// import { usePosts } from '@/store';
import { getAllPosts } from '@/utils/api/hooks/getPosts';

export const Posts = () => {
  const { data: posts, isLoading } = useSWR('posts', getAllPosts);
  // const [posts, loading, getAllPosts] = usePosts(
  //   (state) => [state.posts, state.loading, state.getAllPosts],
  //   shallow,
  // );

  // React.useEffect(() => {
  //   getAllPosts();
  // }, []);

  if (isLoading) return <h3>Загрузка...</h3>;
  // if (posts.length === 0) return <div>Нету постов с таким названием</div>;

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
