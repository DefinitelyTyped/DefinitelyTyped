// Uses ArrayLike to admit Unit8 and co.
export type OutputBuffer = ArrayLike<number>;
export type InputBuffer = ArrayLike<number>;

export interface V1Options {
    node?: InputBuffer | undefined;
    clockseq?: number | undefined;
    msecs?: number | Date | undefined;
    nsecs?: number | undefined;
}

export type V4Options = { random: InputBuffer } | { rng(): InputBuffer };

export type v1String = (options?: V1Options) => string;
export type v1Buffer = <T extends OutputBuffer>(options: V1Options | null | undefined, buffer: T, offset?: number) => T;
export type v1 = v1Buffer & v1String;

export type v4String = (options?: V4Options) => string;
export type v4Buffer = <T extends OutputBuffer>(options: V4Options | null | undefined, buffer: T, offset?: number) => T;
export type v4 = v4Buffer & v4String;

export type v5String = (name: string | InputBuffer, namespace: string | InputBuffer) => string;
export type v5Buffer = <T extends OutputBuffer>(
    name: string | InputBuffer,
    namespace: string | InputBuffer,
    buffer: T,
    offset?: number,
) => T;
export type v5 = v5Buffer & v5String;
