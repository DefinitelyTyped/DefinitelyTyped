export declare function generate(password: string, options?: Options): string;
export declare function verify(password: string, hashedPassword: string): boolean;
export declare function isHashed(password: string): boolean;

export interface Options {
    algorithm?: string | undefined;
    saltLength?: number | undefined;
    iterations?: number | undefined;
}
