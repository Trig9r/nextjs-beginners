import { Metadata } from 'next';

interface PostProps {
  params: {
    id: string;
  };
}

async function getData(id: string) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) throw new Error('Такого поста не существует');

  return response.json();
}

export async function generateMetadata({ params: { id } }: PostProps): Promise<Metadata> {
  const post = await getData(id);

  return {
    title: post.title,
  };
}

export default async function Post({ params: { id } }: PostProps) {
  const post = await getData(id);

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  );
}
