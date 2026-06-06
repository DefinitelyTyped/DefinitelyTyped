declare class ConvexHullGrahamScan {
    addPoint(x: number, y: number): void;
    getHull(): Array<{ x: number; y: number }>;
}

export = ConvexHullGrahamScan;
export as namespace ConvexHullGrahamScan;
