declare function arrayUnique<T>(arr: T[]): T[];

declare namespace arrayUnique {
    function immutable<T>(arr: ReadonlyArray<T>): T[];
}

export = arrayUnique;
