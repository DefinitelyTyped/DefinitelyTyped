interface CodePointRecord {
    "[[CodePoint]]": string;
    "[[CodeUnitCount]]": 1 | 2;
    "[[IsUnpairedSurrogate]]": boolean;
}

declare function CodePointAt(string: string, position: number): CodePointRecord;
export = CodePointAt;
