/* eslint-disable prettier/prettier */
/* eslint-disable quotes */

import { LabProcedure } from "@/models/routines-model";

/* eslint-disable prettier/prettier */
export const labRoutine: LabProcedure[] = [
  {
    time: "10:00",
    title: "Procedimento Matinal",
    mainSolution: {
      name: "Solução A",
      volume: "5 mL"
    },
    components: [
      {
        name: "Composto B ou C",
        quantity: "250",
        unit: "mg"
      },
      {
        name: "Reagente Mediclab",
        quantity: "2",
        unit: "gotas"
      },
      {
        name: "Catalisador",
        quantity: "5",
        unit: "mg",
        brand: "CATPURE"
      }
    ],
    measurements: {
      CHO: "26g",
      PTN: "25g",
      LIP: "1.3g",
      absorbance: "215 mAU"
    },
    observations: "Misturar em recipiente estéril. Executar em fluxo laminar"
  },
  {
    time: "13:00",
    title: "Procedimento de Meio-dia",
    mainSolution: {
      name: "Solução B",
      volume: "10 mL"
    },
    components: [
      {
        name: "Composto D ou E",
        quantity: "150",
        unit: "mg"
      },
      {
        name: "Reagente ClearMix",
        quantity: "3",
        unit: "gotas"
      },
      {
        name: "Estabilizante",
        quantity: "2",
        unit: "mg",
        brand: "STABILAB"
      }
    ],
    measurements: {
      CHO: "26g",
      PTN: "25g",
      LIP: "1.3g",
      absorbance: "189 mAU"
    },
    observations: "Agitar por 3 minutos antes de aplicar"
  },
  {
    time: "16:30",
    title: "Teste Térmico",
    mainSolution: {
      name: "Solução Térmica",
      volume: "7 mL"
    },
    components: [
      {
        name: "Agente B ou C",
        quantity: "300",
        unit: "mg"
      },
      {
        name: "Gotas de Neutralizante",
        quantity: "2",
        unit: "gotas"
      },
      {
        name: "Controle de Temperatura",
        quantity: "1",
        unit: "unidade"
      },
      {
        name: "Condutor",
        quantity: "6",
        unit: "mg",
        brand: "HEATPULSE"
      }
    ],
    measurements: {
      CHO: "26g",
      PTN: "25g",
      LIP: "1.3g",
      absorbance: "202 mAU"
    },
    observations: "Usar luvas nitrílicas reforçadas"
  },
  {
    time: "18:00",
    title: "Finalização do Ciclo",
    mainSolution: {
      name: "Solução de Lavagem",
      volume: "8 mL"
    },
    components: [
      {
        name: "Composto X ou Z",
        quantity: "200",
        unit: "mg"
      },
      {
        name: "Neutralizante Final",
        quantity: "1",
        unit: "gota"
      },
      {
        name: "Agente Secativo",
        quantity: "0.2",
        unit: "mL"
      },
      {
        name: "Catalisador",
        quantity: "4",
        unit: "mg",
        brand: "ENDO-CLEAN"
      }
    ],
    measurements: {
      CHO: "26g",
      PTN: "25g",
      LIP: "1.3g",
      absorbance: "210 mAU"
    },
    observations: "Armazenar amostra a 4°C"
  }
]