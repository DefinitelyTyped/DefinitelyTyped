// Type definitions for d3JS
// Project: http://d3js.org/
// Definitions by: TypeScript samples
// Definitions: https://github.com/borisyankov/DefinitelyTyped

module D3 {
    interface Selectors {
        /**
        * Select an element from the current document
        */
        select: {
            /**
            * Selects the first element that matches the specified selector string
            *
            * @param selector Selection String to match
            */
            (selector: string): Selection;
            /**
            * Selects the specified node
            *
            * @param element Node element to select
            */
            (element: EventTarget): Selection;
        };

        /**
        * Select multiple elements from the current document
        */
        selectAll: {
            /**
            * Selects all elements that match the specified selector
            *
            * @param selector Selection String to match
            */
            (selector: string): Selection;
            /**
            * Selects the specified array of elements
            *
            * @param elements Array of node elements to select
            */
            (elements: EventTarget[]): Selection;
        };
    }

    interface Behavior {
        /**
        * Constructs a new drag behaviour
        */
        drag: () => Drag;
        zoom: () => Zoom;
    }

    interface Zoom {
        /**
        * Execute zoom method
        */
        (): any;

        /**
        * Registers a listener to receive events
        *
        * @param type Enent name to attach the listener to
        * @param listener Function to attach to event
        */
        on: (type: string, listener: (data: any, index?: number) => any) => Zoom;

        /**
        * Gets or set the current zoom scale
        */
        scale: {
            /**
            * Get the current current zoom scale
            */
            (): number;
            /**
            * Set the current current zoom scale
            *
            * @param origin Zoom scale
            */
            (scale: number): Zoom;
        };

        /**
        * Gets or set the current zoom translation vector
        */
        translate: {
            /**
            * Get the current zoom translation vector
            */
            (): number[];
            /**
            * Set the current zoom translation vector
            *
            * @param translate Tranlation vector
            */
            (translate: number[]): Zoom;
        };

        /**
        * Gets or set the allowed scale range
        */
        scaleExtent: {
            /**
            * Get the current allowed zoom range
            */
            (): number[];
            /**
            * Set the allowable zoom range
            *
            * @param extent Allowed zoom range
            */
            (extent: number[]): Zoom;
        };

        /**
        * Gets or set the X-Scale that should be adjusted when zooming
        */
        x: {
            /**
            * Get the X-Scale
            */
            (): Scale;
            /**
            * Set the X-Scale to be adjusted
            *
            * @param x The X Scale
            */
            (x: Scale): Zoom;

        };

        /**
        * Gets or set the Y-Scale that should be adjusted when zooming
        */
        y: {
            /**
            * Get the Y-Scale
            */
            (): Scale;
            /**
            * Set the Y-Scale to be adjusted
            *
            * @param y The Y Scale
            */
            (y: Scale): Zoom;
        };
    }

    interface Drag {
        /**
        * Execute drag method
        */
        (): any;

        /**
        * Registers a listener to receive events
        *
        * @param type Enent name to attach the listener to
        * @param listener Function to attach to event
        */
        on: (type: string, listener: (data: any, index?: number) => any) => Drag;

        /**
        * Gets or set the current origin accessor function
        */
        origin: {
            /**
            * Get the current origin accessor function
            */
            (): any;
            /**
            * Set the origin accessor function
            *
            * @param origin Accessor function
            */
            (origin?: any): Drag;
        };
    }

    interface Event {
        dx: number;
        dy: number;
        clientX: number;
        clientY: number;
        translate: number[];
        scale: number;
        sourceEvent: Event;
        x: number;
        y: number;
    }

    interface Base extends Selectors {
        /**
        * Create a behaviour
        */
        behavior: Behavior;
        /**
        * Access the current user event for interaction
        */
        event: Event;
        
