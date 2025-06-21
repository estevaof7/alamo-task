import { Input } from '@/components/ui/input';
import Image from 'next/image';

export default function SearchInput({
  input,
  onChange,
  setSearch,
  search
}: {
  input: string;
  onChange: (value: string) => void;
  setSearch: (value: string) => void;
  search: string;
}) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <div className="relative">
        <div className="absolute left-2.5 top-2.5 text-muted-foreground">
          <Image
            src="/img/icons/search-icon.svg"
            alt="Search icon"
            width={16}
            height={16}
          />
        </div>
        <Input
          id="search"
          type="search"
          placeholder="Search..."
          className="w-full rounded-lg bg-background pl-8"
          value={input}
          onChange={(e) => {
            onChange(e.target.value);
            if (e.target.value === '' && search) setSearch('');
          }}
        />
      </div>
    </div>
  );
}
