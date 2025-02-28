import { cn } from '@repo/ui/utils/cn';

export default function Home() {
  return (
    <div className={cn('flex flex-col items-center justify-center h-screen')}>
      <h1 className={cn('text-4xl font-bold')}>Hello World</h1>
    </div>
  );
}
