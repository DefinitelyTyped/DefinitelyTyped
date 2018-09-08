export type DataLabels = {
    enabled: boolean;
    formatter: <T = unknown>(val: T) => T;
    textAnchor: string;
    offsetX: number;
    offsetY: number;
    style: Style;
    dropShadow: DropShadow;
};

type DropShadow = {
    enabled: boolean;
    top: number;
    left: number;
    blur: number;
    opacity: number;
};

type Style = {
    fontSize: string;
    colors: string[];
};
