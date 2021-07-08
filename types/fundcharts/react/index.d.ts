import * as React from 'react';
declare namespace FundChartsReact {
    interface LinePropsOptions extends Partial<FundCharts.LineOptions> {
        id?: string;
    }
    interface LineProps {
        options?: LinePropsOptions;
        hover?: (index?: number, dataset?: Array<number>, x?: number, y?: number) => void;
    }
    export class Line extends React.Component<LineProps> {}

    interface BarPropsOptions extends Partial<FundCharts.BarOptions> {
        id?: string;
    }
    interface BarProps {
        options?: FundCharts.BarOptions;
        hover?: (index?: number, dataset?: Array<number>, x?: number, y?: number) => void;
    }
    export class Bar extends React.Component<BarProps> {}
    interface PiePropsOptions extends Partial<FundCharts.PieOptions> {
        id?: string;
    }
    interface PieProps {
        options?: PiePropsOptions;
        hover?: (index?: number, dataset?: Array<number>, x?: number, y?: number) => void;
    }
    export class Pie extends React.Component<PieProps> {}
    interface RadarPropsOptions extends Partial<FundCharts.RadarOptions> {
        id?: string;
    }
    interface RadarProps {
        options?: RadarPropsOptions;
        hover?: (index?: number, dataset?: Array<number>, x?: number, y?: number) => void;
    }
    export class Radar extends React.Component<RadarProps> {}

    interface ScatterPropsOptions extends Partial<FundCharts.ScatterOptions> {
        id?: string;
    }
    interface ScatterProps {
        options?: ScatterPropsOptions;
        hover?: (index?: number, dataset?: Array<number>, x?: number, y?: number) => void;
    }
    export class Scatter extends React.Component<ScatterProps> {}
    interface KlinePropsOptions extends Partial<FundCharts.KlineOptions> {
        id?: string;
    }
    interface KlineProps {
        options?: KlinePropsOptions;
        hover?: (index?: number, dataset?: Array<number>, x?: number, y?: number) => void;
    }
    export class Kline extends React.Component<KlineProps> {}
}

export = FundChartsReact;
