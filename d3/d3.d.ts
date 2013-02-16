// Type definitions for d3JS
// Project: http://d3js.org/
// Definitions by: TypeScript samples
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface ID3Selectors {
    select: {
        (selector: string): ID3Selection;
        (element: Element): ID3Selection;
    };
    selectAll: {
        (selector: string): ID3Selection;
        (elements: Element[]): ID3Selection;
    };
}

interface ID3behavior
{
 drag: () => any;
 zoom: () => any;
}

interface ID3event 
{
    dx: number;
    dy: number;
    clientX: number;
    clientY: number;
    translate:number[];
    scale: number;
    sourceEvent: ID3event;
}

interface ID3Base extends ID3Selectors {
    // behavior
    behavior: ID3behavior;
    event: ID3event;
    // Array Helpers
    ascending: (a: number, b: number) => number;
    descending: (a: number, b: number) => number;
    min: (arr: any[], map?: (v: any) => any ) => any;
    max: (arr: any[], map?: (v: any) => any ) => any;
    extent: (arr: any[], map?: (v: any) => any ) => any[];
    quantile: (arr: number[], p: number) => number;
    bisectLeft: (arr: any[], x: any, low?: number, high?: number) => number;
    bisect: (arr: any[], x: any, low?: number, high?: number) => number;
    bisectRight: (arr: any[], x: any, low?: number, high?: number) => number;
    first: (arr: any[], comparator: (a: any, b: any) => any ) => any;
    last: (arr: any[], comparator: (a: any, b: any) => any) => any;
    range:(start: number, stop?: number, step?: number) => number[];
    
    // Loading resources
    xhr: {
        (url: string, callback: (xhr: XMLHttpRequest) => void): void;
        (url: string, mime: string, callback: (xhr: XMLHttpRequest) => void): void;
    };
    text: {
        (url: string, callback: (response: string) => void): void;
        (url: string, mime: string, callback: (response: string) => void): void;
    };
    json: (url: string, callback: (response: any) => void) => void;
    xml: {
        (url: string, callback: (response: Document) => void): void;
        (url: string, mime: string, callback: (response: Document) => void): void;
    };
    html: (url: string, callback: (response: DocumentFragment) => void) => void;
    csv: {
        (url: string, callback: (error: any, response: any[]) => void);
        parse(string: string): any[];
        parseRows(string: string, accessor: (row: any[], index: number) => any): any;
        format(rows: any[]): string;
    };
    tsv: {
        (url: string, callback: (error: any, response: any[]) => void );
        parse(string: string): any[];
        parseRows(string: string, accessor: (row: any[], index: number) => any): any;
        format(rows: any[]): string;
    };
    
    time: ID3Time;
    scale: {
        linear(): ID3LinearScale;
        ordinal(): ID3OrdinalScale;
        quantize(): ID3QuantizeScale;
        category10(): ID3OrdinalScale;
        category20(): ID3OrdinalScale;
        category20b(): ID3OrdinalScale;
        category20c(): ID3OrdinalScale;
    };
    interpolate: ID3BaseInterpolate;
    interpolateNumber: ID3BaseInterpolate;
    interpolateRound: ID3BaseInterpolate;
    interpolateString: ID3BaseInterpolate;
    interpolateRgb: ID3BaseInterpolate;
    interpolateHsl: ID3BaseInterpolate;
    interpolateArray: ID3BaseInterpolate;
    interpolateObject: ID3BaseInterpolate;
    interpolateTransform: ID3BaseInterpolate;
    layout: ID3Layout;
    svg: ID3Svg;
    random: ID3Random;
    keys(map: Object): any[];

    format(specifier: string): (value: number) => string;

    nest(): ID3Nest;
}

interface ID3Selection extends ID3Selectors {
    attr: {
        (name: string): string;
        (name: string, value: any): ID3Selection;
        (name: string, valueFunction: (data: any, index: number) => any): ID3Selection;
    };
    
