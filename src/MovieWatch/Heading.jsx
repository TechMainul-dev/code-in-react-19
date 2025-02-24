import { Video } from 'lucide-react';

export const Heading = () => {
  return (
    <h1 className="text-4xl font-bold flex justify-center items-center gap-2 dark:text-green-400">
      {' '}
      <Video width={50} height={50} /> Movie Watch List
    </h1>
  );
};
