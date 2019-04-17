import _ = require("../index");
declare module "../index" {
    // clamp
    interface Stat {
        clamp(number: number, lower: number, upper: number): number;
        clamp(number: number, upper: number): number;
    }
    interface Imp<TValue> {
        clamp(lower: number, upper: number): number;
        clamp(upper: number): number;
    }
    interface Exp<TValue> {
        clamp(lower: number, upper: number): Exp<number>;
        clamp(upper: number): Exp<number>;
    }
    // inRange
    interface Stat {
        inRange(n: number, start: number, end?: number): boolean;
    }
    interface Imp<TValue> {
        inRange(start: number, end?: number): boolean;
    }
    interface Exp<TValue> {
        inRange(start: number, end?: number): Exp<boolean>;
    }
    // random
    interface Stat {
        random(floating?: boolean): number;
        random(max: number, floating?: boolean): number;
        random(min: number, max: number, floating?: boolean): number;
        random(min: number, index: string | number, guard: object): number;
    }
    interface Imp<TValue> {
        random(floating?: boolean): number;
        random(max: number, floating?: boolean): number;
    }
    interface Exp<TValue> {
        random(floating?: boolean): Exp<number>;
        random(max: number, floating?: boolean): Exp<number>;
    }
}
