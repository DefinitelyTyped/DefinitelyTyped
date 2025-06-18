declare class Stats {
    constructor();

    REVISION: number;
    dom: HTMLDivElement;

    addPanel(panel: Stats.Panel): Stats.Panel;

    /**
     * @param value 0:fps, 1: ms, 2: mb, 3+: custom
     */
    showPanel(value: number): void;

    begin(): void;
    end(): number;
    update(): void;

    // Backwards Compatibility

    /**
     * @deprecated Use `dom` instead.
     */
    domElement: HTMLDivElement;

    /**
     * @deprecated Use `showPanel` instead.
     */
    setMode(value: number): void;
}

declare namespace Stats {
    class Panel {
        constructor(name: string, foregroundColor: string, backgroundColor: string);
        dom: HTMLCanvasElement;
        update(value: number, maxValue: number): void;
    }
}

declare module "stats.js" {
    export = Stats;
}
