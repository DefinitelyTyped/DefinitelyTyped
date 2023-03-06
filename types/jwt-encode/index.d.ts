// Type definitions for jwt-encode 1.0
// Project: https://www.npmjs.com/package/jwt-encode
// Definitions by: Shakirov Kirill <https://github.com/turisap>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface BaseOptions {
    alg: 'HS256';
    typ: 'JWT';
}

type Options = Partial<BaseOptions> & {
    [key: string]: string;
};

declare function sign(data: unknown, secret: string, options?: Options): string;

export = sign;
