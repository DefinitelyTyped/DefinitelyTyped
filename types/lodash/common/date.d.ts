import _ = require("../index");
declare module "../index" {
    interface Stat {
        now(): number;
    }
    interface Imp<TValue> {
        now(): number;
    }
    interface Exp<TValue> {
        now(): Exp<number>;
    }
}
