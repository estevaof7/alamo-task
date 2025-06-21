'use client';

import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r p-4 hidden md:block">
        <Skeleton className="h-10 w-40 mb-6" />
        <div className="space-y-4">
          <Skeleton className="h-6 w-32" />
          <Skeleton className="h-6 w-24" />
          <Skeleton className="h-6 w-28" />
          <Skeleton className="h-6 w-20" />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Top bar */}
        <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
          <div className="space-y-2">
            <Skeleton className="h-6 w-48" />
            <Skeleton className="h-6 w-60" />
          </div>
          <Skeleton className="h-10 w-40" />
        </div>

        {/* Search and filter */}
        <div className="flex items-center gap-4 mb-6 flex-wrap">
          <Skeleton className="h-10 w-64" />
          <Skeleton className="h-10 w-28" />
          <Skeleton className="h-10 w-36" />
        </div>

        {/* Lista de rotinas */}
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
      </main>
    </div>
  );
}
