export class SequenceMatcher<T> {
    constructor(isjunk: (() => boolean) | null, left: T, right: T, autojunk?: boolean);
    setSeqs(left: T, right: T): ((char: string) => boolean) | undefined;
    setSeq1(left: T): null | undefined;
    setSeq2(right: T): ((char: string) => boolean) | undefined;
    findLongestMatch(
        leftIndexStart: number,
        leftIndexEnd: number,
        rightIndexStart: number,
        rightIndexEnd: number,
    ): [number, number, number];
    getMatchingBlocks(): Array<[number, number, number]>;
    getOpcodes(): Array<["replace" | "delete" | "insert" | "equal", number, number, number, number]>;
    ratio(): number;
    quickRatio(): number;
    realQuickRatio(): number;
}

export class Differ {
    constructor(linejunk?: (s: string) => boolean, charjunk?: (s: string) => boolean);
    compare(a: ReadonlyArray<string>, b: ReadonlyArray<string>): string[];
}

export function unifiedDiff(
    from: ReadonlyArray<string>,
    to: ReadonlyArray<string>,
    args: {
        fromfile?: string;
        tofile?: string;
        fromfiledate?: string;
        tofiledate?: string;
        lineterm?: string;
    },
): string[];

export function contextDiff(
    from: ReadonlyArray<string>,
    to: ReadonlyArray<string>,
    args: {
        fromfile?: string;
        tofile?: string;
        fromfiledate?: string;
        tofiledate?: string;
        lineterm?: string;
    },
): string[];

export function ndiff(
    from: ReadonlyArray<string>,
    to: ReadonlyArray<string>,
    linejunk?: (s: string) => boolean,
    charjunk?: (s: string) => boolean,
): string[];

export function restore(delta: string[], which: 1 | 2): string[];

export function getCloseMatches(word: string, possibilities: string[], n?: number, cutoff?: number): string[];
