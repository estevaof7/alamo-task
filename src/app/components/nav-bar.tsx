'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { getPageTitle } from '@/utils/page-title';

export default function NavBar() {
  const href = usePathname();

  return (
    <nav className="w-full bg-white z-10">
      <div className="flex items-center justify-between py-6 bg-white">
        <h1 className="text-xl font-semibold text-gray-900">
          {getPageTitle(href)}
        </h1>

        <div className="flex items-center space-x-4">
          <span className="text-secondary font-medium">Alamo</span>

          <Button
            variant="default"
            size="sm"
            className="bg-secondary hover:bg-purple-700 text-white px-4 py-2 rounded-md text-sm font-medium cursor-pointer sm:after:content-['Tarefas'] sm:after:ml-2"
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
