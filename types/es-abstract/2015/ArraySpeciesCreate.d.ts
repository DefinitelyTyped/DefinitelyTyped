declare function ArraySpeciesCreate<T>(originalArray: readonly T[], length: number): T[];
declare function ArraySpeciesCreate<T>(originalArray: ArrayLike<T>, length: number): ArrayLike<T> | T[];
export = ArraySpeciesCreate;
