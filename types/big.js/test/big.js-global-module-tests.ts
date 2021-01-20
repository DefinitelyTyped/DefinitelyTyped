// Usage of UMD globals should be prohibited inside modules

// This file has no imports, so use a dummy export to mark this file as a module.
export {};

function f() {
    const b1 = new Big(0); // $ExpectError
    const b2 = Big(0); // $ExpectError

    Big.DP = 40; // $ExpectError
}
