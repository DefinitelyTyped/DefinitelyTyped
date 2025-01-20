type Pointer = number;

interface LibavCore {
    NULL: Pointer;
}

declare function createLibavCore(): Promise<LibavCore>;

export = createLibavCore;
