// Type definitions for morris.js 0.5.1
// Project: http://morrisjs.github.io/morris.js/
// Definitions by: Matthieu Mourisson <https://github.com/mareek> 
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace morris {
    interface chartOptions {
        element: any;
        resize?: boolean;
    }

    interface lineOptions extends chartOptions {
        data: any[];
        xkey: string;
        ykeys: string[];
        labels: string[];
        lineColors?: string[];
        lineWidth?: number;
        pointSize?: number;
        pointFillColors?: string[];
        pointStrokeColors?: string[];
        ymax?: any;
        ymin?: any;
        smooth?: boolean;
        hideHover?: any;
        hoverCallback?: (index: number, options: lineOptions, content: string, row: any) => string;
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
        axes?: boolean;
        grid?: boolean;
        gridTextColor?: string;
        gridTextSize?: number;
        gridTextFamily?: string;
        gridTextWeight?: string;
        fillOpacity?: number;
    }

    interface areaOptions extends lineOptions {
        behaveLikeLine?: boolean;
    }

    interface donutData {
        label: string;
        value: number;
    }

    interface donutOptions extends chartOptions {
        data: donutData[];
        colors?: string[];
        formatter?: (y: number, data: donutData) => string;
    }

    interface morrisStatic {
        Line: (options: lineOptions) => any;
        Area: (options: areaOptions) => any;
        Donut: (options: donutOptions) => any;
    }
}

declare var Morris: morris.morrisStatic;