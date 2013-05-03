// Type definitions for d3JS
// Project: http://d3js.org/
// Definitions by: TypeScript samples
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module D3 {
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
        /**
        * Constructs a new zoom behaviour
        */
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
        *
        * @param arr Array to randomise
        */
        shuffle(arr: any[]): any[];
        /**
        * Reorder an array of elements according to an array of indexes
        *
        * @param arr Array to reorder
        * @param indexes Array containing the order the elements should be returned in
        */
        permute(arr: any[], indexes: any[]): any[];
        /**
        * Transpose a variable number of arrays.
        *
        * @param arrs Arrays to transpose
        */
        zip(...arrs: any[]): any[];
        /**
        * Transpose an array of arrays.
        *
        * @param matrix Two dimensional array to transpose
        */
        transpose(matrix: any[]): any[];
        /**
        * List the keys of an associative array.
        *
        * @param map Array of objects to get the key values from
        */
        keys(map: any[]): any[];
        /**
        * List the values of an associative array.
        *
        * @param map Array of objects to get the values from
        */
        values(map: any[]): any[];
        /**
        * List the key-value entries of an associative array.
        *
        * @param map Array of objects to get the key-value pairs from
        */
        entries(map: any[]): any[];
        /**
        * merge multiple arrays into one array
        *
        * @param map Arrays to merge
        */
        merge(...map: any[]): any[];
        /**
        * Generate a range of numeric values.
        */
        range: {
            /**
            * Generate a range of numeric values from 0.
            *
            * @param stop Value to generate the range to
            * @param step Step between each value
            */
            (stop: number, step?: number): number[];
            /**
            * Generate a range of numeric values.
            *
            * @param start Value to start
            * @param stop Value to generate the range to
            * @param step Step between each value
            */
            (start: number, stop?: number, step?: number): number[];
        };
        /**
        * Create new nest operator
        */
        nest(): Nest;

        /**
        * Request a resource using XMLHttpRequest.
        */
        xhr: {
            /**
            * Creates an asynchronous request for specified url
            *
            * @param url Url to request
            * @param callback Function to invoke when resource is loaded or the request fails
            */
            (url: string, callback?: (xhr: XMLHttpRequest) => void ): Xhr;
            /**
            * Creates an asynchronous request for specified url
            *
            * @param url Url to request
            * @param mime MIME type to request
            * @param callback Function to invoke when resource is loaded or the request fails
            */
            (url: string, mime: string, callback?: (xhr: XMLHttpRequest) => void ): Xhr;
        };
        /**
        * Request a text file
        */
        text: {
            /**
            * Request a text file
            *
            * @param url Url to request
            * @param callback Function to invoke when resource is loaded or the request fails
            */
            (url: string, callback?: (response: string) => void ): Xhr;
            /**
            * Request a text file
            *
            * @param url Url to request
            * @param mime MIME type to request
            * @param callback Function to invoke when resource is loaded or the request fails
            */
            (url: string, mime: string, callback?: (response: string) => void ): Xhr;
        };
        /**
        * Request a JSON blob
        *
        * @param url Url to request
        * @param callback Function to invoke when resource is loaded or the request fails
        */
        json: (url: string, callback?: (response: any) => void ) => Xhr;
        /**
        * Request an HTML document fragment.
        */
        xml: {
            /**
            * Request an HTML document fragment.
            *
            * @param url Url to request
            * @param callback Function to invoke when resource is loaded or the request fails
            */
            (url: string, callback?: (response: Document) => void ): Xhr;
            /**
            * Request an HTML document fragment.
            *
            * @param url Url to request
            * @param mime MIME type to request
            * @param callback Function to invoke when resource is loaded or the request fails
            */
            (url: string, mime: string, callback?: (response: Document) => void ): Xhr;
        };
        /**
        * Request an XML document fragment.
        * 
        * @param url Url to request
        * @param callback Function to invoke when resource is loaded or the request fails
        */
        html: (url: string, callback?: (response: DocumentFragment) => void ) => Xhr;
        /**
        * Request a comma-separated values (CSV) file.
        */
        csv: {
            /**
            * Request a comma-separated values (CSV) file.
            * 
            * @param url Url to request
            * @param callback Function to invoke when resource is loaded or the request fails
            */
            (url: string, callback?: (error: any, response: any[]) => void ): Xhr;
            /**
            * Parse a CSV string into objects using the header row.
            *
            * @param string CSV formatted string to parse
            */
            parse(string: string): any[];
            /**
            * Parse a CSV string into tuples, ignoring the header row.
            * 
            * @param string CSV formatted string to parse
            */
            parseRows(string: string, accessor: (row: any[], index: number) => any): any;
            /**
            * Format an array of tuples into a CSV string.
            *
            * @param rows Array to convert to a CSV string
            */
            format(rows: any[]): string;
        };
        /**
        * Request a tab-separated values (TSV) file
        */
        tsv: {
            /**
            * Request a tab-separated values (TSV) file
            * 
            * @param url Url to request
            * @param callback Function to invoke when resource is loaded or the request fails
            */
            (url: string, callback?: (error: any, response: any[]) => void ): Xhr;
            /**
            * Parse a TSV string into objects using the header row.
            *
            * @param string TSV formatted string to parse
            */
            parse(string: string): any[];
            /**
            * Parse a TSV string into tuples, ignoring the header row.
            * 
            * @param string TSV formatted string to parse
            */
            parseRows(string: string, accessor: (row: any[], index: number) => any): any;
            /**
            * Format an array of tuples into a TSV string.
            *
            * @param rows Array to convert to a TSV string
            */
            format(rows: any[]): string;
        };

        /**
        * Time Functions
        */
        time: Time;

        /**
        * Scales
        */
        scale: {
            /**
            * Construct a linear quantitative scale.
            */
            linear(): LinearScale;
            /*
            * Construct an ordinal scale.
            */
            ordinal(): OrdinalScale;
            /**
            * Construct a linear quantitative scale with a discrete output range.
            */
            quantize(): QuantizeScale;
            /*
            * Construct an ordinal scale with ten categorical colors.
            */
            category10(): OrdinalScale;
            /*
            * Construct an ordinal scale with twenty categorical colors
            */
            category20(): OrdinalScale;
            /*
            * Construct an ordinal scale with twenty categorical colors
            */
            category20b(): OrdinalScale;
            /*
            * Construct an ordinal scale with twenty categorical colors
            */
            category20c(): OrdinalScale;
        };
        /*
        * Interpolate two values
        */
        interpolate: BaseInterpolate;
        /*
        * Interpolate two numbers
        */
        interpolateNumber: BaseInterpolate;
        /*
        * Interpolate two integers
        */
        interpolateRound: BaseInterpolate;
        /*
        * Interpolate two strings
        */
        interpolateString: BaseInterpolate;
        /*
        * Interpolate two RGB colours
        */
        interpolateRgb: BaseInterpolate;
        /*
        * Interpolate two HSL colours
        */
        interpolateHsl: BaseInterpolate;
        /*
        * Interpolate two arrays of values
        */
        interpolateArray: BaseInterpolate;
        /*
        * Interpolate two arbitary objects
        */
        interpolateObject: BaseInterpolate;
        /*
        * Interpolate two 2D matrix transforms
        */
        interpolateTransform: BaseInterpolate;

        /**
        * Layouts
        */
        layout: Layout;

        /**
        * Svg's
        */
        svg: Svg;

        /**
        * Random number generators
        */
        random: Random;

        /**
        * Create a function to format a number as a string
        *
        * @param specifier The format specifier to use
        */
        format(specifier: string): (value: number) => string;
    }

    interface Xhr {
        /**
        * Get or set request header
        */
        header: {
            /**
            * Get the value of specified request header
            *
            * @param name Name of header to get the value for
            */
            (name: string): string;
            /**
            * Set the value of specified request header
            *
            * @param name Name of header to set the value for
            * @param value Value to set the header to
            */
            (name: string, value: string): Xhr;
        };
        /**
        * Get or set MIME Type
        */
        mimeType: {
            /**
            * Get the current MIME Type
            */
            (): string;
            /**
            * Set the MIME Type for the request
            * 
            * @param type The MIME type for the request
            */
            (type: string): Xhr;
        };
        /*
        * Get or Set the function used to map the response to the associated data value
        */
        response: {
            /**
            * Get function used to map the response to the associated data value
            */
            (): (xhr: XMLHttpRequest) => any;
            /**
            * Set function used to map the response to the associated data value
            * 
            * @param value The function used to map the response to a data value
            */
            (value: (xhr: XMLHttpRequest) => any ): Xhr;
        };
        /**
        * Issue the request using the GET method
        *
        * @param callback Function to invoke on completion of request
        */
        get (callback?: (xhr: XMLHttpRequest) => void ): Xhr;
        /**
        * Issue the request using the POST method
        */
        post: {
            /**
            * Issue the request using the POST method
            *
            * @param callback Function to invoke on completion of request
            */
            (callback?: (xhr: XMLHttpRequest) => void ): Xhr;
            /**
            * Issue the request using the POST method
            *
            * @param data Data to post back in the request
            * @param callback Function to invoke on completion of request
            */
            (data: any, callback?: (xhr: XMLHttpRequest) => void ): Xhr;
        };
        /**
        * Issues this request using the specified method
        */
        send: {
            /**
            * Issues this request using the specified method
            *
            * @param method Method to use to make the request
            * @param callback Function to invoke on completion of request
            */
            (method: string, callback?: (xhr: XMLHttpRequest) => void ): Xhr;
            /**
            * Issues this request using the specified method
            *
            * @param method Method to use to make the request
            * @param data Data to post back in the request
            * @param callback Function to invoke on completion of request
            */
            (method: string, data: any, callback?: (xhr: XMLHttpRequest) => void ): Xhr;
        };
        /**
        * Aborts this request, if it is currently in-flight
        */
        abort(): Xhr;
        /**
        * Registers a listener to receive events
        *
        * @param type Enent name to attach the listener to
        * @param listener Function to attach to event
        */
        on: (type: string, listener: (data: any, index?: number) => any) => Xhr;
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

        each: (type?: string, eachFunction?: (data: any, index: number) => any) => Transition;
        transition: () => Transition;
        ease: (value: string, ...arrs: any[]) => Transition;
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
        copy(): Scale;
    }

    interface LinearScale extends Scale {
        (value: number): number;
        invert(value: number): number;
        domain: {
            (values: any[]): LinearScale;
            (): any[];
        };
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
        copy(): LinearScale;
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
        copy(): OrdinalScale;
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
        copy(): QuantizeScale;
    }

    interface TimeScale extends Scale {
        (value: Date): number;
        invert(value: number): Date;
        domain: {
            (values: any[]): TimeScale;
            (): any[];
        };
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
        force(): ForceLayout;
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
    
    // force layout definitions
    export interface twoDGraphPoint {
        id: number;
        index: number;
        name: string;
        px: number;
        py: number;
        size: number;
        weight: number;
        x: number;
        y: number;
    }

    export interface graphNode extends twoDGraphPoint {
        fixed: bool;
        children: graphNode[];
        _children: graphNode[];
    }

    export interface graphLink {
        source: graphNode;
        target: graphNode;
    }


    export interface ForceLayout {
        (): ForceLayout;
        size: {
            (): number;
            (mysize: number[]): ForceLayout;
            (accessor: (d: any, index: number) => {}): ForceLayout;

        };

        linkDistance: {
            (): number;
            (number): ForceLayout;
            (accessor: (d: any, index: number) => number): ForceLayout;
        };

        linkStrength:
            {
                (): number;
                (number): ForceLayout;
                (accessor: (d: any, index: number) => number): ForceLayout;
            };

        friction:
        {
            (): number;
            (number): ForceLayout;
            (accessor: (d: any, index: number) => number): ForceLayout;
        };


        alpha: {
            (): number;
            (number): ForceLayout;
            (accessor: (d: any, index: number) => number): ForceLayout;
        };
        charge: {
            (): number;
            (number): ForceLayout;
            (accessor: (d: any, index: number) => number): ForceLayout;
        };

        theta: {
            (): number;
            (number): ForceLayout;
            (accessor: (d: any, index: number) => number): ForceLayout;
        };

        gravity: {
            (): number;
            (number): ForceLayout;
            (accessor: (d: any, index: number) => number): ForceLayout;
        };

        links: {
            (): graphLink[];
            (arLinks: graphLink[]): ForceLayout;

        };
        nodes:
        {
            (): graphNode[];
            (arNodes: graphNode[]): ForceLayout;

        };
        start(): ForceLayout;
        resume(): ForceLayout;
        stop(): ForceLayout;
        tick(): ForceLayout;
        on(type: string, listener: () => void ): ForceLayout;
        drag(): ForceLayout;
    }


}

declare var d3: D3.Base;
