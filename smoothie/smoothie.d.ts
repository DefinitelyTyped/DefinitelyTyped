// Type definitions for smoothie
// Project: https://github.com/joewalnes/smoothie
// Definitions by: Mike H. Hawley <https://github.com/mikehhawley>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module "smoothie" {
    export class TimeSeries {
        constructor(options?: {
            resetBoundsInterval?: number;
            resetBounds?: boolean
        });

        public resetBounds(): void;
        
        public append(timestamp: number, value: number, sumRepeatedTimeStampValues?: boolean): void;
        
        public dropOldData(oldestValidTime: number, maxDataSetLength: number): void;
    }

    export class SmoothieChart {
        constructor(options?: {
            millisPerPixel?:   number;
            maxValueScale?:    number;
            interpolation?:    string;
            scaleSmoothing?:   number;
            maxDataSetLength?: number;
            
            grid?: {
                fillStyle?:        string;
                strokeStyle?:      string;
                lineWidth?:        number;
                sharpLines?:       boolean;
                millisPerLine?:    number;
                verticalSections?: number;
                borderVisible?:    boolean
            };
    
            labels?: {
                fillStyle?:  string;
                disabled?:   boolean;
                fontSize?:   number;
                fontFamily?: string;
                precision?:  number
            };
        
            horizontalLines?: number[]
        });

        public addTimeSeries(timeSeries: TimeSeries, options?: {
            lineWidth?: number;
            strokeStyle?: string
        }): void;

        public removeTimeSeries(timeSeries: TimeSeries): void;

        public streamTo(canvas: HTMLCanvasElement, delayMillis: number): void;

        public start(): void;
        public stop():  void;

        public updateValueRange(): void;
        public render(canvas?: HTMLCanvasElement, time?: number): void;
    }
}
