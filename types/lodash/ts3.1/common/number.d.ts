import _ = require("../index");
declare module "../index" {
    // clamp
    interface LoDashStatic {
        clamp(number: number, lower: number, upper: number): number;
        clamp(number: number, upper: number): number;
    }
    interface LoDashImplicitWrapper<TValue> {
        clamp(lower: number, upper: number): number;
        clamp(upper: number): number;
    }
    interface LoDashExplicitWrapper<TValue> {
        clamp(lower: number, upper: number): ExpU<number>;
        clamp(upper: number): ExpU<number>;
    }
    // inRange
    interface LoDashStatic {
        inRange(n: number, start: number, end?: number): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        inRange(start: number, end?: number): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        inRange(start: number, end?: number): ExpU<boolean>;
    }
    // random
    interface LoDashStatic {
        random(floating?: boolean): number;
        random(max: number, floating?: boolean): number;
        random(min: number, max: number, floating?: boolean): number;
        random(min: number, index: string | number, guard: object): number;
    }
    interface LoDashImplicitWrapper<TValue> {
        random(floating?: boolean): number;
        random(max: number, floating?: boolean): number;
    }
    interface LoDashExplicitWrapper<TValue> {
        random(floating?: boolean): ExpU<number>;
        random(max: number, floating?: boolean): ExpU<number>;
    }
}
