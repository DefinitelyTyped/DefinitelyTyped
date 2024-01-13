interface JsSha1 {
    (message: string): string;
    update(message: string): string;
    hex(message: string): string;
    array(message: string): number[];
    digest(message: string): number[];
    arrayBuffer(message: string): ArrayBuffer;
}

declare var sha1: JsSha1;

export = sha1;
export as namespace sha1;
