// Test creating a HamtMap variable
let map: HamtMap<string, number>;

// Test that interfaces exist and have proper structure
let config: HamtConfig<string> = {
    hash: (key: string) => key.length,
    keyEq: (a: string, b: string) => a === b,
};

// Test function signatures exist
declare const testEmpty: typeof empty;
declare const testMake: typeof make;
declare const testIsEmpty: typeof isEmpty;
declare const testHash: typeof hash;
