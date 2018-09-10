export type Theme = {
    palette: string;
    monochrome: Monochrome;
};

type Monochrome = {
    enabled: boolean;
    color: string;
    shadeTo: string;
    shadeIntensity: number;
};
