declare namespace sexagesimal {
    interface Coord {
        lat: number;
        lon: number;
    }

    interface DirMap {
        lat: "N" | "S";
        lon: "E" | "W";
    }
    type Dir = DirMap[keyof DirMap];
}

declare const sexagesimal: {
    (input: string, dims?: sexagesimal.Dir[]): null | number;
    formatPair(input: sexagesimal.Coord): string;

    format(input: sexagesimal.Coord, dim: keyof sexagesimal.DirMap): string;

    coordToDMS<T extends keyof sexagesimal.DirMap>(input: number, dim: T): {
        whole: number;
        minutes: number;
        seconds: number;
        dir: sexagesimal.DirMap[T];
    };
    pair(input: string, dims?: sexagesimal.Dir[]): null | [number, number];
};
export = sexagesimal;