    classed: {
        (name: string): string;
        (name: string, value: any): ID3Selection;
        (name: string, valueFunction: (data: any, index: number) => any): ID3Selection;
    };
    
    style: {
        (name: string): string;
        (name: string, value: any, priority?: string): ID3Selection;
        (name: string, valueFunction: (data: any, index: number) => any, priority?: string): ID3Selection;
    };
    
    property: {
        (name: string): void;
        (name: string, value: any): ID3Selection;
        (name: string, valueFunction: (data: any, index: number) => any): ID3Selection;
    };
    
    text: {
        (): string;
        (value: any): ID3Selection;
        (valueFunction: (data: any, index: number) => any): ID3Selection;
    };
    
    html: {
        (): string;
        (value: any): ID3Selection;
        (valueFunction: (data: any, index: number) => any): ID3Selection;
    };
    
    append: (name: string) => ID3Selection;
    insert: (name: string, before: string) => ID3Selection;
    remove: () => ID3Selection;
    
    data: {
        (values: (data: any, index: number) => any): ID3UpdateSelection;
        (values: any[], key?: (data: any, index: number) => any): ID3UpdateSelection;
    };

    datum: {
        (values: (data: any, index: number) => any): ID3UpdateSelection;
        (values: any): ID3UpdateSelection;
    };

    filter: {
        (filter: (data: any, index: number) => bool): ID3UpdateSelection;
        (filter: string): ID3UpdateSelection;
    };
    
    call(callback: (selection: ID3Selection) => void ): ID3Selection;
    each(eachFunction: (data: any, index: number) => any): ID3Selection;
    on: {
        (type: string): (data: any, index: number) => any;
        (type: string, listener: (data: any, index: number) => any, capture?: bool): ID3Selection;
    };

    transition: () => ID3Transition;
}

interface ID3EnterSelection {
    append: (name: string) => ID3Selection;
    insert: (name: string, before: string) => ID3Selection;
    select: (selector: string) => ID3Selection;
    empty: () => bool;
    node: () => Node;
}

interface ID3UpdateSelection extends ID3Selection {
    enter: () => ID3EnterSelection;
    update: () => ID3Selection;
    exit: () => ID3Selection;
}

interface ID3Transition {
    duration: {
        (duration: number): ID3Transition;
        (duration: (data: any, index: number) => any): ID3Transition;
    };
    delay: {
        (delay: number): ID3Transition;
        (delay: (data: any, index: number) => any): ID3Transition;
    };
    attr: {
        (name: string): string;
        (name: string, value: any): ID3Transition;
        (name: string, valueFunction: (data: any, index: number) => any): ID3Transition;
    };
    call(callback: (selection: ID3Selection) => void ): ID3Transition;

    select: (selector: string) => ID3Transition;
    selectAll: (selector: string) => ID3Transition;
}

interface ID3Nest {
    key(keyFunction: (data: any, index: number) => any): ID3Nest;
    rollup(rollupFunction: (data: any, index: number) => any): ID3Nest;
    map(values: any[]): ID3Nest;
}

interface ID3Time {
    second: ID3Interval;
    minute: ID3Interval;
    hour: ID3Interval;
    day: ID3Interval;
    week: ID3Interval;
    sunday: ID3Interval;
    monday: ID3Interval;
    tuesday: ID3Interval;
    wednesday: ID3Interval;
    thursday: ID3Interval;
    friday: ID3Interval;
    saturday: ID3Interval;
    month: ID3Interval;
    year: ID3Interval;
    
    seconds: ID3Range;
    minutes: ID3Range;
    hours: ID3Range;
    days: ID3Range;
    weeks: ID3Range;
    months: ID3Range;
    years: ID3Range;
    
    sundays: ID3Range;
    mondays: ID3Range;
    tuesdays: ID3Range;
    wednesdays: ID3Range;
    thursdays: ID3Range;
    fridays: ID3Range;
    saturdays: ID3Range;
    format: {
        
        (specifier: string): ID3TimeFormat;
        utc: (specifier: string) => ID3TimeFormat;
        iso: ID3TimeFormat;
    };
    
