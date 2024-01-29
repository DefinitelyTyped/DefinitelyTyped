/// <reference types="node" />

declare namespace uuid {
    interface V1Options {
        node?: number[] | undefined;
        clockseq?: number | undefined;
        msecs?: number | Date | undefined;
        nsecs?: number | undefined;
    }

    type V4Options = { random: number[] } | { rng: () => number[] };

    interface UuidStatic {
        (options?: V4Options): string;
        (options: V4Options | null, buffer: number[], offset?: number): number[];
        (options: V4Options | null, buffer: Buffer, offset?: number): Buffer;

        v1(options?: V1Options): string;
        v1(options: V1Options | null, buffer: number[], offset?: number): number[];
        v1(options: V1Options | null, buffer: Buffer, offset?: number): Buffer;
        v4: UuidStatic;
        parse(id: string): number[];
        parse(id: string, buffer: number[], offset?: number): number[];
        parse(id: string, buffer: Buffer, offset?: number): Buffer;
        unparse(buffer: number[] | Buffer, offset?: number): string;
    }
}

declare const uuid: uuid.UuidStatic;
export = uuid;
