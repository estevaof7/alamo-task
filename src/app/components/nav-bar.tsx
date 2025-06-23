'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { getPageTitle } from '@/utils/page-title';

export default function NavBar() {
  const href = usePathname();

  return (
    <nav className="w-full bg-white z-10 text-primary">
      <div className="flex items-center justify-between py-6 bg-white">
        <h1 className="text-xl font-medium">{getPageTitle(href)}</h1>

        <div className="flex items-center space-x-4">
          <Image src="/img/logo.svg" alt="Tarefas" width={58} height={58} />

          <Button
            variant="default"
            size="sm"
            className="h-6 bg-secondary hover:bg-purple-700 text-white px-2 rounded-md text-sm font-semibold cursor-pointer sm:after:content-['Tarefas'] sm:after:ml-1"
          >
            <Image
              src="/img/icons/checklist-icon.svg"
              alt="Tarefas"
              width={16}
              height={16}
            />
          </Button>

          {/* Ícones */}
          <div className="flex items-center space-x-3">
            <button
              className="p-2 hover:bg-gray-100 rounded-md transition-colors"
              title="Caixa de entrada"
            >
              <Image
                src="/img/icons/box-icon.svg"
                alt="Box"
                width={20}
                height={20}
              />
            </button>

            <button
              className="p-2 hover:bg-gray-100 rounded-md transition-colors"
              title="Informações"
            >
              <Image
                src="/img/icons/info-icon.svg"
                alt="Info"
                width={20}
                height={20}
              />
            </button>

            <button
              className="p-2 hover:bg-gray-100 rounded-md transition-colors"
              title="Configurações"
            >
              <Image
                src="/img/icons/engine-icon.svg"
                alt="Configurações"
                width={20}
                height={20}
              />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
