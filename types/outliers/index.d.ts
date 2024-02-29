declare function outliers(input: number[]): number[];
declare function outliers<T>(path?: string): (element: T, index: number, array: T[]) => boolean;

export = outliers;
