// Type definitions for Stats.js 0.16.0
// Project: http://github.com/mrdoob/stats.js
// Definitions by: Gregory Dalton <https://github.com/gregolai>, Harm Berntsen <https://github.com/hberntsen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class Stats {
    REVISION: number;
    dom: HTMLDivElement;

    /**
     * @param value 0:fps, 1: ms, 2: mb, 3+: custom
     */
    showPanel(value: number): void;
    begin(): void;
    end(): number;
    update(): void;
}

declare module "stats.js" {
    export = Stats;
}
