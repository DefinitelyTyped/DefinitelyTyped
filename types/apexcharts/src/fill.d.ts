export type Fill = {
    colors: string[];
    opacity: number;
    type: string;
    gradient: Gradient;
    image: Image;
    pattern: Pattern;
};

type Gradient = {
    shade: string;
    type: string;
    shadeIntensity: number;
    gradientToColors: string[];
    inverseColors: boolean;
    opacityFrom: number;
    opacityTo: number;
    stops: number[];
};

type Image = {
    src: any[];
    width: number;
    height: number;
};

type Pattern = {
    style: string;
    width: number;
    height: number;
    strokeWidth: number;
};
