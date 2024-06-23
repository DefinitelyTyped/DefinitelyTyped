/**
 * Creates a new basicScroll instance.
 */
export function create(opts: Data): BasicScroll;

export interface BasicScroll {
    /**
     * Converts the start and stop position of the instance to absolute values. basicScroll relies on those values to start and stop the animation at the right position.
     * It runs the calculation once during the instance creation. .calculate() should be called when elements have altered their position or when the size of the site/viewport has changed.
     */
    calculate(): void;
    /**
     * Returns calculated data.
     * More or less a parsed version of the data used for the instance creation. The data might change when calling the calculate function.
     */
    getData(): Data;
    /**
     * Returns true when the instance is started and false when the instance is stopped.
     */
    isActive(): boolean;
    /**
     * Starts to animate the instance. basicScroll will track the scroll position and adjust the props of the instance accordingly.
     * An update will be performed only when the scroll position has changed.
     */
    start(): void;
    /**
     * Stops to animate the instance. All props of the instance will keep their last value.
     */
    stop(): void;
    /**
     * Destroys the instance.
     * Should be called when the instance is no longer needed. All props of the instance will keep their last value
     */
    destroy(): void;
    /**
     * Triggers an update of an instance, even when the instance is currently stopped.
     */
    update(): Props;
}

/**
 * @see {@link https://github.com/electerious/basicScroll#data}
 */
export interface Data {
    /**
     * DOM element/node.
     * @default null
     */
    elem?: Element | null | undefined;
    /**
     * Start position.
     * @default null
     */
    from: AnimatedType;
    /**
     * Stop position.
     * @default null
     */
    to: AnimatedType;
    /**
     * Direct mode.
     * @default false
     */
    direct?: boolean | Element | undefined;
    /**
     * Track window size changes.
     * @default true
     */
    track?: boolean | undefined;
    /**
     * Executes when the user scrolls and the viewport is within the given start and stop position
     */
    inside?: CallbackFunction | undefined;
    /**
     * Executes when the user scrolls and the viewport is outside the given start and stop position
     */
    outside?: CallbackFunction | undefined;
    props?: Props | undefined;
}

export interface Props {
    [name: string]: {
        /**
         * Start and end values.
         * @default null
         */
        from?: AnimatedType | undefined;
        /**
         * Start and end values.
         * @default null
         */
        to?: AnimatedType | undefined;
        /**
         * Animation timing.
         * @default 'linear'
         */
        timing?: KnownTimings | TimingFunction | undefined;
    };
}

export type AnimatedType = number | string | null;

export type CallbackFunction = (instance: BasicScroll, percentage: number, props: Props) => void;
export type KnownTimings =
    | "backInOut"
    | "backIn"
    | "backOut"
    | "bounceInOut"
    | "bounceIn"
    | "bounceOut"
    | "circInOut"
    | "circIn"
    | "circOut"
    | "cubicInOut"
    | "cubicIn"
    | "cubicOut"
    | "elasticInOut"
    | "elasticIn"
    | "elasticOut"
    | "expoInOut"
    | "expoIn"
    | "expoOut"
    | "linear"
    | "quadInOut"
    | "quadIn"
    | "quadOut"
    | "quartInOut"
    | "quartIn"
    | "quartOut"
    | "quintInOut"
    | "quintIn"
    | "quintOut"
    | "sineInOut"
    | "sineIn"
    | "sineOut";

export type TimingFunction = (t: number) => number;

export as namespace basicScroll;
