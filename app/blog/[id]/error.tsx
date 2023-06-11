'use client';

export default function ErrorWrapper({ error }: { error: Error }) {
  return <h1>Oopss!!! {error.message}</h1>;
}
