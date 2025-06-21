'use client';

import SearchInput from './components/input';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Routines } from './components/routines';
import { getRoutines } from '@/hooks/use-routines';
import { useQuery } from '@tanstack/react-query';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { ModalCreateRoutine } from './components/modal-create-routine';

export default function RoutinesPage() {
  const [search, setSearch] = useState('');
  const [input, setInput] = useState('');

  const { data, isLoading, error } = useQuery({
    queryKey: ['routines', search],
    queryFn: () => getRoutines(search)
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearch(input);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">
          Gestão de rotinas de laboratório
        </h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-secondary hover:bg-purple-700 cursor-pointer">
              <Image
                src="/img/icons/plus-icon.svg"
                alt="Ícone de adicionar"
                width={15}
                height={15}
              />
              <span>Adicionar rotina</span>
            </Button>
          </DialogTrigger>
          <ModalCreateRoutine />
        </Dialog>
      </div>

      <div className="flex items-center gap-4 mb-4">
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex items-center gap-4 max-w-120 flex-1"
        >
          <SearchInput
            input={input}
            onChange={setInput}
            setSearch={setSearch}
            search={search}
          />
          <Button className="bg-secondary hover:bg-purple-700 cursor-pointer">
            Buscar
          </Button>
        </form>
        <Button className="bg-black hover:bg-gray-700 cursor-pointer">
          Filtragem Avançada
        </Button>
      </div>

      <Routines labRoutine={data?.data} loading={isLoading} error={error} />
    </div>
  );
}
