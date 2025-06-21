'use client';

import { useFieldArray, useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { LabProcedure } from '@/models/routines-model';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postRoutine } from '@/hooks/use-routines';

export function ModalCreateRoutine() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: postRoutine,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['routines'] });
    }
  });

  const {
    register,
    setValue,
    control,
    watch,
    handleSubmit,
    reset,
    formState: { errors, isValid }
  } = useForm<LabProcedure>({
    mode: 'onTouched',
    defaultValues: {
      time: '',
      title: '',
      mainSolution: {
        name: '',
        volume: ''
      },
      components: [{ name: '', quantity: '', unit: '', brand: '' }],
      measurements: {
        CHO: '',
        PTN: '',
        LIP: '',
        absorbance: ''
      },
      observations: ''
    }
  });

  const time = watch('time');

  const formatTime = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 4); // só números e no máximo 4 dígitos
    if (digits.length <= 2) return digits;
    return `${digits.slice(0, 2)}:${digits.slice(2)}`;
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const masked = formatTime(e.target.value);
    setValue('time', masked, { shouldValidate: true });
  };

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'components'
  });

  const onSubmit = (data: LabProcedure) => {
    mutation.mutate(data);
    reset();
  };

  return (
    <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle>Adicionar Rotina</DialogTitle>
        <DialogDescription>
          Preencha as informações abaixo para adicionar uma nova rotina.
        </DialogDescription>
      </DialogHeader>

      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="time">Hora</Label>
          <Input
            id="time"
            {...register('time', { required: 'A hora é obrigatória' })}
            value={time}
            onChange={handleTimeChange}
            placeholder="00:00"
          />
          {errors.time && (
            <p className="text-red-500 text-sm">{errors.time.message}</p>
          )}
        </div>

        <div className="grid gap-2">
          <Label htmlFor="title">Título da rotina</Label>
          <Input
            id="title"
            {...register('title', { required: 'O título é obrigatório' })}
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </div>

        <div className="grid gap-2">
          <Label>Nome da solução principal</Label>
          <Input {...register('mainSolution.name')} />
        </div>
        <div className="grid gap-2">
          <Label>Volume da solução principal</Label>
          <Input {...register('mainSolution.volume')} />
        </div>

        <div className="grid gap-2">
          <Label>Componentes</Label>
          {fields.map((field, index) => (
            <div key={field.id} className="grid gap-2 border rounded p-2">
              <Input
                placeholder="Nome"
                {...register(`components.${index}.name` as const)}
              />
              <Input
                placeholder="Quantidade"
                {...register(`components.${index}.quantity` as const)}
              />
              <Input
                placeholder="Unidade"
                {...register(`components.${index}.unit` as const)}
              />
              <Input
                placeholder="Marca (opcional)"
                {...register(`components.${index}.brand` as const)}
              />
              <Button
                type="button"
                variant="destructive"
                onClick={() => remove(index)}
              >
                Remover
              </Button>
            </div>
          ))}
          <Button
            type="button"
            onClick={() =>
              append({ name: '', quantity: '', unit: '', brand: '' })
            }
          >
            Adicionar componente
          </Button>
        </div>

        <div className="grid gap-2">
          <Label>Medições</Label>
          <div className="flex gap-2">
            <div className="flex items-center gap-2">
              <Input
                placeholder="CHO"
                {...register('measurements.CHO')}
                type="number"
              />
              <p>g</p>
            </div>
            <div className="flex items-center gap-2">
              <Input
                placeholder="PTN"
                {...register('measurements.PTN')}
                type="number"
              />
              <p>g</p>
            </div>
            <div className="flex items-center gap-2">
              <Input
                placeholder="LIP"
                {...register('measurements.LIP')}
                type="number"
              />
              <p>g</p>
            </div>
            <div className="flex items-center gap-2">
              <Input
                placeholder="Absorbância"
                {...register('measurements.absorbance')}
                type="number"
              />
              <p>mAU</p>
            </div>
          </div>
        </div>

        <div className="grid gap-2">
          <Label>Observações</Label>
          <Input {...register('observations')} />
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline" type="button">
              Cancelar
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button type="submit" disabled={!isValid}>
              Salvar
            </Button>
          </DialogClose>
        </DialogFooter>
      </form>
    </DialogContent>
  );
}
