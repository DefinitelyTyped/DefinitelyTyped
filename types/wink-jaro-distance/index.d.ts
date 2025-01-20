declare function jaro(a: string, b: string): {
    similarity: number;
    distance: number;
};
export = jaro;
