// Type definitions for jwt-encode 1.0
// Project: https://www.npmjs.com/package/jwt-encode
// Definitions by: Shakirov Kirill <https://github.com/turisap>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface BaseOptions {
    alg: 'HS256';
    typ: 'JWT';
}

export type Options = Partial<BaseOptions> & {
    [key: string]: string;
};

export default function sign(data: unknown, secret: string, options?: Options): string;
