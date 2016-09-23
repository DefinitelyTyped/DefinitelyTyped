// Type definitions for D3JS d3-chord module v1.0.2
// Project: https://github.com/d3/d3-chord/
// Definitions by: Tom Wanzek <https://github.com/tomwanzek>, Alex Ford <https://github.com/gustavderdrache>, Boris Yankov <https://github.com/borisyankov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// ---------------------------------------------------------------------
// Chord
// ---------------------------------------------------------------------

export interface ChordSubgroup {
    startAngle: number;
    endAngle: number;
    value: number;
    index: number;
    subindex: number;
}

export interface Chord {
    source: ChordSubgroup;
    target: ChordSubgroup;
}

export interface ChordGroup {
    startAngle: number;
    endAngle: number;
    value: number;
    index: number;
}

export interface Chords extends Array<Chord> {
    groups: Array<ChordGroup>;
}

export interface ChordLayout {
    (matrix: number[][]): Chords;
    padAngle(): number;
    padAngle(angle: number): this;
    sortGroups(): ((a: number, b: number) => number) | null;
    sortGroups(compare: null): this;
    sortGroups(compare: (a: number, b: number) => number): this;
    sortSubgroups(): ((a: number, b: number) => number) | null;
    sortSubgroups(compare: null): this;
    sortSubgroups(compare: (a: number, b: number) => number): this;
    sortChords(): ((a: number, b: number) => number) | null;
    sortChords(compare: null): this;
    sortChords(compare: (a: number, b: number) => number): this;
}

export function chord(): ChordLayout;

// ---------------------------------------------------------------------
// Ribbon
// ---------------------------------------------------------------------


export interface RibbonGenerator<This, ChordDatum, ChordSubgroupDatum> {
    (this: This, d: ChordDatum, ...args: any[]): string | undefined;
    source(): (this: This, d: ChordDatum, ...args: any[]) => ChordSubgroupDatum;
    source(source: (this: This, d: ChordDatum, ...args: any[]) => ChordSubgroupDatum): this;
    target(): (this: This, d: ChordDatum, ...args: any[]) => ChordSubgroupDatum;
    target(target: (this: This, d: ChordDatum, ...args: any[]) => ChordSubgroupDatum): this;
    radius(): (this: This, d: ChordSubgroupDatum, ...args: any[]) => number;
    radius(radius: number): this;
    radius(radius: (this: This, d: ChordSubgroupDatum, ...args: any[]) => number): this;
    startAngle(): (this: This, d: ChordSubgroupDatum, ...args: any[]) => number;
    startAngle(angle: number): this;
    startAngle(angle: (this: This, d: ChordSubgroupDatum, ...args: any[]) => number): this;
    endAngle(): (this: This, d: ChordSubgroupDatum, ...args: any[]) => number;
    endAngle(angle: number): this;
    endAngle(angle: (this: This, d: ChordSubgroupDatum, ...args: any[]) => number): this;
    context(): CanvasRenderingContext2D | null;
    context(context: CanvasRenderingContext2D): this;
    context(context: null): this;
}

export function ribbon(): RibbonGenerator<any, Chord, ChordSubgroup>;
export function ribbon<Datum, SubgroupDatum>(): RibbonGenerator<any, Datum, SubgroupDatum>;
export function ribbon<This, Datum, SubgroupDatum>(): RibbonGenerator<This, Datum, SubgroupDatum>;
