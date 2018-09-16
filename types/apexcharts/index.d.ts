// Type definitions for apexcharts 1.4
// Project: https://github.com/apexcharts/apexcharts.js
// Definitions by: San Nguyen <https://github.com/sandangel>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Legend } from './src/legend';
import { Fill } from './src/fill';
import { Grid } from './src/grid';
import { DataLabels } from './src/data-labels';
import { Annotations } from './src/annotations';
import { Markers } from './src/markers';
import { States } from './src/states';
import { Stroke } from './src/stroke';
import { Theme } from './src/theme';
import { Title } from './src/title';
import { Tooltip } from './src/tooltip';

export interface ApexChartOptions<T = unknown> {
    annotations: Annotations;
    legend: Legend;
    fill: Fill;
    grid: Grid;
    dataLabels: DataLabels;
    labels: string[];
    colors: string[];
    markers: Markers;
    responsive: {
        breakpoint: number;
        options: ApexChartOptions;
    }[];
    series: { name: string; data: T[] };
    states: States;
    stroke: Stroke;
    theme: Theme;
    title: Title;
    tooltip: Tooltip;
}

declare class ApexCharts {
    constructor(el: unknown, opts: ApexChartOptions);

    /**
     * The primary method user will call to render the chart.
     */
    render<T = unknown>(): Promise<T>;

    addEventListener(name: string, handler: (...params: unknown[]) => unknown): void;

    removeEventListener(name: string, handler: (...params: unknown[]) => unknown): void;

    fireEvent(name: string, ...args: unknown[]): void;

    create(ser: any): any;

    mount(graphData: any): Promise<ApexCharts>;

    /**
     * Allows users to update Options after the chart has rendered.
     *
     * @param {object} options - A new config object can be passed which will be merged with the existing config object
     * @param {boolean} redraw - should redraw from beginning or should use existing paths and redraw from there
     * @param {boolean} animate - should animate or not on updating Options
     */
    updateOptions(options: ApexChartOptions, redraw?: boolean, animate?: boolean): any;

    /**
     * private method to update Options.
     *
     * @param {object} options - A new config object can be passed which will be merged with the existing config object
     * @param {boolean} redraw - should redraw from beginning or should use existing paths and redraw from there
     * @param {boolean} animate - should animate or not on updating Options
     * @param {boolean} makeDefaultConfig - should update the default config or not
     */
    private updateOptionsInternal(
        options: any,
        redraw?: boolean,
        animate?: boolean,
        makeDefaultConfig?: boolean,
    ): any;

    /**
     * Allows users to update Series after the chart has rendered.
     *
     * @param {array} series - New series which will override the existing
     */
    updateSeries(newSeries: any[], animate?: boolean, makeDefaultConfig?: boolean): any;

    /**
     * Private method to update Series.
     *
     * @param {array} series - New series which will override the existing
     */
    updateSeriesInternal(newSeries: any[], animate?: boolean, makeDefaultConfig?: boolean): any;

    /**
     * Allows users to append Data to series.
     *
     * @param {array} newData - New data in the same format as series
     */
    appendData<T = unknown>(newData: T[]): Promise<ApexCharts>;

    update(): Promise<ApexCharts>;

    clear(): void;

    /**
     * Destroy the chart instance by removing all elements which also clean up event listeners on those elements.
     */
    destroy(): void;

    /**
     * Allows the user to provide data attrs in the element and the chart will render automatically when this method is called by searching for the elements containing 'data-apexcharts' attribute
     */
    static initOnLoad(): void;

    /**
     * This static method allows users to call chart methods without necessarily from the
     * instance of the chart in case user has assigned chartID to the targetted chart.
     * The chartID is used for mapping the instance stored in Apex._chartInstances global variable
     *
     * This is helpful in cases when you don't have reference of the chart instance
     * easily and need to call the method from anywhere.
     * For eg, in React/Vue applications when you have many parent/child components,
     * and need easy reference to other charts for performing dynamic operations
     *
     * @param {string} chartID - The unique identifier which will be used to call methods
     * on that chart instance
     * @param {function} fn - The method name to call
     * @param {object} opts - the same arguments of the fn which are used directly even when calling the methods on class instance
     */
    static exec(chartID: string, fn: () => void, opts: any): any;

    static merge(target: any, source: any): any;

    setupEventHandlers(): any;

    addXaxisAnnotation(opts: any, pushToMemory?: boolean, context?: any): void;

    addYaxisAnnotation(opts: any, pushToMemory?: boolean, context?: any): void;

    addPointAnnotation(opts: any, pushToMemory?: boolean, context?: any): void;

    // This method is never used internally and will be only called externally on the chart instance.
    // Hence, we need to keep all these elements in memory when the chart gets updated and redraw again
    addText(options: any, pushToMemory?: boolean, context?: any): void;

    getChartArea(): any;

    getSeriesTotalXRange(minX: any, maxX: any): any;

    getSeriesTotal(): any;

    paper(): any;

    static getChartByID(chartID: string): ApexCharts;

    /**
     * Handle window resize and re-draw the whole chart.
     */
    windowResize(): void;
}

export { ApexCharts };

export default ApexCharts;
