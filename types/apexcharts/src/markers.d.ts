export type Markers = {
    size: number;
    colors: string[];
    strokeColor: string;
    strokeWidth: number;
    strokeOpacity: number;
    fillOpacity: number;
    shape: string;
    radius: number;
    offsetX: number;
    offsetY: number;
    hover: Hover;
};

type Hover = {
    size: number;
};
