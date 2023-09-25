// Type definitions for Stats.js 0.17.0
// Project: https://github.com/mrdoob/stats.js
// Definitions by: Gregory Dalton <https://github.com/gregolai>,
//                 Harm Berntsen <https://github.com/hberntsen>,
//                 Dan Vanderkam <https://github.com/danvk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class Stats {
    constructor();
    REVISION: number;
    dom: HTMLDivElement;

    /**
     * @param value 0:fps, 1: ms, 2: mb, 3+: custom
     */
    showPanel(value: number): void;
    begin(): void;
    end(): number;
    update(): void;

    addPanel(panel: Stats.Panel): Stats.Panel;
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
