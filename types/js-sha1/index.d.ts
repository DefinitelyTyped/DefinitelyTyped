interface JsSha1Prototype {
    update(message: string | ArrayBufferLike): JsSha1Prototype;
    hex(message?: string): string;
    array(message?: string): number[];
    digest(message?: string): number[];
    arrayBuffer(message?: string): ArrayBuffer;
}

interface JsSha1 extends JsSha1Prototype {
    (message: string | Uint8Array | ArrayBuffer | Array<number>): string;
    create(): JsSha1Prototype;
}

declare var sha1: JsSha1;

export = sha1;
export as namespace sha1;
