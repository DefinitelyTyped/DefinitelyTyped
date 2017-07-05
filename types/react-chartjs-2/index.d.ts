// Type definitions for react-chartjs-2 2.0
// Project: https://github.com/gor181/react-chartjs-2
// Definitions by: Alexandre Paré <https://github.com/apare>
//                 Fabien Lavocat <https://github.com/FabienLavocat>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from "react";
import * as chartjs from "chart.js";

export type ChartDataFunction<T extends chartjs.ChartData> = (element: HTMLElement) => T;
export type ChartData<T extends chartjs.ChartData> = ChartDataFunction<T>| T;

export interface ChartComponentProps {
    data: ChartData<chartjs.ChartData>;
    type?: chartjs.ChartType;
    getDatasetAtEvent?(e: any): void;
    getElementAtEvent?(e: any): void;
    getElementsAtEvent?(e: any): void;
    height?: number;
    legend?: chartjs.ChartLegendOptions;
    onElementsClick?(e: any): void; // alias for getElementsAtEvent (backward compatibility)
    options?: chartjs.ChartOptions;
    redraw?: boolean;
    width?: number;
}

export interface LinearComponentProps extends ChartComponentProps {
    data: ChartData<chartjs.ChartData>;
}

export default class ChartComponent<P extends ChartComponentProps> extends React.Component<P> {
    chart_instance: chartjs;
}

export class Doughnut extends ChartComponent<ChartComponentProps> {
}

export class Pie extends ChartComponent<ChartComponentProps> {
}

export class Line extends ChartComponent<LinearComponentProps> {
}

export class Bar extends ChartComponent<LinearComponentProps> {
}

export class HorizontalBar extends ChartComponent<ChartComponentProps> {
}

export class Radar extends ChartComponent<ChartComponentProps> {
}

export class Polar extends ChartComponent<ChartComponentProps> {
}

export class Bubble extends ChartComponent<ChartComponentProps> {
}
