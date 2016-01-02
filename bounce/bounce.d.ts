// Type definitions for Bounce.js v0.8.2
// Project: http://github.com/tictail/bounce.js
// Definitions by: Cherry <http://github.com/cherrry>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts"/>

declare module 'bounce.js' {
    export default Bounce

    interface Point2D {
        x: number
        y: number
    }

    interface BounceOptions<T> {
        from: T
        to: T
        duration?: number
        delay?: number
        easing?: string
        bounces?: number
        stiffness?: number
    }

    interface AnimationOptions {
        loop?: boolean
        remove?: boolean
        onComplete?: () => void
    }

    interface SerailizedComponent<T> {
        type: string
        from: T
        to: T
        duration: number
        delay: number
        easing: string
        bounces: number
        stiffness: number
    }

    class Bounce {
        static FPS: number
        static counter: number

        static isSupported(): boolean

        constructor();

        scale(options: BounceOptions<Point2D>): Bounce
        rotate(options: BounceOptions<number>): Bounce
        translate(options: BounceOptions<Point2D>): Bounce
        skew(options: BounceOptions<Point2D>): Bounce

        serialize(): SerailizedComponent<number|Point2D>[]
        deserialize(serailized: SerailizedComponent<number|Point2D>[]): Bounce

        applyTo(element: Element, options?: AnimationOptions): void
        applyTo(elements: Element[], options?: AnimationOptions): void
        applyTo(elements: JQuery, options?: AnimationOptions): JQueryPromise<void>

        define(name: string): Bounce
        remove(): void
    }
}
