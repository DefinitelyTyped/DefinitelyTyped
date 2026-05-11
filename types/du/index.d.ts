interface Options {
    disk?: boolean | undefined;
    filter?: ((dir: string) => boolean) | undefined;
}

declare function du(dir: string, options?: Options): Promise<number>;
declare function du(dir: string, options: Options, callback: (err: Error | null, data?: number) => any): void;
declare function du(dir: string, callback: (err: Error | null, data?: number) => any): void;

export = du;
