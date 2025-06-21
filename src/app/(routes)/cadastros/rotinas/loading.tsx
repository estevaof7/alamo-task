'use client';

import { Skeleton } from '@/components/ui/skeleton';

export default function LoadingRotinas() {
  return (
    <div className="space-y-6">
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="border rounded-lg p-4 bg-muted flex flex-col gap-2 md:flex-row md:justify-between md:items-center"
        >
          <div className="space-y-2 flex-1">
            <Skeleton className="h-4 w-40" />
            <Skeleton className="h-4 w-60" />
            <Skeleton className="h-4 w-52" />
            <Skeleton className="h-4 w-44" />
          </div>

          <div className="space-y-1 mt-4 md:mt-0 md:text-right">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-24" />
          </div>
        </div>
      ))}
    </div>
  );
}
