// Type definitions for accurate-interval 1.0
// Project: https://github.com/klyngbaek/accurate-interval#readme
// Definitions by: Artur Dziedziczak <https://github.com/grayrattus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function accurateInterval(func: (scheduledTime: number) => void, interval: number, opts: accurateInterval.Opts): accurateInterval.AccurateInterval;
export = accurateInterval;

declare namespace accurateInterval {
    interface Opts {
        aligned: boolean;
        immediate: boolean;
    }

    interface AccurateInterval {
        clear: () => void;
    }
}
