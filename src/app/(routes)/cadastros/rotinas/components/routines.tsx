'use client';

import { ScrollArea } from '@/components/ui/scroll-area';
import { LabProcedure } from '@/models/routines-model';

export function Routines({
  labRoutine,
  loading,
  error
}: {
  labRoutine: LabProcedure[] | null;
  loading: boolean;
  error: Error | null;
}) {
  if (error) return <p className="text-red-500">Erro ao carregar dados</p>;

  return (
    <ScrollArea className="h-[650px] rounded-md border p-2">
      {loading ? (
        <div className="flex items-center justify-center p-12">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Carregando procedimentos...</p>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {labRoutine?.map((routine, index) => (
            <div
              key={index}
              className={`p-4 rounded-md flex justify-between ${index % 2 !== 0 && 'bg-muted'}`}
            >
              <div>
                <div className="text-lg font-semibold">
                  {routine.time} – {routine.title}
                </div>
                <div className="mt-2 indent-4">
                  <p>
                    {routine.mainSolution.name} – {routine.mainSolution.volume}
                  </p>
                  {routine.components.map((component, index) => (
                    <p
                      key={index}
                      className={`${routine.components.length - 1 === index && 'indent-8'}`}
                    >
                      {component.name} – {component.quantity} {component.unit}
                      {component.brand ? ` (${component.brand})` : ''}
                    </p>
                  ))}
                  {routine.observations && (
                    <p className="text-sm mt-1 italic text-gray-500">
                      Observação: {routine.observations}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-4 mt-2 text-sm">
                {routine.measurements.CHO && (
                  <span>CHO: {routine.measurements.CHO}g</span>
                )}
                {routine.measurements.PTN && (
                  <span>PTN: {routine.measurements.PTN}g</span>
                )}
                {routine.measurements.LIP && (
                  <span>LIP: {routine.measurements.LIP}g</span>
                )}
                {routine.measurements.absorbance && (
                  <div className="mt-1 text-sm text-secondary font-semibold">
                    {routine.measurements.absorbance} mAU
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </ScrollArea>
  );
}