    scale(): ID3TimeScale;
}

interface ID3Range {
    (start: Date, end: Date, step?: number): Date[];
}

interface ID3Interval {
    (date: Date): Date;
    floor: (date: Date) => Date;
    round: (date: Date) => Date;
    ceil: (date: Date) => Date;
    range: ID3Range;
    offset: (date: Date, step: number) => Date;
    utc: ID3Interval;
}

interface ID3TimeFormat {
    (date: Date): string;
    parse: (string: string) => Date;
}

interface ID3LinearScale {
    (value: number): number;
    invert(value: number): number;
    domain(numbers: any[]): ID3LinearScale;
    range: {
        (values: any[]): ID3LinearScale;
        (): any[];
    };
    rangeRound: (values: any[]) => ID3LinearScale;
    interpolate: {
        (): ID3Interpolate;
        (factory: ID3Interpolate): ID3LinearScale;
    };
    clamp(clamp: bool): ID3LinearScale;
    nice(): ID3LinearScale;
    ticks(count: number): any[];
    tickFormat(count: number): (n: number) => string;
    copy: ID3LinearScale;
}

interface ID3OrdinalScale {
    (value: any): any;
    domain: {
        (values: any[]): ID3OrdinalScale;
        (): any[];
    };
    range: {
        (values: any[]): ID3OrdinalScale;
        (): any[];
    };
    rangePoints(interval: any[], padding?: number): ID3OrdinalScale;
    rangeBands(interval: any[], padding?: number, outerPadding?: number): ID3OrdinalScale;
    rangeRoundBands(interval: any[], padding?: number, outerPadding?: number): ID3OrdinalScale;
    rangeBand(): number;
    rangeExtent(): any[];
    copy: ID3OrdinalScale;
}

interface ID3QuantizeScale {
    (value: any): any;
    domain: {
        (values: number[]): ID3QuantizeScale;
        (): any[];
    };
    range: {
        (values: any[]): ID3QuantizeScale;
        (): any[];
    };
    copy: ID3QuantizeScale;
}

interface ID3TimeScale {
    (value: Date): number;
    invert(value: number): Date;
    domain(numbers: any[]): ID3TimeScale;
    range: {
        (values: any[]): ID3TimeScale;
        (): any[];
    };
    rangeRound: (values: any[]) => ID3TimeScale;
    interpolate: {
        (): ID3Interpolate;
        (factory: ID3InterpolateFactory): ID3TimeScale;
    };
    clamp(clamp: bool): ID3TimeScale;
    ticks: {
        (count: number): any[];
        (range: ID3Range, count: number): any[];
    };
    tickFormat(count: number): (n: number) => string;
    copy(): ID3TimeScale;   
}

interface ID3InterpolateFactory {
    (a: any, b: any): ID3BaseInterpolate;
}
interface ID3BaseInterpolate {
    (a: any, b: any): ID3Interpolate;
}

interface ID3Interpolate {
    (t: number): number;
}

interface ID3Layout {
    stack(): ID3StackLayout;
    pie(): ID3PieLayout;
}

interface ID3StackLayout {
    (layers: any[], index?: number): any[];
    values(accessor?: (d: any) => any): ID3StackLayout;
    offset(offset: string): ID3StackLayout;
}

interface ID3PieLayout {
    (values: any[], index?: number): ID3ArcDescriptor[];
    value: {
        (): (d: any, index: number) => number;
        (accessor: (d: any, index: number) => number): ID3PieLayout;
    };
    sort: {
        (): (d1: any, d2: any) => number;
        (comparator: (d1: any, d2: any) => number): ID3PieLayout;
    };
    startAngle: {
        (): number;
        (angle: number): ID3SvgArc;
        (angle: () => number): ID3SvgArc;
    };
    endAngle: {
        (): number;
        (angle: number): ID3SvgArc;
        (angle: () => number): ID3SvgArc;
    };
}

