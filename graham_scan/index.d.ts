// Type definitions for graham_scan v1.0.2
// Project: https://github.com/brian3kb/graham_scan_js
// Definitions by: Harm Berntsen <https://github.com/hberntsen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
declare class ConvexHullGrahamScan {
    addPoint(x: number, y: number): void;
    getHull(): {x: number, y: number}[];
}

export = ConvexHullGrahamScan;
export as namespace ConvexHullGrahamScan;
