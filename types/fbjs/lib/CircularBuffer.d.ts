declare class CircularBuffer {
    write(entry: any): CircularBuffer;
    clear(): CircularBuffer;
    read(): any[];
}

declare namespace CircularBuffer {}

export = CircularBuffer;