        /**
        * Compare two values for sorting.
        * Returns -1 if a is less than b, or 1 if a is greater than b, or 0
        *
        * @param a First number
        * @param b Second number
        */
        ascending: (a: number, b: number) => number;
        /**
        * Compare two values for sorting.
        * Returns -1 if a is greater than b, or 1 if a is less than b, or 0
        *
        * @param a First number
        * @param b Second number
        */
        descending: (a: number, b: number) => number;
        /**
        * Find the minimum value in an array
        *
        * @param arr Array to search
        * @param map Accsessor function
        */
        min: (arr: number[], map?: (v: any) => any) => number;
        /**
        * Find the maximum value in an array
        *
        * @param arr Array to search
        * @param map Accsessor function
        */
        max: (arr: number[], map?: (v: any) => any) => number;
        /**
        * Find the minimum and maximum value in an array
        *
        * @param arr Array to search
        * @param map Accsessor function
        */
        extent: (arr: number[], map?: (v: any) => any) => number[];
        /**
        * Compute the sum of an array of numbers
        *
        * @param arr Array to search
        * @param map Accsessor function
        */
        sum: (arr: number[], map?: (v: any) => any) => number;
        /**
        * Compute the arithmetic mean of an array of numbers
        *
        * @param arr Array to search
        * @param map Accsessor function
        */
        mean: (arr: number[], map?: (v: any) => any) => number;
        /**
        * Compute the median of an array of numbers (the 0.5-quantile).
        *
        * @param arr Array to search
        * @param map Accsessor function
        */
        median: (arr: number[], map?: (v: any) => any) => number;
        /**
        * Compute a quantile for a sorted array of numbers.
        *
        * @param arr Array to search
        * @param p The quantile to return
        */
        quantile: (arr: number[], p: number) => number;
        /**
        * Locate the insertion point for x in array to maintain sorted order
        *
        * @param arr Array to search
        * @param x Value to serch for insertion point
        * @param low Minimum value of array subset
        * @param hihg Maximum value of array subset
        */
        bisect: (arr: any[], x: any, low?: number, high?: number) => number;
        /**
        * Locate the insertion point for x in array to maintain sorted order
        *
        * @param arr Array to search
        * @param x Value to serch for insertion point
        * @param low Minimum value of array subset
        * @param high Maximum value of array subset
        */
        bisectLeft: (arr: any[], x: any, low?: number, high?: number) => number;
        /**
        * Locate the insertion point for x in array to maintain sorted order
        *
        * @param arr Array to search
        * @param x Value to serch for insertion point
        * @param low Minimum value of array subset
        * @param high Maximum value of array subset
        */
        bisectRight: (arr: any[], x: any, low?: number, high?: number) => number;
        /**
        * Bisect using an accessor.
        *
        * @param accessor Accessor function
        */
        bisector(accessor: (data: any, index: number) => any): any;
        /**
        * Randomize the order of an array.
        */
        shuffle(arr: any[]): any[];
        /**
        * Reorder an array of elements according to an array of indexes
        */
        permute(arr: any[], indexes: any[]): any[];
        /**
        * Transpose a variable number of arrays.
        */
        zip(...arrs: any[]): any[];
        /**
        * Transpose an array of arrays.
        */
        transpose(matrix: any[]): any[];
        /**
        * List the keys of an associative array.
        */
        keys(map: any[]): any[];
        /**
        * List the values of an associative array.
        */
        values(map: any[]): any[];
        /**
        * List the key-value entries of an associative array.
        */
        entries(map: any[]): any[];
        /**
        * merge multiple arrays into one array
        */
        merge(...map: any[]): any[];
        /**
        * Generate a range of numeric values.
        */
        range: (start: number, stop?: number, step?: number) => number[];
        /**
        * Group array elements hierarchically.
        */
        nest(): Nest;

        // Loading resources
        xhr: {
            (url: string, callback: (xhr: XMLHttpRequest) => void ): void;
            (url: string, mime: string, callback: (xhr: XMLHttpRequest) => void ): void;
        };
        text: {
            (url: string, callback: (response: string) => void ): void;
            (url: string, mime: string, callback: (response: string) => void ): void;
        };
        json: (url: string, callback: (response: any) => void ) => void;
        xml: {
            (url: string, callback: (response: Document) => void ): void;
            (url: string, mime: string, callback: (response: Document) => void ): void;
        };
        html: (url: string, callback: (response: DocumentFragment) => void ) => void;
        csv: {
            (url: string, callback: (error: any, response: any[]) => void );
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

        time: Time;
        scale: {
            linear(): LinearScale;
            ordinal(): OrdinalScale;
            quantize(): QuantizeScale;
            category10(): OrdinalScale;
            category20(): OrdinalScale;
            category20b(): OrdinalScale;
            category20c(): OrdinalScale;
        };
        interpolate: BaseInterpolate;
        interpolateNumber: BaseInterpolate;
        interpolateRound: BaseInterpolate;
        interpolateString: BaseInterpolate;
        interpolateRgb: BaseInterpolate;
        interpolateHsl: BaseInterpolate;
        interpolateArray: BaseInterpolate;
        interpolateObject: BaseInterpolate;
        interpolateTransform: BaseInterpolate;
        layout: Layout;
        svg: Svg;
        random: Random;

        format(specifier: string): (value: number) => string;
    }

    interface Selection extends Selectors {
        attr: {
            (name: string): string;
            (name: string, value: any): Selection;
            (name: string, valueFunction: (data: any, index: number) => any): Selection;
        };

        classed: {
            (name: string): string;
            (name: string, value: any): Selection;
            (name: string, valueFunction: (data: any, index: number) => any): Selection;
        };

