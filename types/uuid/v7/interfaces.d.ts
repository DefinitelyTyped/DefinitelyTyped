// Uses ArrayLike to admit Unit8 and co.
export type OutputBuffer = ArrayLike<number>;
export type InputBuffer = ArrayLike<number>;

export interface RandomOptions {
    random?: InputBuffer;
}
export interface RngOptions {
    rng?: () => InputBuffer;
}

export interface V1BaseOptions {
    node?: InputBuffer;
    clockseq?: number;
    msecs?: number | Date;
    nsecs?: number;
}
export interface V1RandomOptions extends V1BaseOptions, RandomOptions {}
export interface V1RngOptions extends V1BaseOptions, RngOptions {}

export type V1Options = V1RandomOptions | V1RngOptions;
export type V4Options = RandomOptions | RngOptions;

export type v1String = (options?: V1Options) => string;
export type v1Buffer = <T extends OutputBuffer>(options: V1Options | null | undefined, buffer: T, offset?: number) => T;
export type v1 = v1Buffer & v1String;

export type v4String = (options?: V4Options) => string;
export type v4Buffer = <T extends OutputBuffer>(options: V4Options | null | undefined, buffer: T, offset?: number) => T;
export type v4 = v4Buffer & v4String;

export type v3String = (name: string | InputBuffer, namespace: string | InputBuffer) => string;
export type v3Buffer = <T extends OutputBuffer>(name: string | InputBuffer, namespace: string | InputBuffer, buffer: T, offset?: number) => T;
export interface v3Static {
    // https://github.com/uuidjs/uuid/blob/master/src/v35.js#L22
    DNS: string;
    // https://github.com/uuidjs/uuid/blob/master/src/v35.js#L23
    URL: string;
}
export type v3 = v3Buffer & v3String & v3Static;

export type v5String = (name: string | InputBuffer, namespace: string | InputBuffer) => string;
export type v5Buffer = <T extends OutputBuffer>(name: string | InputBuffer, namespace: string | InputBuffer, buffer: T, offset?: number) => T;
export interface v5Static {
    // https://github.com/uuidjs/uuid/blob/master/src/v35.js#L22
    DNS: string;
    // https://github.com/uuidjs/uuid/blob/master/src/v35.js#L23
    URL: string;
}
export type v5 = v5Buffer & v5String & v5Static;