interface ID3ArcDescriptor {
    value: any;
    data: any;
    startAngle: number;
    endAngle: number;
}

interface ID3SVGSymbol
{
    type: (string) => ID3SVGSymbol;
    size: (number) => ID3SVGSymbol;
}

interface ID3Svg {
    /**
    * Create a new symbol generator
    */
    symbol: () => ID3SVGSymbol;
    /**
    * Create a new axis generator
    */
    axis(): ID3SvgAxis;
    /**
    * Create a new arc generator
    */
    arc(): ID3SvgArc;
    /**
    * Create a new line generator
    */
    line(): ID3SvgLine;
    /**
    * Create a new area generator
    */
    area(): ID3SvgArea;
}

interface ID3SvgAxis {
    (selection: ID3Selection): void;
    scale: {
        (): any;
        (scale: any): ID3SvgAxis;
    };
    
    orient: {
        (): string;
        (orientation: string): ID3SvgAxis;
    };
    
    ticks: {
        (count: number): ID3SvgAxis;
        (range: ID3Range, count?: number): ID3SvgAxis;
    };
    
    tickSubdivide(count: number): ID3SvgAxis;
    tickSize(major?: number, minor?: number, end?: number): ID3SvgAxis;
    tickFormat(formatter: (value: any) => string): ID3SvgAxis;
}

interface ID3SvgArc {
    (options?: ID3SvgArcOptions): string;
    innerRadius: {
        (): number;
        (radius: number): ID3SvgArc;
        (radius: () => number): ID3SvgArc;
    };
    outerRadius: {
        (): number;
        (radius: number): ID3SvgArc;
        (radius: () => number): ID3SvgArc;
    };
    startAngle: {
        (): number;
        (angle: number): ID3SvgArc;
        (angle: () => number): ID3SvgArc;
    };
    endAngle: {
        (): number;
        (angle: number): ID3SvgArc;
        (angle: () => number): ID3SvgArc;
    };
    centroid(options?: ID3SvgArcOptions): number[];
}

interface ID3SvgArcOptions {
    innerRadius?: number;
    outerRadius?: number;
    startAngle?: number;
    endAngle?: number;
}

interface ID3SvgLine {
    /**
    * Returns the path data string
    * 
    * @param data Array of data elements
    * @param index Optional index
    */
    (data: any[], index?: number): string;
    /**
    * Get or set the x-coordinate accessor.
    */
    x: {
        /**
        * Get the x-coordinate accessor.
        */
        (): (data: any) => any;
        /**
        * Set the x-coordinate accessor.
        *
        * @param accessor The new accessor function
        */
        (accessor: (data: any) => any): ID3SvgLine;
    };
    /**
    * Get or set the y-coordinate accessor.
    */
    y: {
        /**
        * Get the y-coordinate accessor.
        */
        (): (data: any) => any;
        /**
        * Set the y-coordinate accessor.
        *
        * @param accessor The new accessor function
        */
        (accessor: (data: any) => any): ID3SvgLine;
    };
    /**
    * Get or set the interpolation mode.
    */
    interpolate: {
        /**
        * Get the interpolation accessor.
        */
        (): string;
        /**
        * Set the interpolation accessor.
        *
        * @param interpolate The interpolation mode
        */
        (interpolate: string): ID3SvgLine;
    };
    /**
    * Get or set the cardinal spline tension.
    */
    tension: {
        /**
        * Get the cardinal spline accessor.
        */
        (): number;
        /**
        * Set the cardinal spline accessor.
        *
        * @param tension The Cardinal spline interpolation tension
        */
        (tension: number): ID3SvgLine;
    };
    /**
    * Control whether the line is defined at a given point.
    */
    defined: {
        /**
        * Get the accessor function that controls where the line is defined.
        */
        (): (data: any) => any;
        /**
        * Set the accessor function that controls where the area is defined.
        *
        * @param defined The new accessor function
        */
        (defined: (data: any) => any): ID3SvgLine;
    };
}

