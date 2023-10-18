export declare function hashPassword(password: string): string;
export declare function hashPassword(password: string, callback: (err: any, result: string) => void): void;

export declare function validatePassword(password: string, hashedPass: string): boolean;
export declare function validatePassword(
    password: string,
    hashedPass: string,
    callback: (err: any, result: boolean) => void,
): void;
