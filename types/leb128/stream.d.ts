declare class FakeStream {
    buffer: Buffer;

    constructor(buf: Buffer);

    read(size: number): Buffer;

    write(buf: Buffer): void;
}

export = FakeStream;
