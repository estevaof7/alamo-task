/* eslint-disable prettier/prettier */
interface Component {
    name: string;
    quantity: string;
    unit: string;
    brand?: string;
}

interface Measurements {
    CHO?: string;
    PTN?: string;
    LIP?: string;
    absorbance?: string;
}

export type LabProcedure = {
    time: string;
    title: string;
    mainSolution: {
        name: string;
        volume: string;
    };
    components: Component[];
    measurements: Measurements;
    observations?: string;
}