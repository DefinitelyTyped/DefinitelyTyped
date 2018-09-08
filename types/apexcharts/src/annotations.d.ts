export type Annotations = {
    position: string;
    yaxis: YAxis[];
    xaxis: XAxis[];
    points: Point[];
};

type Point = {
    x: number;
    y: null;
    yAxisIndex: number;
    seriesIndex: number;
    marker: Marker;
    label: Label;
};

type Label = {
    borderColor: string;
    borderWidth: number;
    text: string;
    textAnchor: string;
    offsetX: number;
    offsetY: number;
    style: Style;
    position?: string;
};

type Style = {
    background: string;
    color: string;
    fontSize: string;
    cssClass: string;
    padding?: Padding;
};

type Padding = {
    left: number;
    right: number;
    top: number;
    bottom: number;
};

type Marker = {
    size: number;
    fillColor: string;
    strokeColor: string;
    strokeWidth: number;
    shape: string;
    radius: number;
};

type XAxis = {
    x: number;
    strokeDashArray: number;
    borderColor: string;
    offsetX: number;
    offsetY: number;
    label: XAxisLabel;
};

type XAxisLabel = {
    borderColor: string;
    borderWidth: number;
    text: string;
    textAnchor: string;
    position: string;
    orientation: string;
    offsetX: number;
    offsetY: number;
    style: Style;
};

type YAxis = {
    y: number;
    strokeDashArray: number;
    borderColor: string;
    offsetX: number;
    offsetY: number;
    yAxisIndex: number;
    label: Label;
};
