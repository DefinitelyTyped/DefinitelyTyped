import _ = require("../index");
declare module "../index" {
    interface LoDashStatic {
        now(): number;
    }
    interface LoDashImplicitWrapper<TValue> {
        now(): number;
    }
    interface LoDashExplicitWrapper<TValue> {
        now(): ExpU<number>;
    }
}
