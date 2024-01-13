export = TokenGenerator;

declare class TokenGenerator {
    constructor(options?: TokenGenerator.Options);

    generate(length?: number): string;
    generate(length: number, callback: TokenGenerator.Callback): void;
    generate(callback: TokenGenerator.Callback): void;
}

declare namespace TokenGenerator {
    interface OptionsObject {
        chars?: string | undefined;
        length?: number | undefined;
    }

    type Options = number | string | OptionsObject;
    type Callback = (error: any, token: string) => void;
}
