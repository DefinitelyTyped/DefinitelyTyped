// Type definitions for morris.js 0.5.1
// Project: http://morrisjs.github.io/morris.js/
// Definitions by: Matthieu Mourisson <https://github.com/mareek> 
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace morris {
    interface IChartOptions {
        element: any;
        resize?: boolean;
    }

    interface IGridChartOptions extends IChartOptions {
        data: any[];
        xkey: string;
        ykeys: string[];
        labels: string[];
        axes?: boolean;
        hideHover?: any;
        grid?: boolean;
        gridTextColor?: string;
        gridTextSize?: number;
        gridTextFamily?: string;
        gridTextWeight?: string;
    }

    interface ILineOptions extends IGridChartOptions {
        lineColors?: string[];
        lineWidth?: number;
        pointSize?: number;
        pointFillColors?: string[];
        pointStrokeColors?: string[];
        ymax?: any;
        ymin?: any;
        smooth?: boolean;
        hoverCallback?: (index: number, options: ILineOptions, content: string, row: any) => string;
        parseTime?: boolean;
        postUnits?: string;
        preUnits?: string;
        dateFormat?: (timestamp: number) => string;
        xLabels?: string;
        xLabelFormat?: (date: Date) => string;
        xLabelAngle?: number;
        yLabelFormat?: (val: any) => string;
        goals?: number[];
        goalStrokeWidth?: number;
        goalLineColors?: string[];
        events?: string[];
        eventStrokeWidth?: number;
        eventLineColors?: string[];
        continuousLine?: boolean;
        fillOpacity?: number;
    }

    interface IAreaOptions extends ILineOptions {
        behaveLikeLine?: boolean;
    }

    interface IBarOptions extends IGridChartOptions {
        barColors?: string[];
        stacked: boolean;
        hoverCallback?: (index: number, options: IBarOptions, content: string, row: any) => string;
    }

    interface IDonutData {
        label: string;
        value: number;
    }

    interface IDonutOptions extends IChartOptions {
        data: IDonutData[];
        colors?: string[];
        formatter?: (y: number, data: IDonutData) => string;
    }

    class MorrisStatic {
        Line: (options: ILineOptions) => any;
        Area: (options: IAreaOptions) => any;
        Bar: (options: IBarOptions) => any;
        Donut: (options: IDonutOptions) => any;
    }
}

declare var Morris: morris.MorrisStatic;