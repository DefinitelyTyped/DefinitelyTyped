/// <reference types="node" />

declare namespace buffer {
    type Buffer = () => NodeJS.ReadWriteStream;
}

declare var buffer: buffer.Buffer;

export = buffer;
