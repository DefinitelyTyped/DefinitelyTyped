export type Tooltip = {
    enabled: boolean;
    shared: boolean;
    followCursor: boolean;
    intersect: boolean;
    inverseOrder: boolean;
    custom: () => any;
    fillSeriesColor: boolean;
    onDatasetHover: OnDatasetHover;
    x: X;
    y: Y;
    z: Z;
    marker: Marker;
    items: Items;
    fixed: Fixed;
};

type Fixed = {
    enabled: boolean;
    position: string;
    offsetX: number;
    offsetY: number;
};

type Items = {
    display: string;
};

type Marker = {
    show: boolean;
};

type OnDatasetHover = {
    highlightDataSeries: boolean;
};

type X = {
    show: boolean;
    format: string;
    formatter: string;
};

type Y = {
    formatter: <T = unknown>(val: T) => T;
    title: Title;
};

type Title = {
    formatter: string;
};

type Z = {
    formatter: string;
    title: string;
};
