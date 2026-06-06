interface BaseOptions {
    alg: "HS256";
    typ: "JWT";
}

type Options = Partial<BaseOptions> & {
    [key: string]: string;
};

declare function sign(data: unknown, secret: string, options?: Options): string;

export = sign;
