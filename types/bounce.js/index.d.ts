/// <reference types="jquery"/>

export default Bounce;

interface Point2D {
    x: number;
    y: number;
}

interface BounceOptions<T> {
    from: T;
    to: T;
    duration?: number | undefined;
    delay?: number | undefined;
    easing?: string | undefined;
    bounces?: number | undefined;
    stiffness?: number | undefined;
}

interface AnimationOptions {
    loop?: boolean | undefined;
    remove?: boolean | undefined;
    onComplete?: (() => void) | undefined;
}

interface SerailizedComponent<T> {
    type: string;
    from: T;
    to: T;
    duration: number;
    delay: number;
    easing: string;
    bounces: number;
    stiffness: number;
}

declare class Bounce {
    static FPS: number;
    static counter: number;

    static isSupported(): boolean;

    constructor();

    scale(options: BounceOptions<Point2D>): Bounce;
    rotate(options: BounceOptions<number>): Bounce;
    translate(options: BounceOptions<Point2D>): Bounce;
    skew(options: BounceOptions<Point2D>): Bounce;

    serialize(): SerailizedComponent<number | Point2D>[];
    deserialize(serailized: SerailizedComponent<number | Point2D>[]): Bounce;

    applyTo(element: Element, options?: AnimationOptions): void;
    applyTo(elements: Element[], options?: AnimationOptions): void;
    applyTo(elements: JQuery, options?: AnimationOptions): JQueryPromise<void>;

    define(name: string): Bounce;
    remove(): void;
}
