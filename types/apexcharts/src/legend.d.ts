export type Legend = {
    show: boolean;
    position: string;
    horizontalAlign: string;
    verticalAlign: string;
    floating: boolean;
    fontSize: string;
    offsetX: number;
    offsetY: number;
    formatter: <T = unknown>(val: T) => T;
    textAnchor: string;
    labels: Labels;
    markers: Markers;
    itemMargin: ItemMargin;
    containerMargin: ContainerMargin;
    onItemClick: OnItemClick;
    onItemHover: OnItemHover;
};

type ContainerMargin = {
    left: number;
    top: number;
};

type ItemMargin = {
    horizontal: number;
    vertical: number;
};

type Labels = {
    color: string;
    useSeriesColors: boolean;
};

type Markers = {
    size: number;
    strokeColor: string;
    strokeWidth: number;
    offsetX: number;
    offsetY: number;
    radius: number;
    shape: string;
};

type OnItemClick = {
    toggleDataSeries: boolean;
};

type OnItemHover = {
    highlightDataSeries: boolean;
};
