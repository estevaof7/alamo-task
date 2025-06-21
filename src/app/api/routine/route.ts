import { LabProcedure } from '@/models/routines-model';
import { NextRequest, NextResponse } from 'next/server';

const labRoutine: LabProcedure[] = [
  {
    time: '10:00',
    title: 'Procedimento Matinal',
    mainSolution: {
      name: 'Solução A',
      volume: '5 mL'
    },
    components: [
      {
        name: 'Composto B ou C',
        quantity: '250',
        unit: 'mg'
      },
      {
        name: 'Reagente Mediclab',
        quantity: '2',
        unit: 'gotas'
      },
      {
        name: 'Catalisador',
        quantity: '5',
        unit: 'mg',
        brand: 'CATPURE'
      }
    ],
    measurements: {
      CHO: '26',
      PTN: '25',
      LIP: '1.3',
      absorbance: '215'
    },
    observations: 'Misturar em recipiente estéril. Executar em fluxo laminar'
  },
  {
    time: '13:00',
    title: 'Procedimento de Meio-dia',
    mainSolution: {
      name: 'Solução B',
      volume: '10 mL'
    },
    components: [
      {
        name: 'Composto D ou E',
        quantity: '150',
        unit: 'mg'
      },
      {
        name: 'Reagente ClearMix',
        quantity: '3',
        unit: 'gotas'
      },
      {
        name: 'Estabilizante',
        quantity: '2',
        unit: 'mg',
        brand: 'STABILAB'
      }
    ],
    measurements: {
      CHO: '26',
      PTN: '25',
      LIP: '1.3',
      absorbance: '189'
    },
    observations: 'Agitar por 3 minutos antes de aplicar'
  },
  {
    time: '16:30',
    title: 'Teste Térmico',
    mainSolution: {
      name: 'Solução Térmica',
      volume: '7 mL'
    },
    components: [
      {
        name: 'Agente B ou C',
        quantity: '300',
        unit: 'mg'
      },
      {
        name: 'Gotas de Neutralizante',
        quantity: '2',
        unit: 'gotas'
      },
      {
        name: 'Controle de Temperatura',
        quantity: '1',
        unit: 'unidade'
      },
      {
        name: 'Condutor',
        quantity: '6',
        unit: 'mg',
        brand: 'HEATPULSE'
      }
    ],
    measurements: {
      CHO: '26',
      PTN: '25',
      LIP: '1.3',
      absorbance: '202'
    },
    observations: 'Usar luvas nitrílicas reforçadas'
  },
  {
    time: '18:00',
    title: 'Finalização do Ciclo',
    mainSolution: {
      name: 'Solução de Lavagem',
      volume: '8 mL'
    },
    components: [
      {
        name: 'Composto X ou Z',
        quantity: '200',
        unit: 'mg'
      },
      {
        name: 'Neutralizante Final',
        quantity: '1',
        unit: 'gota'
      },
      {
        name: 'Agente Secativo',
        quantity: '0.2',
        unit: 'mL'
      },
      {
        name: 'Catalisador',
        quantity: '4',
        unit: 'mg',
        brand: 'ENDO-CLEAN'
      }
    ],
    measurements: {
      CHO: '26',
      PTN: '25',
      LIP: '1.3',
      absorbance: '210'
    },
    observations: 'Armazenar amostra a 4°C'
  }
];

export async function GET(request: NextRequest) {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000)); //simulação do delay

    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search');

    const sortedRoutine = [...labRoutine].sort((a, b) => {
      const timeA = Number(a.time.replace(':', ''));
      const timeB = Number(b.time.replace(':', ''));
      return timeA - timeB;
    });

    const labRoutineFiltered = sortedRoutine.filter((procedure) =>
      procedure.title.toLowerCase().includes(search?.toLowerCase() || '')
    );

    if (search) {
      return NextResponse.json({
        data: labRoutineFiltered,
        total: labRoutineFiltered.length,
        success: true,
        message: `Filtrando por ${search}`
      });
    }

    return NextResponse.json({
      data: sortedRoutine,
      total: sortedRoutine.length,
      success: true,
      message: 'Procedimentos de laboratório carregados com sucesso'
    });
  } catch (error) {
    return NextResponse.json(
      {
        data: null,
        success: false,
        message: 'Erro interno do servidor',
        error: error instanceof Error ? error.message : 'Erro desconhecido'
      },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  await new Promise((resolve) => setTimeout(resolve, 1000)); //simulação do delay

  try {
    const newProcedure: LabProcedure = await req.json();
    labRoutine.push(newProcedure);
    return NextResponse.json(
      { message: 'Procedimento adicionado com sucesso!', data: newProcedure },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Erro ao adicionar procedimento.', error },
      { status: 400 }
    );
  }
}
