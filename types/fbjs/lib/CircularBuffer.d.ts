declare class CircularBuffer {
    write(entry): CircularBuffer;
    clear(): CircularBuffer;
    read(): any[];
}

declare namespace CircularBuffer {}

export = CircularBuffer;