interface ID3SvgArea {
    /**
    * Generate a piecewise linear area, as in an area chart.
    */
    (data: any[], index?: number): string;
    /**
    * Get or set the x-coordinate accessor.
    */
    x: {
        /**
        * Get the x-coordinate accessor.
        */
        (): (data: any) => any;
        /**
        * Set the x-coordinate accessor.
        *
        * @param accessor The new accessor function
        */
        (accessor: (data: any) => any): ID3SvgArea;
    };
    /**
    * Get or set the x0-coordinate (baseline) accessor.
    */
    x0: {
        /**
        * Get the  x0-coordinate (baseline) accessor.
        */
        (): (data: any) => any;
        /**
        * Set the  x0-coordinate (baseline) accessor.
        *
        * @param accessor The new accessor function
        */
        (accessor: (data: any) => any): ID3SvgArea;
    };
    /**
    * Get or set the x1-coordinate (topline) accessor.
    */
    x1: {
        /**
        * Get the  x1-coordinate (topline) accessor.
        */
        (): (data: any) => any;
        /**
        * Set the  x1-coordinate (topline) accessor.
        *
        * @param accessor The new accessor function
        */
        (accessor: (data: any) => any): ID3SvgArea;
    };
    /**
    * Get or set the y-coordinate accessor.
    */
    y: {
        /**
        * Get the y-coordinate accessor.
        */
        (): (data: any) => any;
        /**
        * Set the y-coordinate accessor.
        *
        * @param accessor The new accessor function
        */
        (accessor: (data: any) => any): ID3SvgArea;
    };
    /**
    * Get or set the y0-coordinate (baseline) accessor.
    */
    y0: {
        /**
        * Get the y0-coordinate (baseline) accessor.
        */
        (): (data: any) => any;
        /**
        * Set the y0-coordinate (baseline) accessor.
        *
        * @param accessor The new accessor function
        */
        (accessor: (data: any) => any): ID3SvgArea;
    };
    /**
    * Get or set the y1-coordinate (topline) accessor.
    */
    y1: {
        /**
        * Get the y1-coordinate (topline) accessor.
        */
        (): (data: any) => any;
        /**
        * Set the y1-coordinate (topline) accessor.
        *
        * @param accessor The new accessor function
        */
        (accessor: (data: any) => any): ID3SvgArea;
    };
    /**
    * Get or set the interpolation mode.
    */
    interpolate: {
        /**
        * Get the interpolation accessor.
        */
        (): string;
        /**
        * Set the interpolation accessor.
        *
        * @param interpolate The interpolation mode
        */
        (interpolate: string): ID3SvgArea;
    };
    /**
    * Get or set the cardinal spline tension.
    */
    tension: {
        /**
        * Get the cardinal spline accessor.
        */
        (): number;
        /**
        * Set the cardinal spline accessor.
        *
        * @param tension The Cardinal spline interpolation tension
        */
        (tension: number): ID3SvgArea;
    };
    /**
    * Control whether the area is defined at a given point.
    */
    defined: {
        /**
        * Get the accessor function that controls where the area is defined.
        */
        (): (data: any) => any;
        /**
        * Set the accessor function that controls where the area is defined.
        *
        * @param defined The new accessor function
        */
        (defined: (data: any) => any): ID3SvgArea;
    };
}

interface ID3Random {
    /**
    * Returns a function for generating random numbers with a normal distribution
    *
    * @param mean The expected value of the generated pseudorandom numbers
    * @param deviation The given standard deviation
    */
    normal(mean?: number, deviation?: number): () => number;
    /**
    * Returns a function for generating random numbers with a log-normal distribution
    *
    * @param mean The expected value of the generated pseudorandom numbers
    * @param deviation The given standard deviation
    */
    logNormal(mean?: number, deviation?: number): () => number;
    /**
    * Returns a function for generating random numbers with an Irwin-Hall distribution
    *
    * @param count The number of independent variables
    */
    irwinHall(count: number): () => number;
}

declare var d3: ID3Base;
