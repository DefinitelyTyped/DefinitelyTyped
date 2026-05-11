/// <reference types="node" />
export = firstline;

declare function firstline(filePath: string, opts?: firstline.Options): Promise<string>;

declare namespace firstline {
    interface Options {
        /** @default 'utf8' */
        encoding?: BufferEncoding | undefined;
        /** @default '\n' */
        lineEnding?: string | undefined;
    }
}
