import _ = require("../index");
declare module "../index" {
    // clamp
    interface LoDashStatic {
        /**
         * @see _.clamp
         */
        clamp(number: number, lower: number, upper: number): number;
        /**
         * @see _.clamp
         */
        clamp(number: number, upper: number): number;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.clamp
         */
        clamp(lower: number, upper: number): number;
        /**
         * @see _.clamp
         */
        clamp(upper: number): number;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.clamp
         */
        clamp(lower: number, upper: number): PrimitiveChain<number>;
        /**
         * @see _.clamp
         */
        clamp(upper: number): PrimitiveChain<number>;
    }
    // inRange
    interface LoDashStatic {
        /**
         * @see _.inRange
         */
        inRange(n: number, start: number, end?: number): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.inRange
         */
        inRange(start: number, end?: number): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.inRange
         */
        inRange(start: number, end?: number): PrimitiveChain<boolean>;
    }
    // random
    interface LoDashStatic {
        /**
         * @see _.random
         */
        random(floating?: boolean): number;
        /**
         * @see _.random
         */
        random(max: number, floating?: boolean): number;
        /**
         * @see _.random
         */
        random(min: number, max: number, floating?: boolean): number;
        /**
         * @see _.random
         */
        random(min: number, index: string | number, guard: object): number;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.random
         */
        random(floating?: boolean): number;
        /**
         * @see _.random
         */
        random(max: number, floating?: boolean): number;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.random
         */
        random(floating?: boolean): PrimitiveChain<number>;
        /**
         * @see _.random
         */
        random(max: number, floating?: boolean): PrimitiveChain<number>;
    }
}
