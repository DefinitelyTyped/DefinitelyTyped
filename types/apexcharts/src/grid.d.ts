export type Grid = {
    show: boolean;
    borderColor: string;
    strokeDashArray: number;
    position: string;
    xaxis: Axis;
    yaxis: Axis;
    row: Style;
    column: Style;
    padding: Padding;
};

type Style = {
    colors: string[];
    opacity: number;
};

type Padding = {
    top: number;
    right: number;
    bottom: number;
    left: number;
};

type Axis = {
    lines: Lines;
};

type Lines = {
    show: boolean;
    offsetX: number;
    offsetY: number;
};
