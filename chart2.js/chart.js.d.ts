// Type definitions for chart.js v2.2.2
// Project: http://www.chartjs.org
// Definitions by: James Harris <https://github.com/jimmythecoder>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace ChartJs {

    interface Instance {
        /**
         * Destroys a specific chart instance
         */
        destroy(): void;

        /**
         * Triggers an update of the chart. This can be safely called after replacing the entire data object. This will update all scales, legends, and then re-render the chart.
         */
        update(duration: number, lazy: boolean): void;

        /**
         * Triggers a redraw of all chart elements. Note, this does not update elements for new data. Use .update() in that case.
         */
        render(duration: number, lazy: boolean): void;

        /**
         * Use this to stop any current animation loop. This will pause the chart during any current animation frame. Call .render() to re-animate.
         */
        stop(): Instance;

        /**
         * Use this to manually resize the canvas element. This is run each time the canvas container is resized, but you can call this method manually if you change the size of the canvas nodes container element.
         */
        resize(): Instance;

        /**
         * Will clear the chart canvas. Used extensively internally between animation frames, but you might find it useful.
         */
        clear(): Instance;

        /**
         * This returns a base 64 encoded string of the chart in it's current state.
         */
        toBase64Image(): string;

        /**
         * Returns an HTML string of a legend for that chart. The legend is generated from the legendCallback in the options.
         */
        generateLegend(): string;

        /**
         * Calling getElementAtEvent(event) on your Chart instance passing an argument of an event, or jQuery event, will return the single element at the event position. If there are multiple items within range, only the first is returned
         */
        getElementAtEvent(e: Event): HTMLElement;

        /**
         * Looks for the element under the event point, then returns all elements at the same data index. This is used internally for 'label' mode highlighting.
         */
        getElementsAtEvent(e: Event): HTMLElement[];

        /**
         * Looks for the element under the event point, then returns all elements from that dataset. This is used internally for 'dataset' mode highlighting
         */
        getDatasetAtEvent(e: Event): HTMLElement;
    }

    interface DataSet {
        /**
         * The data to plot in a line
         */
        data: number[];

        /**
         * The label for the dataset which appears in the legend and tooltips
         */
        label: string;

        /**
         * The ID of the x axis to plot this dataset on
         */
        xAxisID?: string;

        /**
         * The ID of the y axis to plot this dataset on
         */
        yAxisID?: string;

        /**
         * If true, fill the area under the line
         */
        fill?: boolean;

        /**
         * Bezier curve tension of the line. Set to 0 to draw straightlines. Note This was renamed from 'tension' but the old name still works.
         */
        lineTension?: number;

        /**
         * The fill color under the line.
         */
        backgroundColor?: string;

        /**
         * The width of the line in pixels
         */
        borderWidth?: number;

        /**
         * The color of the line.
         */
        borderColor?: string;

        /**
         * Cap style of the line.
         */
        borderCapStyle?: string;

        /**
         * Length and spacing of dashes.
         */
        borderDash?: number[];

        /**
         * Offset for line dashes.
         */
        borderDashOffset?: number;

        /**
         * ine joint style. See MDN
         */
        borderJoinStyle?: string;

        /**
         * The border color for points.
         */
        pointBorderColor?: string;

        /**
         * The fill color for points
         */
        pointBackgroundColor?: string[];	

        /**
         * The width of the point border in pixels
         */
        pointBorderWidth?: number[];

        /**
         * The radius of the point shape. If set to 0, nothing is rendered.
         */
        pointRadius?: number[];

        /**
         * The radius of the point when hovered
         */
        pointHoverRadius?: number[];

        /**
         * The pixel size of the non-displayed point that reacts to mouse events
         */
        pointHitRadius?: number[];

        /**
         * Point background color when hovered
         */
        pointHoverBackgroundColor?: string[];

        /**
         * Point border color when hovered
         */
        pointHoverBorderColor?: string[];	

        /**
         * Border width of point when hovered
         */
        pointHoverBorderWidth?: number[];	

        /**
         * The style of point. Options are 'circle', 'triangle', 'rect', 'rectRot', 'cross', 'crossRot', 'star', 'line', and 'dash'. If the option is an image, that image is drawn on the canvas using drawImage.
         */
        pointStyle?:	string[];
        
        /**
         * If false, the line is not drawn for this dataset
         */
        showLine?: boolean;	

        /**
         * If true, lines will be drawn between points with no or null data
         */
        spanGaps?: boolean;	

        /**
         * If true, the line is shown as a steeped line and 'lineTension' will be ignored
         */
        steppedLine?: boolean;	
    }

    interface ConfigData {
        labels: string[];
        datasets: DataSet[];
    }

    interface Config {
        type: string;
        data: ConfigData;
        options?: any;
    }

    interface ArcConfiguration {
        /**
         * Default line fill color
         * @Default 'rgba(0,0,0,0.1)'
         */
        backgroundColor: string;

        /**
         * Default line stroke width
         * @Default 3
         */
        borderWidth: number;

        /**
         * Default line stroke color
         * @Default 'rgba(0,0,0,0.1)'
         */
        borderColor: string;
    }

    interface RectangleConfiguration {
        /**
         * Default line fill color
         * @Default 'rgba(0,0,0,0.1)'
         */
        backgroundColor: string;

        /**
         * Default line stroke width
         * @Default 3
         */
        borderWidth: number;

        /**
         * Default line stroke color
         * @Default 'rgba(0,0,0,0.1)'
         */
        borderColor: string;

        /**
         * Default skipped (excluded) border for rectangle. Can be one of bottom, left, top, right
         * @Default 'bottom'
         */
        borderSkipped: string;
    }

    interface LineConfiguration {
        /**
         * Default bezier curve tension. Set to 0 for no bezier curves.
         * @Default 0.4
         */
        tension: number;

        /**
         * Default line fill color
         * @Default 'rgba(0,0,0,0.1)'
         */
        backgroundColor: string;

        /**
         * Default line stroke width
         * @Default 3
         */
        borderWidth: number;

        /**
         * Default line stroke color
         * @Default 'rgba(0,0,0,0.1)'
         */
        borderColor: string;

        /**
         * Determines how the end points of every line are drawn ('butt', 'round', 'square')
         * {@link https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/lineCap}
         * @Default 'butt'
         */
        borderCapStyle: string;

        /**
         * A list of numbers that specifies distances to alternately draw a line and a gap (in coordinate space units).
         * {@link https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash}
         * @Default []
         */
        borderDash: number[];

        /**
         * Default line dash offset. 
         * @link https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset 
         * @Default 0.0
         */
        borderDashOffset: number;

        /**
         * Default line join style. 
         * {@link https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin}
         * @default 'miter'
         */
        borderJoinStyle: string;

        /**
         * If true, bezier control points are kept inside the chart. If false, no restriction is enforced.
         * @default true
         */
        capBezierPoints: boolean;

        /**
         * If true, the line is filled.
         * @default true
         */
        fill: boolean;

        /**
         * If true, the line is shown as a steeped line and 'tension' will be ignored
         * @default false 
         */
        stepped: boolean;
    }

    interface LegendConfiguration {
        display: boolean;
        position: string;
        fullWidth: boolean;
        onClick: Function;
        labels: Object;
    }

    interface TitleConfiguration {
        display: boolean;
        position: string;
        fullWidth: boolean;
        fontSize: number;
        fontFamily: string;
        fontColor: string;
        fontStyle: string;
        padding: string;
        text: string;
    }

    interface FontConfiguration {
        /**
         * Default font color for all text
         * @default '#666'	
         */
        defaultFontColor: string;

        /**
         * Default font family for all text
         * @default "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
         */
        defaultFontFamily: string;		

        /**
         * Default font size (in px) for text. Does not apply to radialLinear scale point labels
         * @default 12
         */
        defaultFontSize: number;	

        /**
         * Default font style. Does not apply to tooltip title or footer. Does not apply to chart title
         * @default 'normal'
         */
        defaultFontStyle: string;
    }

    interface TooltipConfiguration {
        enabled: boolean;

        custom: Function;

        mode: string;

        itemSort: Function;

        backgroundColor: string;

        titleFontFamily: string;

        titleFontSize: number;

        titleFontStyle: string;

        titleFontColor: string;

        titleSpacing: number;

        titleMarginBottom: number;

        bodyFontFamily: string;

        bodyFontSize: number;

        bodyFontStyle: string;
        bodyFontColor: string;
        bodySpacing: number;
        footerFontFamily: string;
        footerFontSize: number;
        footerFontStyle: string;
        footerFontColor: string;
        footerSpacing: number;
        footerMarginTop: number;

        xPadding: number;
        yPadding: number;
        caretSize: number;
        cornerRadius: number;
        multiKeyBackground: string;
        callbacks: Object;
    }

    interface ChartDefaultsGlobalElements {
        arc?: ArcConfiguration;
        line?: LineConfiguration;
        rectangle?: RectangleConfiguration;
    }

    interface ChartDefaultsGlobal extends FontConfiguration {
        multiTooltipTemplate?: string;
        elements?: ChartDefaultsGlobalElements;
        tooltips?: TooltipConfiguration;
        legend?: LegendConfiguration;
        title?: TitleConfiguration;
    }

    interface ChartDefaults {
        global: ChartDefaultsGlobal;
    }

    interface Static {
        new (context: CanvasRenderingContext2D, config: Config): Instance;

        defaults: ChartDefaults;
    }

    export enum ChartType {
        line, bar, radar, doughnut, polarArea, bubble
    }

    export enum TimeUnit {
        millisecond, second, minute,
        hour, day, week,
        month, quarter, year
    }    
}

declare var Chart: ChartJs.Static;