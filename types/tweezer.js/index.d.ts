interface Options {
    duration?: number | undefined;
    easing?(currentTime: number, beginningTime: number, changeInValue: number, duration: number): number;
    start: number;
    end: number;
}

declare class Tweezer {
    constructor(opts: Options);

    stop(): this;

    on(name: "tick", handler: (v: number) => void): this;
    on(name: "done", handler: () => void): this;

    begin(): this;
}

export = Tweezer;
