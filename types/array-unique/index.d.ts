declare function arrayUnique<T>(arr: T[]): T[];

declare namespace arrayUnique {
    function immutable<T>(arr: readonly T[]): T[];
}

export = arrayUnique;
