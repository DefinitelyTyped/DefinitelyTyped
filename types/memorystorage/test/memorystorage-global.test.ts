// Usage of UMD globals should be prohibited inside modules

// This file has no imports, so use a dummy export to mark this file as a module.
export {};

function f() {
    // @ts-expect-error
    const storage1 = new MemoryStorage();
    // @ts-expect-error
    const storage2 = MemoryStorage(0);
}
