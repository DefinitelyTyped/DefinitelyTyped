// Type definitions for D3JS d3-chord module 1.0.0
// Project: https://github.com/d3/d3-chord/
// Definitions by: Alex Ford <https://github.com/gustavderdrache>, Boris Yankov <https://github.com/borisyankov>, Tom Wanzek <https://github.com/tomwanzek>
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
    padAngle(angle: number): ChordLayout;
    sortGroups(): ((a: number, b: number) => number) | null;
    sortGroups(compare: null): ChordLayout;
    sortGroups(compare: (a: number, b: number) => number): ChordLayout;
    sortSubgroups(): ((a: number, b: number) => number) | null;
    sortSubgroups(compare: null): ChordLayout;
    sortSubgroups(compare: (a: number, b: number) => number): ChordLayout;
    sortChords(): ((a: number, b: number) => number) | null;
    sortChords(compare: null): ChordLayout;
    sortChords(compare: (a: number, b: number) => number): ChordLayout;
}

export function chord(): ChordLayout;

// ---------------------------------------------------------------------
// Ribbon
// ---------------------------------------------------------------------


export interface RibbonGenerator<This, ChordDatum, ChordSubgroupDatum> {
    (this: This, d: ChordDatum, ...args: any[]): string | undefined;
    source(): (this: This, d: ChordDatum, ...args: any[]) => ChordSubgroupDatum;
    source(source: (this: This, d: ChordDatum, ...args: any[]) => ChordSubgroupDatum): RibbonGenerator<This, ChordDatum, ChordSubgroupDatum>;
    target(): (this: This, d: ChordDatum, ...args: any[]) => ChordSubgroupDatum;
    target(target: (this: This, d: ChordDatum, ...args: any[]) => ChordSubgroupDatum): RibbonGenerator<This, ChordDatum, ChordSubgroupDatum>;
    radius(): (this: This, d: ChordSubgroupDatum, ...args: any[]) => number;
    radius(radius: number): RibbonGenerator<This, ChordDatum, ChordSubgroupDatum>;
    radius(radius: (this: This, d: ChordSubgroupDatum, ...args: any[]) => number): RibbonGenerator<This, ChordDatum, ChordSubgroupDatum>;
    startAngle(): (this: This, d: ChordSubgroupDatum, ...args: any[]) => number;
    startAngle(angle: number): RibbonGenerator<This, ChordDatum, ChordSubgroupDatum>;
    startAngle(angle: (this: This, d: ChordSubgroupDatum, ...args: any[]) => number): RibbonGenerator<This, ChordDatum, ChordSubgroupDatum>;
    endAngle(): (this: This, d: ChordSubgroupDatum, ...args: any[]) => number;
    endAngle(angle: number): RibbonGenerator<This, ChordDatum, ChordSubgroupDatum>;
    endAngle(angle: (this: This, d: ChordSubgroupDatum, ...args: any[]) => number): RibbonGenerator<This, ChordDatum, ChordSubgroupDatum>;
    context(): CanvasRenderingContext2D | null;
    context(context: CanvasRenderingContext2D): RibbonGenerator<This, ChordDatum, ChordSubgroupDatum>;
    context(context: null): RibbonGenerator<This, ChordDatum, ChordSubgroupDatum>;
}

export function ribbon(): RibbonGenerator<any, Chord, ChordSubgroup>;
export function ribbon<Datum, SubgroupDatum>(): RibbonGenerator<any, Datum, SubgroupDatum>;
export function ribbon<This, Datum, SubgroupDatum>(): RibbonGenerator<This, Datum, SubgroupDatum>;
