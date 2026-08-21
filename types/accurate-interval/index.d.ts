declare function accurateInterval(
    func: (scheduledTime: number) => void,
    interval: number,
    opts: accurateInterval.Opts,
): accurateInterval.AccurateInterval;
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
