// Type definitions for Tracking.js v1.1.2
// Project: https://github.com/eduardolundgren/tracking.js
// Definitions by: Tim Perry <https://github.com/pimterry>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace tracking {
  export class ColorTracker extends Tracker {
    constructor(colours: string[]);

    static registerColor(name: string, predicate: (r: number, g: number, b: number) => boolean): void;

    getColors(): string[];
    getMinDimension(): number;
    getMaxDimension(): number;
    getMinGroupSize(): number;
    setColors(colors: string[]): void;
    setMinDimension(minDimension: number): void;
    setMaxDimension(maxDimension: number): void;
    setMinGroupSize(maxDimension: number): void;
  }

  export class ObjectTracker extends Tracker {
    constructor(objects: string[]);

    getClassifiers(): number[];
    getEdgesDensity(): number;
    getInitialScale(): number;
    getScaleFactor(): number;
    getStepSize(): number;
    setClassifiers(classifiers: number[]): void;
    setEdgesDensity(edgesDensity: number): void;
    setInitialScale(initialScale: number): void;
    setScaleFactor(scaleFactor: number): void;
    setStepSize(stepSize: number): void;
  }

  class Tracker {
    constructor(target: string);
    on(eventName: string, callback: (event: TrackEvent) => void): void;
  }

  interface TrackEvent {
    data: TrackRect[];
  }

  interface TrackRect {
    x: number;
    y: number;
    height: number;
    width: number;
    color: string;
  }

  interface TrackerTask {
    stop(): void;
    run(): void;
  }

  export function track(selector: string, tracker: tracking.Tracker): TrackerTask;
}
