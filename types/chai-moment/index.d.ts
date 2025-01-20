/// <reference types="chai" />

declare global {
    namespace ChaiMoment {
        type Granularity = "year" | "month" | "week" | "day" | "hour" | "minute" | "second";
    }

    namespace Chai {
        interface Assertion {
            afterMoment(expected: any, granularity?: ChaiMoment.Granularity): void;
            beforeMoment(expected: any, granularity?: ChaiMoment.Granularity): void;
            sameMoment(expected: any, granularity?: ChaiMoment.Granularity): void;
        }

        interface AssertStatic {
            afterMoment(val: any, exp: any, granularity: ChaiMoment.Granularity, msg?: string): void;
            afterMoment(val: any, exp: any, msg?: string): void;
            beforeMoment(val: any, exp: any, granularity?: ChaiMoment.Granularity, msg?: string): void;
            beforeMoment(val: any, exp: any, msg?: string): void;
            sameMoment(val: any, exp: any, granularity?: ChaiMoment.Granularity, msg?: string): void;
            sameMoment(val: any, exp: any, msg?: string): void;
        }
    }
}

declare const chaiMoment: Chai.ChaiPlugin;
export = chaiMoment;