        style: {
            (name: string): string;
            (name: string, value: any, priority?: string): Selection;
            (name: string, valueFunction: (data: any, index: number) => any, priority?: string): Selection;
        };

        property: {
            (name: string): void;
            (name: string, value: any): Selection;
            (name: string, valueFunction: (data: any, index: number) => any): Selection;
        };

        text: {
            (): string;
            (value: any): Selection;
            (valueFunction: (data: any, index: number) => any): Selection;
        };

        html: {
            (): string;
            (value: any): Selection;
            (valueFunction: (data: any, index: number) => any): Selection;
        };

        append: (name: string) => Selection;
        insert: (name: string, before: string) => Selection;
        remove: () => Selection;

        data: {
            (values: (data: any, index: number) => any): UpdateSelection;
            (values: any[], key?: (data: any, index: number) => any): UpdateSelection;
        };

        datum: {
            (values: (data: any, index: number) => any): UpdateSelection;
            (values: any): UpdateSelection;
        };

        filter: {
            (filter: (data: any, index: number) => bool): UpdateSelection;
            (filter: string): UpdateSelection;
        };

        call(callback: (selection: Selection) => void ): Selection;
        each(eachFunction: (data: any, index: number) => any): Selection;
        on: {
            (type: string): (data: any, index: number) => any;
            (type: string, listener: (data: any, index: number) => any, capture?: bool): Selection;
        };

        transition: () => Transition;
    }

    interface EnterSelection {
        append: (name: string) => Selection;
        insert: (name: string, before: string) => Selection;
        select: (selector: string) => Selection;
        empty: () => bool;
        node: () => Node;
    }

    interface UpdateSelection extends Selection {
        enter: () => EnterSelection;
        update: () => Selection;
        exit: () => Selection;
    }

    interface Transition {
        duration: {
            (duration: number): Transition;
            (duration: (data: any, index: number) => any): Transition;
        };
        delay: {
            (delay: number): Transition;
            (delay: (data: any, index: number) => any): Transition;
        };
        attr: {
            (name: string): string;
            (name: string, value: any): Transition;
            (name: string, valueFunction: (data: any, index: number) => any): Transition;
        };
        call(callback: (selection: Selection) => void ): Transition;

        select: (selector: string) => Transition;
        selectAll: (selector: string) => Transition;
    }

    interface Nest {
        key(keyFunction: (data: any, index: number) => any): Nest;
        rollup(rollupFunction: (data: any, index: number) => any): Nest;
        map(values: any[]): Nest;
    }

    interface Time {
        second: Interval;
        minute: Interval;
        hour: Interval;
        day: Interval;
        week: Interval;
        sunday: Interval;
        monday: Interval;
        tuesday: Interval;
        wednesday: Interval;
        thursday: Interval;
        friday: Interval;
        saturday: Interval;
        month: Interval;
        year: Interval;

        seconds: Range;
        minutes: Range;
        hours: Range;
        days: Range;
        weeks: Range;
        months: Range;
        years: Range;

        sundays: Range;
        mondays: Range;
        tuesdays: Range;
        wednesdays: Range;
        thursdays: Range;
        fridays: Range;
        saturdays: Range;
        format: {

            (specifier: string): TimeFormat;
            utc: (specifier: string) => TimeFormat;
            iso: TimeFormat;
        };

        scale(): TimeScale;
    }

    interface Range {
        (start: Date, end: Date, step?: number): Date[];
    }

    interface Interval {
        (date: Date): Date;
        floor: (date: Date) => Date;
        round: (date: Date) => Date;
        ceil: (date: Date) => Date;
        range: Range;
        offset: (date: Date, step: number) => Date;
        utc: Interval;
    }

    interface TimeFormat {
        (date: Date): string;
        parse: (string: string) => Date;
    }

    interface Scale {
        (value: any): any;
        domain: {
            (values: any[]): Scale;
            (): any[];
        };
        range: {
            (values: any[]): Scale;
            (): any[];
        };
        copy: Scale;
    }

    interface LinearScale extends Scale {
        (value: number): number;
        invert(value: number): number;
        domain(numbers: any[]): LinearScale;
        range: {
            (values: any[]): LinearScale;
            (): any[];
        };
        rangeRound: (values: any[]) => LinearScale;
        interpolate: {
            (): Interpolate;
            (factory: Interpolate): LinearScale;
        };
        clamp(clamp: bool): LinearScale;
        nice(): LinearScale;
        ticks(count: number): any[];
        tickFormat(count: number): (n: number) => string;
        copy: LinearScale;
    }

