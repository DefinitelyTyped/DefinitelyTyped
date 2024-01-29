interface defaultOptions {
    keyLength: number;
    work: number;
    hashMethod: string;
}

type HashCallback = (err: Error, hash: string) => void;
type VerifyCallback = (err: Error, isValid: boolean) => void;

declare function credential(defaultOptions?: defaultOptions): {
    hash(password: string, callback: HashCallback): void;
    hash(password: string): Promise<string>;
    // iterations(work: number, base): number;
    verify(hash: string, password: string, callback: VerifyCallback): void;
    verify(hash: string, password: string): Promise<boolean>;
    expired(hash: string, days: number): boolean;
};

export = credential;