    interface OrdinalScale extends Scale {
        (value: any): any;
        domain: {
            (values: any[]): OrdinalScale;
            (): any[];
        };
        range: {
            (values: any[]): OrdinalScale;
            (): any[];
        };
        rangePoints(interval: any[], padding?: number): OrdinalScale;
        rangeBands(interval: any[], padding?: number, outerPadding?: number): OrdinalScale;
        rangeRoundBands(interval: any[], padding?: number, outerPadding?: number): OrdinalScale;
        rangeBand(): number;
        rangeExtent(): any[];
        copy: OrdinalScale;
    }

    interface QuantizeScale extends Scale {
        (value: any): any;
        domain: {
            (values: number[]): QuantizeScale;
            (): any[];
        };
        range: {
            (values: any[]): QuantizeScale;
            (): any[];
        };
        copy: QuantizeScale;
    }

    interface TimeScale extends Scale {
        (value: Date): number;
        invert(value: number): Date;
        domain(numbers: any[]): TimeScale;
        range: {
            (values: any[]): TimeScale;
            (): any[];
        };
        rangeRound: (values: any[]) => TimeScale;
        interpolate: {
            (): Interpolate;
            (factory: InterpolateFactory): TimeScale;
        };
        clamp(clamp: bool): TimeScale;
        ticks: {
            (count: number): any[];
            (range: Range, count: number): any[];
        };
        tickFormat(count: number): (n: number) => string;
        copy(): TimeScale;
    }

    interface InterpolateFactory {
        (a: any, b: any): BaseInterpolate;
    }
    interface BaseInterpolate {
        (a: any, b: any): Interpolate;
    }

    interface Interpolate {
        (t: number): number;
    }

    interface Layout {
        stack(): StackLayout;
        pie(): PieLayout;
    }

    interface StackLayout {
        (layers: any[], index?: number): any[];
        values(accessor?: (d: any) => any): StackLayout;
        offset(offset: string): StackLayout;
    }

    interface PieLayout {
        (values: any[], index?: number): ArcDescriptor[];
        value: {
            (): (d: any, index: number) => number;
            (accessor: (d: any, index: number) => number): PieLayout;
        };
        sort: {
            (): (d1: any, d2: any) => number;
            (comparator: (d1: any, d2: any) => number): PieLayout;
        };
        startAngle: {
            (): number;
            (angle: number): Arc;
            (angle: () => number): Arc;
        };
        endAngle: {
            (): number;
            (angle: number): Arc;
            (angle: () => number): Arc;
        };
    }

    interface ArcDescriptor {
        value: any;
        data: any;
        startAngle: number;
        endAngle: number;
    }

    interface Symbol {
        type: (string) => Symbol;
        size: (number) => Symbol;
    }

    interface Svg {
        /**
        * Create a new symbol generator
        */
        symbol: () => Symbol;
        /**
        * Create a new axis generator
        */
        axis(): Axis;
        /**
        * Create a new arc generator
        */
        arc(): Arc;
        /**
        * Create a new line generator
        */
        line(): Line;
        /**
        * Create a new area generator
        */
        area(): Area;
    }

    interface Axis {
        (selection: Selection): void;
        scale: {
            (): any;
            (scale: any): Axis;
        };

        orient: {
            (): string;
            (orientation: string): Axis;
        };

        ticks: {
            (count: number): Axis;
            (range: Range, count?: number): Axis;
        };

        tickSubdivide(count: number): Axis;
        tickSize(major?: number, minor?: number, end?: number): Axis;
        tickFormat(formatter: (value: any) => string): Axis;
    }

    interface Arc {
        (options?: ArcOptions): string;
        innerRadius: {
            (): number;
            (radius: number): Arc;
            (radius: () => number): Arc;
        };
        outerRadius: {
            (): number;
            (radius: number): Arc;
            (radius: () => number): Arc;
        };
        startAngle: {
            (): number;
            (angle: number): Arc;
            (angle: () => number): Arc;
        };
        endAngle: {
            (): number;
            (angle: number): Arc;
            (angle: () => number): Arc;
        };
        centroid(options?: ArcOptions): number[];
    }

    interface ArcOptions {
        innerRadius?: number;
        outerRadius?: number;
        startAngle?: number;
        endAngle?: number;
    }

    interface Line {
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
            (accessor: (data: any) => any): Line;
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
            (accessor: (data: any) => any): Line;
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
            (interpolate: string): Line;
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
            (tension: number): Line;
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
            (defined: (data: any) => any): Line;
        };
    }

    interface Area {
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
            (accessor: (data: any) => any): Area;
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
            (accessor: (data: any) => any): Area;
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
            (accessor: (data: any) => any): Area;
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
            (accessor: (data: any) => any): Area;
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
            (accessor: (data: any) => any): Area;
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
            (accessor: (data: any) => any): Area;
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
            (interpolate: string): Area;
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
            (tension: number): Area;
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
            (defined: (data: any) => any): Area;
        };
    }

    interface Random {
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
}

declare var d3: D3.Base;
